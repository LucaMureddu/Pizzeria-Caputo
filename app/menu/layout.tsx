import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Il Nostro Menu',
  description: 'Sfoglia il menu completo: pizze, antipasti, dolci e bevande. Ingredienti freschi e tradizione.',
  alternates: {
    canonical: '/menu',
  },
  openGraph: {
    title: 'Il Nostro Menu | Pizzeria Milano',
    description: 'Sfoglia il menu completo: pizze, antipasti, dolci e bevande.',
    images: ['/og-menu.jpg'],
  },
  twitter: {
    title: 'Il Nostro Menu | Pizzeria Milano',
    description: 'Sfoglia il menu completo: pizze, antipasti, dolci e bevande.',
    images: ['/og-menu.jpg'],
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}