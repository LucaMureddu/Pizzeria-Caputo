"use client"

export type CategoryFilter = 'pizza' | 'antipasto' | 'dolce' | 'bevanda' | 'tutti'

interface CategoryTabsProps {
  selectedCategory: CategoryFilter
  setSelectedCategory: (cat: CategoryFilter) => void
}

const tabs: { label: string; value: CategoryFilter }[] = [
  { label: 'Pizze', value: 'pizza' },
  { label: 'Antipasti', value: 'antipasto' },
  { label: 'Dolci', value: 'dolce' },
  { label: 'Bevande', value: 'bevanda' },
  { label: 'Tutti', value: 'tutti' },
]

export default function CategoryTabs({ selectedCategory, setSelectedCategory }: CategoryTabsProps) {
  return (
    <div className="mb-4 -mx-1 px-1 flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto snap-x snap-mandatory">
      {tabs.map(tab => {
        const isActive = selectedCategory === tab.value
        const base = 'px-4 py-2 text-sm border rounded motion-safe:transition-colors shrink-0 snap-start motion-safe:transform-gpu will-change-transform motion-reduce:transition-none'
        const active = 'bg-red-800 text-white border-red-800'
        const inactive = 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
        return (
          <button
            key={tab.value}
            type="button"
            className={`${base} ${isActive ? active : inactive}`}
            onClick={() => setSelectedCategory(tab.value)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}