import type { MenuItem } from '@/types/menu'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const priceFormatted = `€${Number(item.price).toFixed(2)}`
  const imageSrc = item.image_url || '/images/placeholder.jpg'

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg motion-safe:transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-safe:hover:scale-105 motion-safe:transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.description}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-medium text-gray-900">{priceFormatted}</span>
          {item.is_available === false && (
            <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700">Non disponibile</span>
          )}
        </div>
      </div>
    </div>
  )
}