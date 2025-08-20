"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from '@/components/ui/ThemeToggle';
import LangueSwitcher from "@/components/ui/LangueSwitcher";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { navbarTexts } from "@/locales/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const t = navbarTexts[(locale as keyof typeof navbarTexts) ?? 'fr'] || navbarTexts.fr;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang={locale}>
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 shadow-sm' 
            : 'bg-transparent'
        }`}>
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between min-w-0">
          {/* Titre Portfolio - Visible sur mobile et desktop */}
          <div className="flex-shrink-0">
            <h1 className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse`}>
              {t.brand}
            </h1>
          </div>
          
          {/* Desktop Navigation - Centré avec gestion des débordements */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-4 lg:gap-6 xl:gap-8 min-w-0 overflow-visible">
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 transition text-sm lg:text-base xl:text-lg font-medium flex-shrink-0"
          >
            {t.home}
          </Link>

          <div className="relative group flex-shrink-0">
            <Link
              href="#about"
              className="text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 transition text-sm lg:text-base xl:text-lg font-medium flex items-center gap-1"
            >
              {t.about}
              <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
            </Link>

            {/* Dropdown - harmonisé, fade + translation */}
            <div className="absolute left-0 top-full pt-2 w-40 lg:w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <ul className="py-2">
                <li>
                  <Link
                    href="#parcours"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 dark:hover:bg-zinc-700"
                  >
                    {t.journey}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 dark:hover:bg-zinc-700"
                  >
                    {t.projects}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="#services" 
          className="text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 transition text-sm lg:text-base xl:text-lg font-medium flex-shrink-0">
            {t.services}
          </Link>
          <Link href="#contact" 
          className="text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] hover:text-xl dark:hover:text-amber-400 transition text-sm lg:text-base xl:text-lg font-medium flex-shrink-0">
            {t.contact}
          </Link>
          </div>

          {/* Mobile Menu Button - Amélioré */}
          <div className="md:hidden flex-shrink-0">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] transition p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Contrôles (Langue + Theme) - Amélioré */}
          <div className="flex gap-1 sm:gap-2 md:gap-4 flex-shrink-0">
            <LangueSwitcher/>
            <ThemeToggle/>
          </div>
        </nav>

        {/* Mobile Navigation - Amélioré */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="px-3 sm:px-4 py-2 space-y-1 sm:space-y-2">
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-2 text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] transition text-sm sm:text-base font-medium rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
              >
                {t.home}
              </Link>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between py-2 px-2">
                  <span className="text-gray-500 dark:text-gray-300 text-sm sm:text-base font-medium">À propos</span>
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-300 flex-shrink-0" />
                </div>
                <div className="pl-3 sm:pl-4 space-y-1">
                  <Link
                    href="#parcours"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#D5B7AD] transition rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
                  >
                    {t.journey}
                  </Link>
                  <Link
                    href="#projects"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#D5B7AD] transition rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
                  >
                    {t.projects}
                  </Link>
                </div>
              </div>

              <Link
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-2 text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] transition text-sm sm:text-base font-medium rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
              >
                {t.services}
              </Link>
              
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-2 text-gray-500 dark:text-gray-300 hover:text-[#D5B7AD] transition text-sm sm:text-base font-medium rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        )}
        </header>
        <div className="mt-25 sm:mt-15 pt-2 sm:pt-4 ">
        {children}
        <div className="fixed inset-0 -z-10 overflow-hidden">
  <svg
    className="absolute top-1/3 left-0 w-[200%] h-32 sm:h-48 md:h-64 rotate-[-8deg] blur-sm opacity-40 animate-slide-left"
    viewBox="0 0 2400 800"
    preserveAspectRatio="none"
  >
    <path
      d="M0,350 C120,380 180,320 280,340 C350,360 420,310 480,330 C540,350 600,300 680,320 C760,340 820,290 900,310 C980,330 1050,280 1200,300
         C1320,320 1380,260 1480,280 C1580,300 1650,240 1750,260 C1850,280 1920,230 2000,250 C2080,270 2150,220 2400,240"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="2"
    />
  </svg>
</div>

        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
