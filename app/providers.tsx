'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'

export function Providers({ children, locale }: { children: React.ReactNode, locale: string }) {
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale)
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}