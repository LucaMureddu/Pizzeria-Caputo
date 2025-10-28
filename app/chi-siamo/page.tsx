import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'La Nostra Storia',
  description: 'Scopri la nostra filosofia, la passione per gli ingredienti DOP e la storia della nostra pizzeria.',
  alternates: {
    canonical: '/chi-siamo',
  },
  openGraph: {
    title: 'La Nostra Storia | Pizzeria Milano',
    description: 'La nostra filosofia, ingredienti DOP e la passione per la pizza a Milano.',
    images: ['/og-chi-siamo.jpg'],
  },
  twitter: {
    title: 'La Nostra Storia | Pizzeria Milano',
    description: 'La nostra filosofia, ingredienti DOP e la passione per la pizza a Milano.',
    images: ['/og-chi-siamo.jpg'],
  },
}

export default function ChiSiamoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header della Pagina */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          La Nostra Passione, la Vostra Pizzeria
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Da Napoli a Milano, Pizzeria Caputo nasce dall’incontro tra autenticità partenopea ed eleganza cittadina.
          Il nostro obiettivo è portare la vera tradizione napoletana nel cuore di Milano, con un’esperienza contemporanea e curata.
          Ogni pizza è un ponte tra storia, gusto e accoglienza.
        </p>
      </header>

      {/* Sezione 1: Il Fondatore */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 group motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
          <Image
            src="/images/story/fondatore.jpg"
            alt="Pizzeria - Il nostro fondatore"
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:transform-gpu will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">L'Arte della Vera Pizza Napoletana</h2>
          <p className="mt-3 text-gray-700">
            Il Maestro Pizzaiolo Ciro Caputo cresce tra le vie dei quartieri di Napoli, dove i profumi di farina, pomodoro e basilico scandiscono le giornate.
            Dopo anni di apprendistato nelle migliori pizzerie storiche, porta a Milano la sua idea di perfezione: un impasto leggero, digeribile e ricco di carattere,
            frutto di una lievitazione lenta e naturale.
          </p>
          <p className="mt-3 text-gray-700">
            Le farine selezionate vengono lavorate con acqua, sale e pazienza, poi cotte in forno a legna a temperatura controllata per ottenere una crosta fragrante e
            un cornicione morbido e alveolato. La sua filosofia è semplice e rigorosa: qualità assoluta degli ingredienti, rispetto della stagionalità,
            attenzione al dettaglio in ogni fase. La passione di Ciro si traduce in un’ospitalità genuina e in un rituale che celebra la tradizione napoletana
            con un tocco di eleganza milanese.
          </p>
        </div>
      </section>

      {/* Sezione 2: Gli Ingredienti (immagine a destra) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Solo Ingredienti Selezionati</h2>
          <p className="mt-3 text-gray-700">
            Per noi la qualità nasce dalla scelta degli ingredienti. Utilizziamo Pomodoro San Marzano DOP, dalla dolcezza equilibrata e dalla spiccata acidità;
            Mozzarella di Bufala Campana DOP, cremosa e avvolgente, filata secondo tradizione; Olio Extravergine di Oliva di alta qualità, fruttato e armonico,
            aggiunto a crudo per esaltare profumi e sapori; farine selezionate, macinate con cura per garantire struttura e leggerezza all’impasto.
          </p>
          <p className="mt-3 text-gray-700">
            A completare, basilico fresco e sale marino, perché la semplicità è la vera firma della grande cucina. Collaboriamo con fornitori che condividono i nostri valori
            e tracciamo ogni passaggio della filiera, affinché ogni pizza racconti una storia di trasparenza e rispetto. Il risultato è un’esperienza superiore:
            sapori autentici, equilibrio perfetto e un piacere che rimane in memoria.
          </p>
        </div>
        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 group motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
          <Image
            src="/images/story/ingredienti.jpg"
            alt="Pizzeria - Ingredienti selezionati e freschi"
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:transform-gpu will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
          />
        </div>
      </section>

      {/* Sezione 3: Galleria Locale */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Un Angolo di Napoli a Milano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 group motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
              <Image
                src="/images/story/locale-1.jpg"
                alt="Pizzeria - Il nostro forno a legna"
                fill
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:transform-gpu will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
              />
            </div>
            <p className="text-center mt-2 text-sm text-gray-700">Il nostro forno a legna</p>
          </div>
          <div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 group motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
              <Image
                src="/images/story/locale-2.jpg"
                alt="Pizzeria - L'impasto a lenta lievitazione"
                fill
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:transform-gpu will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
              />
            </div>
            <p className="text-center mt-2 text-sm text-gray-700">L'impasto a lenta lievitazione</p>
          </div>
          <div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 group motion-safe:transform motion-safe:transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:hover:shadow-xl motion-reduce:transition-none motion-reduce:transform-none">
              <Image
                src="/images/story/locale-3.jpg"
                alt="Pizzeria - L'atmosfera del nostro locale"
                fill
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out-quart motion-safe:transform-gpu will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
              />
            </div>
            <p className="text-center mt-2 text-sm text-gray-700">L'atmosfera</p>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-gray-900 text-white py-20 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto a Vivere l'Esperienza?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Siamo pronti ad accoglierti o a portare la vera Napoli a casa tua.</p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/prenota"
              className="block w-full sm:w-auto px-8 py-4 text-lg font-bold bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Prenota un Tavolo
            </Link>
            <Link
              href="/ordina"
              className="block w-full sm:w-auto mt-4 sm:mt-0 px-8 py-4 text-lg font-bold bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Ordina Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}