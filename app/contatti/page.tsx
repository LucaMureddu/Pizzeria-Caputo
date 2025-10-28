export const metadata = {
  title: 'Contatti e Orari',
  description: 'Trova dove siamo, i nostri orari di apertura e come contattarci. Ti aspettiamo a Milano.',
  alternates: {
    canonical: '/contatti',
  },
  openGraph: {
    title: 'Contatti e Orari | Pizzeria Milano',
    description: 'Indirizzo, orari di apertura e contatti. Vieni a trovarci a Milano.',
    images: ['/og-contatti.jpg'],
  },
  twitter: {
    title: 'Contatti e Orari | Pizzeria Milano',
    description: 'Indirizzo, orari di apertura e contatti. Vieni a trovarci a Milano.',
    images: ['/og-contatti.jpg'],
  },
}

export default function ContattiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Vieni a Trovarci</h1>
        <p className="mt-4 text-lg text-gray-700">Siamo nel cuore di Milano, pronti ad accoglierti.</p>
      </header>

      {/* Layout a 2 colonne */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Colonna sinistra: Info */}
        <div>
          <section className="mb-8">
            <div className="flex items-center gap-2">
              {/* Icona MapPin */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-800">
                <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">Indirizzo</h2>
            </div>
            <p className="mt-2 text-gray-700">Via Fiori Chiari, 12 — 20121 Milano (Brera)</p>
          </section>
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <div className="flex items-center gap-2">
              {/* Icona Phone */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-800">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.24c1.12.38 2.33.59 3.53.59a1 1 0 011 1v3.5a1 1 0 01-1 1C12.04 20.04 4 12 4 5a1 1 0 011-1H8.5a1 1 0 011 1c0 1.2.2 2.41.59 3.53a1 1 0 01-.24 1.06l-2.23 2.2z" />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">Contatti</h2>
            </div>
            <p className="mt-2 text-gray-700">Email: prenotazioni@pizzeriacaputo.it</p>
            <p className="mt-1 text-gray-700">Telefono: +39 02 8712 3456</p>
          </section>
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <div className="flex items-center gap-2">
              {/* Icona Clock */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-800">
                <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm1-10V6h-2v7h6v-2h-4z" />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">Orari di Apertura</h2>
            </div>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Lunedì: Chiuso</li>
              <li>Martedì — Domenica: Pranzo e Cena</li>
            </ul>
          </section>
          <hr className="my-8 border-gray-200" />

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Seguici</h2>
            <p className="mt-2 text-gray-700">Seguici su Instagram e Facebook per scoprire nuovi impasti, le specialità del giorno e i momenti di vita del nostro forno. Rimani aggiornato su eventi, degustazioni e novità dal mondo Pizzeria Caputo.</p>
            <div className="mt-3 flex items-center gap-4">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-pink-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-sky-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.162 5.656c-.793.352-1.646.59-2.54.697a4.44 4.44 0 001.948-2.45 8.86 8.86 0 01-2.81 1.074 4.424 4.424 0 00-7.533 4.033A12.552 12.552 0 013.15 4.9a4.422 4.422 0 001.37 5.9 4.402 4.402 0 01-2.004-.553v.056a4.427 4.427 0 003.55 4.336 4.445 4.445 0 01-1.997.076 4.432 4.432 0 004.137 3.073A8.873 8.873 0 012 19.54a12.507 12.507 0 006.785 1.988c8.145 0 12.6-6.748 12.6-12.6 0-.191-.004-.381-.013-.57a9.002 9.002 0 002.19-2.302z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8 8.001a3.01 3.01 0 00-2.12-2.129C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.66.372A3.01 3.01 0 002.22 8.001C1.85 9.76 1.85 12 1.85 12s0 2.24.37 3.999a3.01 3.01 0 002.12 2.129C6.1 18.5 12 18.5 12 18.5s5.9 0 7.66-.372a3.01 3.01 0 002.12-2.129c.37-1.759.37-3.999.37-3.999s0-2.24-.37-3.999zM10 15.25v-6.5L15.5 12 10 15.25z" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Colonna destra: Mappa */}
        <div>
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.140682088306!2d9.18679071584287!3d45.46421397910081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6d3e146c38b%3A0x3e1740d0b1f133d1!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1678888888888"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}