'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Application de Quiz Mobile',
    description: 'Application développée avec Expo et React Native, incluant reconnaissance OCR et scan de code-barres.',
    techs: ['Expo', 'React Native', 'OpenAI', 'Tailwind'],
    image: '/projects/quiz-app.png',
    github: 'https://github.com/tonprofil/quiz-app',
    live: '',
  },
  {
    title: 'Plateforme d’examen en ligne',
    description: 'Projet Laravel + React pour gérer les sujets, utilisateurs et notes avec interface admin complète.',
    techs: ['Laravel', 'React', 'Tailwind', 'MySQL'],
    image: '/projects/examada.png',
    github: 'https://github.com/tonprofil/examada',
    live: '',
  },
  {
    title: 'Application de Quiz Mobile',
    description: 'Application développée avec Expo et React Native, incluant reconnaissance OCR et scan de code-barres.',
    techs: ['Expo', 'React Native', 'OpenAI', 'Tailwind'],
    image: '/projects/quiz-app.png',
    github: 'https://github.com/tonprofil/quiz-app',
    live: '',
  },
  {
    title: 'Plateforme d’examen en ligne',
    description: 'Projet Laravel + React pour gérer les sujets, utilisateurs et notes avec interface admin complète.',
    techs: ['Laravel', 'React', 'Tailwind', 'MySQL'],
    image: '/projects/examada.png',
    github: 'https://github.com/tonprofil/examada',
    live: '',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-[#f9f9f9] dark:bg-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 text-center">
        Mes Projets
      </h2>
      <div className="grid gap-6 sm:gap-8 md:gap-12 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden bg-white dark:bg-[#111]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-40 sm:h-48 md:h-52 object-cover"
            />
            <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm">
                {project.github && (
                  <a href={project.github} className="underline text-blue-600 dark:text-blue-400" target="_blank">
                    Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="underline text-green-600 dark:text-green-400" target="_blank">
                    Démo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
