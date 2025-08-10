// lib/i18n.ts
export async function getDictionary(locale: 'en' | 'fr') {
    return import(`../locales/${locale}.json`).then((module) => module.default)
  }
  