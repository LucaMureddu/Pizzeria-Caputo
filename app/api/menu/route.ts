import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/serverClient'

export async function GET(request: Request) {
  // 1) Leggi i parametri URL e recupera "category"
  const url = new URL(request.url)
  const categoryParam = url.searchParams.get('category')?.trim()

  // 2) Costruisci la query di base
  let query = supabase.from('menu').select('*')

  // Se category esiste ed è non vuoto, aggiungi il filtro
  if (categoryParam && categoryParam.length > 0) {
    query = query.eq('category', categoryParam)
  }

  // 3) Esegui la query
  const { data, error } = await query

  // 4) Restituisci i dati o l'errore
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}