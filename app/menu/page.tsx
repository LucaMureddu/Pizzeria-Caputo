"use client"

import { useEffect, useState } from 'react'
import type { MenuItem } from '@/types/menu'
import MenuItemCard from '@/components/menu/MenuItemCard'

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('tutti')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch('/api/menu')
        if (!res.ok) {
          throw new Error('Errore nel caricamento del menu')
        }
        const data: MenuItem[] = await res.json()
        setMenuItems(data)
      } catch (err: any) {
        setError(err?.message ?? 'Si è verificato un errore')
      } finally {
        setIsLoading(false)
      }
    }
    fetchMenu()
  }, [])

  const filters: { label: string; value: string }[] = [
    { label: 'Tutti', value: 'tutti' },
    { label: 'Pizze', value: 'pizza' },
    { label: 'Antipasti', value: 'antipasto' },
    { label: 'Dolci', value: 'dolce' },
    { label: 'Bevande', value: 'bevanda' },
  ]

  const filteredItems = selectedCategory === 'tutti'
    ? (() => {
        // Ordina per categoria nella vista "Tutti"
        const categoryOrder: Record<string, number> = {
          antipasto: 1,
          pizza: 2,
          dolce: 3,
          bevanda: 4,
        }
        const sorted = [...menuItems].sort((a, b) => {
          const orderA = categoryOrder[a.category] ?? 99
          const orderB = categoryOrder[b.category] ?? 99
          return orderA - orderB
        })
        return sorted
      })()
    : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Il nostro Menu</h1>
          <p className="mt-2 text-gray-600">Scegli tra le nostre specialità</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {filters.map((f) => {
            const isActive = selectedCategory === f.value
            return (
              <button
                key={f.value}
                onClick={() => setSelectedCategory(f.value)}
                className={
                  `px-4 py-2 text-sm font-medium border transition-colors ` +
                  (isActive
                    ? 'bg-red-800 border-red-800 text-white'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100')
                }
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Loading / Error */}
        {isLoading && (
          <p className="text-center text-gray-500">Caricamento del menu in corso...</p>
        )}
        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {/* Empty state */}
        {!isLoading && filteredItems.length === 0 && (
          <p className="text-center text-gray-500">Nessun elemento da mostrare per questa categoria.</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}