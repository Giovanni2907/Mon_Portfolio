'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const segments = pathname.split('/')
    const currentLang = segments[1]
    const newLang = currentLang === 'fr' ? 'en' : 'fr'

    segments[1] = newLang
    const newPath = segments.join('/')

    router.push(newPath)
  }

  const currentLang = pathname.split('/')[1]

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {currentLang.toUpperCase()}
    </button>
  )
}
