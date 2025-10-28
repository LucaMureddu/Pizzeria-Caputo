import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/serverClient'

interface OrderItem {
  item_id: number
  qty: number
  price: number
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

  // Validazione approfondita dei dettagli ordine con messaggi specifici
  for (const item of dettagli_ordine) {
    if (item == null || typeof item !== 'object') {
      return NextResponse.json(
        { error: 'Dettagli ordine non validi: elemento mancante o non strutturato.' },
        { status: 400 }
      )
    }
    if (typeof item.item_id !== 'number' || !Number.isFinite(item.item_id)) {
      return NextResponse.json(
        { error: 'Dettagli ordine non validi: item_id mancante o non valido.' },
        { status: 400 }
      )
    }
    if (typeof item.qty !== 'number' || item.qty <= 0) {
      return NextResponse.json(
        { error: `Dettagli ordine non validi: quantità non valida per item ${item.item_id}.` },
        { status: 400 }
      )
    }
    if (typeof item.price !== 'number' || item.price < 0) {
      return NextResponse.json(
        { error: `Dettagli ordine non validi: prezzo non valido per item ${item.item_id}.` },
        { status: 400 }
      )
    }
  }

  // Calcolo del totale server-side e normalizzazione a 2 decimali
  const serverTotal = Math.round(
    dettagli_ordine.reduce((acc, item) => acc + item.qty * item.price, 0) * 100
  ) / 100

  // Logging discrepanza tra totale client e totale calcolato server
  const clientTotalNormalized = Math.round(total_amount * 100) / 100
  if (Math.abs(clientTotalNormalized - serverTotal) > 0.01) {
    console.warn('Discrepanza totale: Client ' + clientTotalNormalized + ' vs Server ' + serverTotal)
  }

  const payload = {
    customer_name,
    order_type,
    total_amount: serverTotal,
    dettagli_ordine,
    ...(order_type === 'delivery' ? { delivery_address } : {}),
    // opzionali
    customer_phone,
    customer_email,
    notes,
  }

  // Validazione runtime esplicita del tipo di ordine
  if (payload.order_type !== 'delivery' && payload.order_type !== 'takeaway') {
    return NextResponse.json({ error: 'Tipo ordine non valido.' }, { status: 400 })
  }

  // Hardening: impedisce al client di impostare lo stato
  if ('status' in payload) {
    delete (payload as any).status
  }

  const { data, error } = await supabase.from('ordini').insert(payload).select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data }, { status: 201 })
}