import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prenota un Tavolo',
  description: 'Riserva il tuo tavolo. Prenota online in pochi secondi per la tua cena o pranzo.',
  alternates: {
    canonical: '/prenota',
  },
  openGraph: {
    title: 'Prenota un Tavolo | Pizzeria Milano',
    description: 'Prenota online in pochi secondi per pranzo o cena.',
    images: ['/og-prenota.jpg'],
  },
  twitter: {
    title: 'Prenota un Tavolo | Pizzeria Milano',
    description: 'Prenota online in pochi secondi per pranzo o cena.',
    images: ['/og-prenota.jpg'],
  },
};

export default function PrenotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}