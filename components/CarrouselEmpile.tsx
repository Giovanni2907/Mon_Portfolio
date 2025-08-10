'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

const cards = [
  {
    titre: 'Edition Spéciale',
    date: Date.now(), 
    title: 'WEB DEV',
    subtitle: 'Création d’applications web modernes et responsives',
    description:
      "Je conçois des interfaces utilisateur dynamiques, épurées et fonctionnelles avec React, Tailwind CSS et Next.js. Mon objectif est de rendre chaque site unique, rapide et agréable à utiliser.",
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
  },
  {
    titre: 'Edition Spéciale',
    title: 'FULLSTACK',
    subtitle: 'Développement complet avec Laravel et React',
    description:
      "Grâce à mon expertise fullstack, je réalise des plateformes complètes connectées à des bases de données. API sécurisées, systèmes d’authentification, gestion de contenu et plus encore.",
    color: 'bg-gradient-to-r from-green-500 to-emerald-600',
  },
  {
    titre: 'Edition Spéciale',
    title: 'MOBILE DEV',
    subtitle: 'Applications mobiles performantes',
    description:
      "Je transforme vos idées en applications mobiles fluides et élégantes avec React Native. Compatibilité Android/iOS assurée avec performance et modernité.",
    color: 'bg-gradient-to-r from-pink-500 to-fuchsia-600',
  },
]


export default function CarrouselEmpile() {
  const [index, setIndex] = useState(0)
  const dateValue = cards[0]?.date;

if (!dateValue) {
  return <div>Date non disponible</div>;
}

const dateObj = new Date(dateValue);
const dateFormatee = dateObj.toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
  const next = () => setIndex((prev) => (prev + 1) % cards.length)
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length)
  return (
    <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
      {/* Flèches */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="p-1.5 sm:p-2 rounded-3xl bg-transparent hover:bg-[#D5B7AD] dark:bg-gray-700 hover:scale-110 sm:hover:scale-115 transition-all mr-1 sm:mr-2"
        >
          <ChevronLeft className="text-black dark:text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="mx-6 mb-10 sm:mx-8 md:mx-12 lg:mx-[52px] overflow-hidden relative h-44 sm:h-48 md:h-[300px] lg:h-[280px] md:p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={clsx(
              'bg-white dark:bg-black hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 rounded-3xl shadow-md p-2.5 sm:p-3 md:p-4 text-center w-full h-full flex flex-col items-center justify-center',
              'border dark:border-white border-gray-100'
            )}
          >
            <h1 className='text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans mb-1 sm:mb-2'>
              {cards[index].titre}
              </h1>
              <p className='text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-sans mb-1 sm:mb-2'>
                {dateFormatee}
                </p>
                {/* ✅ Ligne de séparation */}
              <div className="h-0.5 w-24 sm:w-32 md:w-48 lg:w-60 bg-gray-300 dark:bg-white/30 mb-1.5 sm:mb-2 md:mb-3 rounded-full" />
            <div
              className={clsx(
                cards[index].color,
                'text-white px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold shadow-md mb-1.5 sm:mb-2 md:mb-3'
              )}
            >
              {cards[index].title}
            </div>
            <p className="font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
              {cards[index].subtitle}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md leading-tight">
              {cards[index].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={next}
          className="p-1.5 sm:p-2 rounded-3xl bg-transparent hover:bg-[#D5B7AD] dark:bg-gray-700 hover:scale-110 sm:hover:scale-115 transition-all ml-1 sm:ml-2"
        >
          <ChevronRight className="text-black dark:text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  )
}
