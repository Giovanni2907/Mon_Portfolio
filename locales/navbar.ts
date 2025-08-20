export const navbarTexts = {
  fr: {
    brand: 'Portfolio',
    home: 'Accueil',
    about: 'À propos',
    journey: 'Parcours',
    projects: 'Projets',
    services: 'Services',
    contact: 'Contact',
  },
  en: {
    brand: 'Portfolio',
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact',
  },
} as const;

export type NavbarLocale = keyof typeof navbarTexts; 