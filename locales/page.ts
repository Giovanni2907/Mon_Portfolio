export const pageTexts = {
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      title: "Giovanni développeur fullstack",
      description: "Je crée des expériences web modernes et performantes avec les dernières technologies. Passionné par l'innovation et la qualité du code.",
      contactButton: "Me Contacter",
      downloadCV: "Télécharger CV"
    },
    about: {
      title: "À propos de moi",
      description: "Je suis Giovanni, passionné par le développement web moderne et l'expérience utilisateur. J'aime concevoir des interfaces élégantes et performantes avec React et Next.js.",
      goal: {
        title: "Mon objectif",
        description: "Je recherche des opportunités en télétravail pour renforcer mes compétences, collaborer sur des projets innovants et évoluer en tant que développeur fullstack."
      },
      skills: {
        title: "Mes compétences",
        description: "Ma stack principale repose sur JavaScript / TypeScript, avec des frameworks comme React, Next.js, React Native pour le front-end, et Laravel (PHP) ou Node.js pour le back-end. Je maîtrise aussi les bases de données comme MySQL et SQLite, et j'utilise Git & GitHub au quotidien pour le versionnement."
      }
    },
    journey: {
      title: "Mon parcours"
    },
    projects: {
      title: "Mes Projets",
      projects: [
        {
          title: 'Application de Quiz Mobile',
          description: 'Application développée avec Expo et React Native, incluant reconnaissance OCR et scan de code-barres.',
          techs: ['Expo', 'React Native', 'OpenAI', 'Tailwind'],
          github: 'https://github.com/tonprofil/quiz-app',
          live: '',
        },
        {
          title: 'Plateforme d\'examen en ligne',
          description: 'Projet Laravel + React pour gérer les sujets, utilisateurs et notes avec interface admin complète.',
          techs: ['Laravel', 'React', 'Tailwind', 'MySQL'],
          github: 'https://github.com/tonprofil/examada',
          live: '',
        }
      ],
      code: "Code",
      demo: "Démo"
    },
    services: {
      title: "Mes Services",
      services: [
        {
          title: 'Développement Web',
          description: 'Création de sites web performants, responsive et modernes avec React, Laravel, Next.js...',
        },
        {
          title: 'Développement Mobile',
          description: 'Applications mobiles Android/iOS avec Expo & React Native, OCR, scanner, animations...',
        },
        {
          title: 'Dashboards dynamiques',
          description: 'Espaces d\'administration modernes avec filtres, graphiques, et gestion de contenu.',
        }
      ]
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Discutons de votre projet",
      description: "Je suis disponible pour discuter de vos besoins en développement web et mobile. N'hésitez pas à me contacter pour un projet ou une collaboration.",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        placeholder: {
          name: "Votre nom",
          email: "votre@email.com",
          message: "Décrivez votre projet..."
        }
      },
      info: {
        title: "Informations de contact",
        email: "giovanni@example.com",
        phone: "+33 6 12 34 56 78",
        location: "France (Télétravail)"
      }
    },
    footer: {
      copyright: "© 2024 Giovanni RAJAONARISON. Tous droits réservés.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    }
  },
  en: {
    hero: {
      greeting: "Hello, I'm",
      title: "Giovanni fullstack developer",
      description: "I create modern and performant web experiences with the latest technologies. Passionate about innovation and code quality.",
      contactButton: "Contact Me",
      downloadCV: "Download CV"
    },
    about: {
      title: "About me",
      description: "I'm Giovanni, passionate about modern web development and user experience. I love designing elegant and performant interfaces with React and Next.js.",
      goal: {
        title: "My goal",
        description: "I'm looking for remote work opportunities to strengthen my skills, collaborate on innovative projects and grow as a fullstack developer."
      },
      skills: {
        title: "My skills",
        description: "My main stack relies on JavaScript / TypeScript, with frameworks like React, Next.js, React Native for front-end, and Laravel (PHP) or Node.js for back-end. I also master databases like MySQL and SQLite, and I use Git & GitHub daily for versioning."
      }
    },
    journey: {
      title: "My journey"
    },
    projects: {
      title: "My Projects",
      projects: [
        {
          title: 'Mobile Quiz App',
          description: 'App developed with Expo and React Native, including OCR recognition and barcode scanning.',
          techs: ['Expo', 'React Native', 'OpenAI', 'Tailwind'],
          github: 'https://github.com/tonprofil/quiz-app',
          live: '',
        },
        {
          title: 'Online Exam Platform',
          description: 'Laravel + React project to manage subjects, users and grades with complete admin interface.',
          techs: ['Laravel', 'React', 'Tailwind', 'MySQL'],
          github: 'https://github.com/tonprofil/examada',
          live: '',
        }
      ],
      code: "Code",
      demo: "Demo"
    },
    services: {
      title: "My Services",
      services: [
        {
          title: 'Web Development',
          description: 'Creating performant, responsive and modern websites with React, Laravel, Next.js...',
        },
        {
          title: 'Mobile Development',
          description: 'Android/iOS mobile applications with Expo & React Native, OCR, scanner, animations...',
        },
        {
          title: 'Dynamic Dashboards',
          description: 'Modern admin spaces with filters, charts, and content management.',
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your project",
      description: "I'm available to discuss your web and mobile development needs. Don't hesitate to contact me for a project or collaboration.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        placeholder: {
          name: "Your name",
          email: "your@email.com",
          message: "Describe your project..."
        }
      },
      info: {
        title: "Contact Information",
        email: "giovanni@example.com",
        phone: "+33 6 12 34 56 78",
        location: "France (Remote Work)"
      }
    },
    footer: {
      copyright: "© 2024 Giovanni RAJAONARISON. All rights reserved.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      }
    }
  }
} as const;

export type PageLocale = keyof typeof pageTexts; 