"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ReservationForm() {
  const [customer_name, setCustomerName] = useState<string>('')
  const [customer_phone, setCustomerPhone] = useState<string>('')
  const [customer_email, setCustomerEmail] = useState<string>('')
  const [party_size, setPartySize] = useState<number>(1)
  const [reservation_date, setReservationDate] = useState<string>('')
  const [reservation_time, setReservationTime] = useState<string>('19:00')
  const [notes, setNotes] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [successVisible, setSuccessVisible] = useState<boolean>(false)
  const [formErrors, setFormErrors] = useState<{ phone?: string; email?: string; name?: string; party_size?: string; date?: string }>({})

  const resetForm = () => {
    setCustomerName('')
    setCustomerPhone('')
    setCustomerEmail('')
    setPartySize(1)
    setReservationDate('')
    setReservationTime('19:00')
    setNotes('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMessage(null)
    setFormErrors({})

    // Validazioni front-end in-line
    const emailIsProvided = customer_email && customer_email.trim().length > 0
    const emailIsValid = /\S+@\S+\.\S+/.test(customer_email || '')
    const phoneDigits = (customer_phone || '').replace(/\D/g, '')
    const phoneIsValid = phoneDigits.length >= 8

    const errors: { phone?: string; email?: string; name?: string; party_size?: string; date?: string } = {}
    // Nome obbligatorio
    if (!customer_name.trim()) {
      errors.name = 'Il nome è obbligatorio.'
    }
    // Persone tra 1 e 20
    if (party_size < 1 || party_size > 20) {
      errors.party_size = 'La prenotazione deve essere tra 1 e 20 persone.'
    }
    // Data non nel passato
    const today = new Date().toISOString().split('T')[0]
    if (reservation_date && reservation_date < today) {
      errors.date = 'La data non può essere nel passato.'
    }
    if (emailIsProvided && !emailIsValid) {
      errors.email = 'Formato email non valido.'
    }
    if (!phoneIsValid) {
      errors.phone = 'Il telefono deve avere almeno 8 cifre.'
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsLoading(true)

    try {
      if (!customer_name || !customer_phone || !party_size || !reservation_date || !reservation_time) {
        setIsLoading(false)
        return
      }

      const reservation_datetime = new Date(`${reservation_date}T${reservation_time}:00`).toISOString()

      const body = {
        customer_name,
        customer_phone,
        party_size,
        reservation_datetime,
        customer_email: customer_email || undefined,
        notes: notes || undefined,
      }

      const res = await fetch('/api/prenotazioni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        setIsLoading(false)
        return
      }

      let summary = `Prenotazione inviata! Ti aspettiamo il ${reservation_date} alle ${reservation_time} (per ${party_size} persone).\nRiceverai una conferma al ${customer_phone}.`
      if (customer_email && customer_email.trim().length > 0) {
        summary += `\nEmail di riferimento: ${customer_email}`
      }
      if (notes && notes.trim().length > 0) {
        summary += `\nLe tue note: "${notes}"`
      }
      setSuccessMessage(summary)
      setSuccessVisible(true)
    } catch (err: any) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewReservation = () => {
    resetForm()
    setSuccessMessage(null)
    setSuccessVisible(false)
  }

  return (
    <div className="w-full max-w-lg">
      {!successMessage ? (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome*</label>
              <input
                type="text"
                value={customer_name}
                onChange={(e) => {
                  setCustomerName(e.target.value)
                  setFormErrors((prev) => ({ ...prev, name: undefined }))
                }}
                required
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
                placeholder="Mario Rossi"
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefono*</label>
              <input
                type="tel"
                value={customer_phone}
                onChange={(e) => {
                  setCustomerPhone(e.target.value)
                  setFormErrors((prev) => ({ ...prev, phone: undefined }))
                }}
                required
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
                placeholder="+39 333 1234567"
              />
              <p className="text-xs text-gray-500 mt-1">Es. +39 333 1234567 (min. 8 cifre)</p>
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={customer_email}
                onChange={(e) => {
                  setCustomerEmail(e.target.value)
                  setFormErrors((prev) => ({ ...prev, email: undefined }))
                }}
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
                placeholder="mario@example.com"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">N. Persone*</label>
              <input
                type="number"
                min={1}
                max={20}
                value={party_size}
                onChange={(e) => {
                  setPartySize(parseInt(e.target.value || '1', 10))
                  setFormErrors((prev) => ({ ...prev, party_size: undefined }))
                }}
                required
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
              />
              {formErrors.party_size && <p className="text-red-500 text-sm mt-1">{formErrors.party_size}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Data*</label>
              <input
                type="date"
                value={reservation_date}
                onChange={(e) => {
                  setReservationDate(e.target.value)
                  setFormErrors((prev) => ({ ...prev, date: undefined }))
                }}
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
              />
              {formErrors.date && <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>}
            </div>
            <div>
              <label className="block text sm font-medium text-gray-700">Ora*</label>
              <select
                value={reservation_time}
                onChange={(e) => setReservationTime(e.target.value)}
                required
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
              >
                {['19:00','19:30','20:00','20:30','21:00','21:30','22:00'].map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Note</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 w-full border-gray-300 focus:border-red-800 focus:ring-red-800"
                rows={4}
                placeholder="Es. tavolo vicino alla finestra"
                maxLength={300}
              />
              <p className="mt-1 text-xs text-gray-500">{`${notes.length}/300`}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center px-6 py-3 font-medium transition-colors ${
                isLoading ? 'bg-gray-400 text-white' : 'bg-red-800 text-white hover:bg-red-900'
              }`}
            >
              {isLoading ? 'Invio...' : 'PRENOTA'}
            </button>
          </div>

          <div className="mt-4">
            {isLoading && <p className="text-gray-500">Invio in corso...</p>}
          </div>
        </form>
      ) : (
        <div className={`text-center p-6 bg-green-50 border border-green-200 rounded-lg shadow-lg motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-out-quart motion-reduce:transition-none ${successVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-3">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>

          <p className='text-green-700 text-lg font-semibold whitespace-pre-line'>
            {successMessage}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/menu"
              className="block w-full sm:w-auto px-6 py-3 text-center font-semibold text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              Guarda il Menu
            </Link>

            <button
              type="button"
              onClick={handleNewReservation}
              className="block w-full sm:w-auto mt-4 sm:mt-0 bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
            >
              Fai un'altra Prenotazione
            </button>
          </div>
        </div>
      )}
    </div>
  )
}