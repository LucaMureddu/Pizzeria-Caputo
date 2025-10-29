import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Placeholder: sostituisci con l'URL di produzione reale
const siteUrl = "https://pizzeria-caputo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Pizzeria Milano - Da [Nome]",
    default: "Pizzeria Milano - La Vera Pizza Napoletana a Milano",
  },
  description:
    "Scopri la vera pizza napoletana a Milano. Ingredienti DOP, lievitazione lenta e un angolo di Napoli. Prenota o Ordina Online.",
  openGraph: {
    title: "Pizzeria Milano - La Vera Pizza Napoletana a Milano",
    description: "Scopri la vera pizza napoletana a Milano. Ingredienti DOP e passione.",
    url: siteUrl,
    siteName: "Pizzeria Milano - Da [Nome]",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzeria Milano - La Vera Pizza Napoletana a Milano",
    description: "Scopri la vera pizza napoletana a Milano. Ingredienti DOP e passione.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#B91C1C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
