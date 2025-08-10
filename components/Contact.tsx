'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Tu pourras ici connecter à ton backend ou une API email (Formspree, Resend...)
    console.log('Message envoyé :', form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-white dark:bg-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 text-center">
        Me Contacter
      </h2>

      <div className="max-w-lg sm:max-w-xl mx-auto bg-gray-50 dark:bg-[#111] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md">
        {submitted ? (
          <p className="text-center text-green-600 dark:text-green-400 text-base sm:text-lg font-medium">
            Merci pour votre message ! Je vous répondrai sous peu.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 sm:px-6 bg-[#bb8c7c] text-white rounded hover:bg-[#cda397] transition-colors font-semibold text-sm sm:text-base"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
