import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/serverClient'

export async function POST(request: Request) {
  try {
    // 3) Leggi e valida il body
    const body = await request.json()

    const {
      customer_name,
      customer_phone,
      party_size,
      reservation_datetime,
      customer_email,
      notes,
    } = body || {}

    if (!customer_name || !customer_phone || !party_size || !reservation_datetime) {
      return NextResponse.json(
        { error: 'Dati mancanti: customer_name, customer_phone, party_size, reservation_datetime sono obbligatori.' },
        { status: 400 }
      )
    }

    // 4) Inserisci in Supabase (passiamo il body; opzionali inclusi)
    const { data, error } = await supabase
      .from('prenotazioni')
      .insert({
        customer_name,
        customer_phone,
        party_size,
        reservation_datetime,
        customer_email,
        notes,
      })
      .select()

    // 5) Gestisci risposte
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? 'Errore non gestito durante la creazione della prenotazione' },
      { status: 500 }
    )
  }
}