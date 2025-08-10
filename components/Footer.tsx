export default function Footer() {
    return (
      <footer className="bg-gray-700 dark:bg-[#1a1a1a] text-white dark:text-gray-200 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-xs sm:text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Giovanni RAJAONARISON. Tous droits réservés.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm sm:text-base"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a
              href="mailto:tonemail@email.com"
              className="hover:text-white transition-colors text-sm sm:text-base"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    )
  }
  