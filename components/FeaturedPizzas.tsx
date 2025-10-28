import Card from './ui/Card';
import type { MenuItem } from '@/types/menu';

export default function FeaturedPizzas({ pizzas }: { pizzas: MenuItem[] }) {
  const hasPizzas = Array.isArray(pizzas) && pizzas.length > 0;

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasPizzas ? (
          <>
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Le Nostre Creazioni
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scopri le nostre pizze più amate, preparate con ingredienti di eccellenza
                e secondo la tradizione napoletana più autentica.
              </p>
            </div>

            {/* Pizza Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {pizzas.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  description={item.description ?? ''}
                  price={`€${item.price.toFixed(2)}`}
                  image={item.image_url ?? undefined}
                  className="motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-safe:hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <a
                href="/menu"
                className="inline-flex items-center bg-red-800 text-white hover:bg-red-900 px-8 py-4 text-lg font-medium transition-colors group"
              >
                Scopri tutto il menu
                <svg className="w-5 h-5 ml-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            Nessuna pizza in evidenza al momento. Torna a trovarci!
          </p>
        )}
      </div>
    </section>
  );
}