import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './messages/en.json';
import frTranslations from './messages/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    lng: 'fr', // idioma por defecto
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;