'use client'

import { useState } from 'react'

type ContactProps = {
  title: string;
  subtitle: string;
  description: string;
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    placeholder: {
      name: string;
      email: string;
      message: string;
    };
  };
  info: {
    title: string;
    email: string;
    phone: string;
    location: string;
  };
}

export default function Contact({ title, subtitle, description, form, info }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Tu pourras ici connecter à ton backend ou une API email (Formspree, Resend...)
    console.log('Message envoyé :', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4">
          {title}
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
          {subtitle}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div className="bg-gray-50 dark:bg-[#111] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md">
          {submitted ? (
            <p className="text-center text-green-600 dark:text-green-400 text-base sm:text-lg font-medium">
              Merci pour votre message ! Je vous répondrai sous peu.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={form.placeholder.name}
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={form.placeholder.email}
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={form.placeholder.message}
                  rows={4}
                  required
                  className="w-full px-3 sm:px-4 py-2 rounded bg-white dark:bg-[#1c1c1c] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D5B7AD] text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 sm:px-6 bg-[#bb8c7c] text-white rounded hover:bg-[#cda397] transition-colors font-semibold text-sm sm:text-base"
              >
                {form.send}
              </button>
            </form>
          )}
        </div>

        {/* Informations de contact */}
        <div className="bg-gray-50 dark:bg-[#111] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            {info.title}
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <p className="text-base text-gray-800 dark:text-white font-medium">{info.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Téléphone</p>
              <p className="text-base text-gray-800 dark:text-white font-medium">{info.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Localisation</p>
              <p className="text-base text-gray-800 dark:text-white font-medium">{info.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
