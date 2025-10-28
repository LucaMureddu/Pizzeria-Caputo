import Link from 'next/link';
import Image from 'next/image';

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Founder Image */}
          <div className="relative h-96">
            <Image
              src="/images/story/fondatore.jpg"
              alt="Il fondatore della Pizzeria Caputo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg ring-1 ring-black/5"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              La Nostra Filosofia
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Dal 1985, la nostra famiglia porta avanti la tradizione napoletana più autentica nel cuore di Milano. 
                Ogni pizza è un'opera d'arte, creata con ingredienti selezionati e una passione che si tramanda di generazione in generazione.
              </p>
              
              <p>
                Il nostro impasto, preparato con farine di alta qualità e lievitato naturalmente per 48 ore, 
                è il segreto di una pizza leggera, digeribile e dal sapore inconfondibile.
              </p>
              
              <p>
                Utilizziamo esclusivamente pomodori San Marzano DOP, mozzarella di bufala campana DOP 
                e olio extravergine di oliva del Cilento, per garantire l'autenticità di ogni boccone.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/chi-siamo" 
                className="text-red-800 font-bold text-lg hover:text-red-900 transition-colors inline-flex items-center group"
              >
                Scopri la nostra storia
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}