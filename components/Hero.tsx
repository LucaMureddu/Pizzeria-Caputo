import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-image.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white font-bold text-4xl md:text-6xl mb-6 leading-tight">
          La Vera Tradizione Napoletana nel Cuore di Milano
        </h1>
        
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Ingredienti DOP, lievitazione lenta e passione autentica.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/prenota"
            className="bg-red-800 text-white hover:bg-red-900 px-8 py-4 text-lg font-medium transition-colors inline-block"
          >
            PRENOTA UN TAVOLO
          </Link>
          <Link 
            href="/ordina"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium transition-colors inline-block"
          >
            ORDINA ORA
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}