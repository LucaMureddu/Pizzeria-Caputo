import ReservationForm from '@/components/reservation/ReservationForm'

export default function PrenotaPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Centered container */}
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        {/* Content wrapper with max width */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg rounded-lg border border-gray-200 bg-white p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Prenota il tuo Tavolo</h1>
            <p className="mt-2 text-gray-600">Compila il form per inviare la tua richiesta di prenotazione</p>
          </div>
          <ReservationForm />
        </div>
      </div>
    </main>
  )
}