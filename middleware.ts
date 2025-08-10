// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['fr', 'en']
const defaultLocale = 'fr'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') || // ignore _next files
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  // Si le path commence déjà par /fr ou /en → continuer
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  )

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
  }
}
