"use client"

import { useEffect, useState } from 'react'
import type { MenuItem } from '@/types/menu'
import MenuItemCard from '@/components/menu/MenuItemCard'
import CategoryTabs, { CategoryFilter } from '@/components/menu/CategoryTabs'

interface CartItem extends MenuItem {
  qty: number
}

export default function OrderPage() {
  // Stati principali
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('takeaway')
  const [isLoadingMenu, setIsLoadingMenu] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('pizza')
  const [gridVisible, setGridVisible] = useState<boolean>(true)

  // Stati checkout form
  const [customer_name, setCustomerName] = useState('')
  const [customer_phone, setCustomerPhone] = useState('')
  const [customer_email, setCustomerEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [delivery_address, setDeliveryAddress] = useState('')

  // Stati UX
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Carica il menu una sola volta
  useEffect(() => {
    let mounted = true
    const loadMenu = async () => {
      try {
        const res = await fetch('/api/menu')
        if (!res.ok) throw new Error('Impossibile caricare il menu')
        const data: MenuItem[] = await res.json()
        if (mounted) {
          setMenu(Array.isArray(data) ? data : [])
        }
      } catch (err: any) {
        if (mounted) setError(err?.message || 'Errore nel caricamento del menu')
      } finally {
        if (mounted) setIsLoadingMenu(false)
      }
    }
    loadMenu()
    return () => {
      mounted = false
    }
  }, [])

  // Animazione fade-in al cambio categoria
  useEffect(() => {
    // Nasconde la griglia brevemente e ri-mostra per attivare la transition
    setGridVisible(false)
    const id = setTimeout(() => setGridVisible(true), 30)
    return () => clearTimeout(id)
  }, [selectedCategory])

  // Logica carrello
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId)
      if (!existing) return prev
      if (existing.qty <= 1) {
        return prev.filter(i => i.id !== itemId)
      }
      return prev.map(i => (i.id === itemId ? { ...i, qty: i.qty - 1 } : i))
    })
  }

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0)
  const totalFormatted = `€${total.toFixed(2)}`

  const resetForm = () => {
    setCustomerName('')
    setCustomerPhone('')
    setCustomerEmail('')
    setNotes('')
    setDeliveryAddress('')
    setOrderType('takeaway')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccessMessage(null)

    // Validazioni base
    if (!customer_name.trim()) {
      setError('Per favore inserisci il tuo nome.')
      setIsSubmitting(false)
      return
    }
    if (!customer_phone.trim()) {
      setError('Per favore inserisci il tuo numero di telefono.')
      setIsSubmitting(false)
      return
    }
    if (orderType === 'delivery' && !delivery_address.trim()) {
      setError('Per le consegne, l\'indirizzo è obbligatorio.')
      setIsSubmitting(false)
      return
    }
    if (cart.length === 0) {
      setError('Il carrello è vuoto.')
      setIsSubmitting(false)
      return
    }

    // Costruisci il payload richiesto dall'API
    const dettagli_ordine = cart.map(item => ({
      item_id: item.id,
      qty: item.qty,
      price: item.price,
    }))

    const body = {
      customer_name,
      order_type: orderType,
      total_amount: total, // verrà comunque ricalcolato server-side
      dettagli_ordine,
      ...(orderType === 'delivery' ? { delivery_address } : {}),
      customer_phone: customer_phone || undefined,
      customer_email: customer_email || undefined,
      notes: notes || undefined,
    }

    try {
      const res = await fetch('/api/ordini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const json = await res.json()
      if (!res.ok) {
        setError(json?.error || 'Errore durante l\'invio dell\'ordine.')
      } else {
        setSuccessMessage('Ordine inviato con successo!\nGrazie per aver ordinato da noi.')
        setCart([])
        resetForm()
      }
    } catch (err: any) {
      setError(err?.message || 'Errore di rete durante l\'invio dell\'ordine.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Ordina</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Colonna sinistra: Menu */}
        <div className="md:col-span-2">
          {isLoadingMenu ? (
            <div className="p-6 text-center text-gray-600">Caricamento menu...</div>
          ) : (
            <>
              <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              {/** Filtro lato client */}
              {(() => {
                const filteredMenu = selectedCategory === 'tutti'
                  ? menu
                  : menu.filter(item => item.category === selectedCategory)
                return (
                  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-out-quart motion-reduce:transition-none ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {filteredMenu.map(item => (
                      <div key={item.id} className="flex flex-col">
                        <MenuItemCard item={item} />
                        <button
                          className="mt-3 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium motion-safe:transition-colors motion-reduce:transition-none"
                          disabled={item.is_available === false}
                          onClick={() => addToCart(item)}
                        >
                          Aggiungi
                        </button>
                      </div>
                    ))}
                    {filteredMenu.length === 0 && (
                      <div className="col-span-full p-6 text-center text-gray-600">
                        Nessun piatto disponibile.
                      </div>
                    )}
                  </div>
                )
              })()}
            </>
          )}
        </div>

        {/* Colonna destra: Carrello / Checkout */}
        <div className="md:col-span-1 md:sticky md:top-6 h-fit">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Il tuo carrello</h2>
            {cart.length === 0 ? (
              <p className="text-sm text-gray-600">Il carrello è vuoto. Aggiungi qualche piatto dal menu.</p>
            ) : (
              <ul className="space-y-3">
                {cart.map(item => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.qty} • Prezzo: €{item.price.toFixed(2)}</p>
                    </div>
                    <button
                      className="text-sm px-3 py-1 bg-red-600 hover:bg-red-700 text-white motion-safe:transition-colors motion-reduce:transition-none"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Rimuovi
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-base font-medium text-gray-900">Totale</span>
              <span className="text-base font-semibold text-gray-900">{totalFormatted}</span>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Checkout</h3>

              {/* Selettore tipo ordine */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  className={`px-3 py-2 text-sm border ${orderType === 'takeaway' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300'}`}
                  onClick={() => setOrderType('takeaway')}
                >
                  Takeaway
                </button>
                <button
                  type="button"
                  className={`px-3 py-2 text-sm border ${orderType === 'delivery' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300'}`}
                  onClick={() => setOrderType('delivery')}
                >
                  Delivery
                </button>
              </div>

              {/* Form di checkout */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm"
                    value={customer_name}
                    onChange={e => setCustomerName(e.target.value)}
                    placeholder="Il tuo nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefono</label>
                  <input
                    type="tel"
                    className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm"
                    value={customer_phone}
                    onChange={e => setCustomerPhone(e.target.value)}
                    placeholder="Numero di telefono"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email (opzionale)</label>
                  <input
                    type="email"
                    className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm"
                    value={customer_email}
                    onChange={e => setCustomerEmail(e.target.value)}
                    placeholder="email@esempio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Note (opzionali)</label>
                  <textarea
                    className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Allergie, preferenze, ecc."
                    rows={3}
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Indirizzo di consegna</label>
                    <input
                      type="text"
                      className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm"
                      value={delivery_address}
                      onChange={e => setDeliveryAddress(e.target.value)}
                      placeholder="Via, numero civico, città"
                      required={orderType === 'delivery'}
                    />
                  </div>
                )}

                {error && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2 whitespace-pre-line">{successMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className={`w-full px-4 py-2 text-sm font-medium text-white transition-colors ${isSubmitting || cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Ordine'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}