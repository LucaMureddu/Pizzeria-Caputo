"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Vai alla Home" className="flex items-center gap-2">
              <Image src="/favicon.svg" width={32} height={32} alt="Logo Pizzeria Caputo" />
              <span className="font-semibold text-lg text-gray-900">Pizzeria Caputo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/menu" 
                className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Menu
              </Link>
              <Link 
                href="/chi-siamo" 
                className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                La Pizzeria
              </Link>
              <Link 
                href="/contatti" 
                className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contatti
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/ordina"
              className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Ordina Ora
            </Link>
            <Link 
              href="/prenota"
              className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 text-sm font-medium transition-colors"
            >
              PRENOTA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-900 hover:text-red-800 p-2"
              aria-label="Apri il menu"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-reduce:transition-none ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}
        >
          <div className="flex flex-col space-y-2 px-4 py-3">
            <Link 
              href="/menu" 
              className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/chi-siamo" 
              className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              La Pizzeria
            </Link>
            <Link 
              href="/contatti" 
              className="text-gray-900 hover:text-red-800 px-3 py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            <div className="flex items-center space-x-2 pt-2">
              <Link 
                href="/ordina"
                className="flex-1 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ordina Ora
              </Link>
              <Link 
                href="/prenota"
                className="flex-1 bg-red-800 text-white hover:bg-red-900 px-4 py-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRENOTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}