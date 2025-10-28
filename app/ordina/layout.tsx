import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ordina Online (Delivery & Takeaway)',
  description: 'Ordina la tua pizza preferita online. Scegli tra delivery a domicilio o takeaway.',
  alternates: {
    canonical: '/ordina',
  },
  openGraph: {
    title: 'Ordina Online | Pizzeria Milano',
    description: 'Ordina la tua pizza preferita: delivery a domicilio o takeaway.',
    images: ['/og-ordina.jpg'],
  },
  twitter: {
    title: 'Ordina Online | Pizzeria Milano',
    description: 'Ordina la tua pizza preferita: delivery a domicilio o takeaway.',
    images: ['/og-ordina.jpg'],
  },
};

export default function OrdinaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}