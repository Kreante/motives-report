'use client';

import { usePathname, useRouter } from 'next/navigation'

const allowedLocales = ['fr', 'en']; // Definimos los idiomas permitidos directamente aquí

export const LanguageSelector = () => {
  const pathName = usePathname() || ''
  const router = useRouter()
  const currentLocale = pathName.split('/')[1]

  const handleLocaleChange = (newLocale: string) => {
    const currentPathname = pathName.slice(3) || '/'
    router.push(`/${newLocale}${currentPathname}`)
  }

  return (
    <div>
      {allowedLocales.map((locale) => {
        const isActive = currentLocale === locale
        return (
          <button 
            key={locale} 
            onClick={() => handleLocaleChange(locale)}
            className={`mx-1 ${isActive ? 'font-bold' : ''}`}
          >
            {locale.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}