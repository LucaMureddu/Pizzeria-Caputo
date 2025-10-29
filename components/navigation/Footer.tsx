import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Bio */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              🍕 Pizzeria Milano
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dal 1985 portiamo la vera tradizione napoletana nel cuore di Milano. 
              Ogni pizza è preparata con ingredienti DOP e passione autentica.
            </p>
            <div className="text-sm text-gray-400">
              P.IVA: 12345678901
            </div>
          </div>

          {/* Orari di Apertura */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Orari di Apertura</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Lunedì - Giovedì</span>
                <span>18:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Venerdì - Sabato</span>
                <span>18:00 - 01:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span>18:00 - 24:00</span>
              </div>
              <div className="text-red-400 text-xs mt-2">
                * Ultimo ordine 30 min prima della chiusura
              </div>
            </div>
          </div>

          {/* Indirizzo & Contatti */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contatti</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div>Via Brera 15</div>
                  <div>20121 Milano (MI)</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+39 02 1234 5678</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@pizzeriamilano.it</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seguici</h3>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a href="/#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="/#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.628.771-1.628 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="/#" aria-label="X (Twitter)" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 3L21 21"/>
                  <path d="M21 3L3 21"/>
                </svg>
              </a>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Link Utili</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <Link href="/menu" className="block hover:text-white transition-colors">Menu Completo</Link>
                <Link href="/prenota" className="block hover:text-white transition-colors">Prenotazioni</Link>
                <Link href="/ordina" className="block hover:text-white transition-colors">Ordina Online</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © 2024 Pizzeria Milano. Tutti i diritti riservati.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}