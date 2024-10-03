import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedLocales = ['fr', 'en'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingValidLocale = allowedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingValidLocale) {
    return NextResponse.redirect(new URL(`/fr${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images/).*)'],
}