import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export const useTranslations = (locale: string) => {
  const { t } = useTranslation();

  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return { t };
};