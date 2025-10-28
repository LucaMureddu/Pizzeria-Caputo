import ReservationForm from '@/components/reservation/ReservationForm'

export default function PrenotaPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Prenota il tuo Tavolo</h1>
          <p className="mt-2 text-gray-600">Compila il form per inviare la tua richiesta di prenotazione</p>
        </div>
        <ReservationForm />
      </div>
    </main>
  )
}