import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/serverClient'

interface OrderItem {
  item_id: number
  qty: number
  price: number
  name: string // nuovo requisito: includere il nome del piatto nel payload
}

interface OrderPayload {
  customer_name: string
  order_type: 'delivery' | 'takeaway'
  total_amount: number
  dettagli_ordine: OrderItem[]
  delivery_address?: string
  customer_phone?: string
  customer_email?: string
  notes?: string
}

export async function POST(request: Request) {
  let body: OrderPayload
  try {
    body = await request.json() as OrderPayload
  } catch (err) {
    return NextResponse.json({ error: 'Body non valido: JSON richiesto.' }, { status: 400 })
  }

  const {
    customer_name,
    order_type,
    total_amount,
    dettagli_ordine,
    delivery_address,
    customer_phone,
    customer_email,
    notes,
  } = body || ({} as OrderPayload)

  // Validazioni base
  const missingFields: string[] = []
  if (!customer_name || typeof customer_name !== 'string' || customer_name.trim().length === 0) {
    missingFields.push('customer_name')
  }
  if (!order_type || (order_type !== 'delivery' && order_type !== 'takeaway')) {
    missingFields.push('order_type')
  }
  if (typeof total_amount !== 'number' || Number.isNaN(total_amount)) {
    missingFields.push('total_amount')
  }
  if (!Array.isArray(dettagli_ordine)) {
    missingFields.push('dettagli_ordine')
  }

  // Se delivery, address obbligatorio
  if (order_type === 'delivery' && (!delivery_address || typeof delivery_address !== 'string' || delivery_address.trim().length === 0)) {
    missingFields.push('delivery_address')
  }

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Campi mancanti o non validi: ${missingFields.join(', ')}` },
      { status: 400 }
    )
  }

  // Nota: la validazione specifica per ciascun elemento di dettagli_ordine viene rimossa
  // perché la logica di persistenza ora utilizza la nuova tabella "righe_ordine".

  // Calcolo del totale server-side e normalizzazione a 2 decimali
  const serverTotal = Math.round(
    dettagli_ordine.reduce((acc, item) => acc + item.qty * item.price, 0) * 100
  ) / 100

  // Logging discrepanza tra totale client e totale calcolato server
  const clientTotalNormalized = Math.round(total_amount * 100) / 100
  if (Math.abs(clientTotalNormalized - serverTotal) > 0.01) {
    console.warn('Discrepanza totale: Client ' + clientTotalNormalized + ' vs Server ' + serverTotal)
  }

  // 2) Prepara dati ordine principale (solo campi della tabella "ordini")
  const ordineData = {
    customer_name,
    order_type,
    total_amount: serverTotal,
    ...(order_type === 'delivery' ? { delivery_address } : {}),
    // opzionali
    customer_phone,
    customer_email,
    notes,
  }

  // Validazione runtime esplicita del tipo di ordine
  if (ordineData.order_type !== 'delivery' && ordineData.order_type !== 'takeaway') {
    return NextResponse.json({ error: 'Tipo ordine non valido.' }, { status: 400 })
  }

  // Hardening: impedisce al client di impostare lo stato
  if ('status' in (body as any)) {
    delete (body as any).status
  }

  // 3) Inserisci Ordine Principale
  const { data: nuovoOrdine, error: errorOrdine } = await supabase
    .from('ordini')
    .insert(ordineData)
    .select()
    .single()

  // 4) Gestisci errore ordine
  if (errorOrdine) {
    return NextResponse.json({ error: errorOrdine.message }, { status: 500 })
  }
  if (!nuovoOrdine) {
    return NextResponse.json({ error: 'Creazione ordine non riuscita.' }, { status: 500 })
  }

  // 5) Prepara dati righe ordine
  const righeData = (dettagli_ordine || []).map((item) => ({
    id_ordine: (nuovoOrdine as any).id,
    id_menu: item.item_id,
    nome_piatto: item.name,
    prezzo_unitario: item.price,
    quantita: item.qty,
  }))

  // 6) Inserisci righe ordine (inserimento multiplo)
  const { error: errorRighe } = await supabase.from('righe_ordine').insert(righeData)

  // 7) Gestisci errori righe
  if (errorRighe) {
    return NextResponse.json({ error: errorRighe.message }, { status: 500 })
  }

  // 8) Restituisci successo (ordine creato)
  return NextResponse.json(nuovoOrdine, { status: 201 })
}