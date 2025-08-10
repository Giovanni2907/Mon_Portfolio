'use client'

import { Code, Smartphone, Brush, BarChart2 } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <Code className="w-8 h-8 text-[#D5B7AD]" />,
    title: 'Développement Web',
    description: 'Création de sites web performants, responsive et modernes avec React, Laravel, Next.js...',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#D5B7AD]" />,
    title: 'Développement Mobile',
    description: 'Applications mobiles Android/iOS avec Expo & React Native, OCR, scanner, animations...',
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-[#D5B7AD]" />,
    title: 'Dashboards dynamiques',
    description: 'Espaces d’administration modernes avec filtres, graphiques, et gestion de contenu.',
  }
  
]

export default function ServicesSection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8 bg-[#fefefe] dark:bg-[#0a0a0a]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6 md:mb-8 text-center">
        Mes Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-white dark:bg-[#111] shadow-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8">{service.icon}</div>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center text-gray-800 dark:text-white mb-1.5 sm:mb-2">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
