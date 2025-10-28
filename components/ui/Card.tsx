interface CardProps {
  image?: string;
  title: string;
  description: string;
  price: string;
  className?: string;
}

export default function Card({ image, title, description, price, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden motion-safe:transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-safe:hover:scale-105 motion-safe:transform-gpu will-change-transform motion-reduce:transition-none motion-reduce:transform-none ${className}`}>
      {/* Image */}
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-600 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Pizza Image</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-xl font-bold text-red-800">{price}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}