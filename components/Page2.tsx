import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { TextPage } from './TextPage';

const Page2: React.FC<{ locale: string }> = ({ locale }) => {
  const { t } = useTranslations(locale);

  return (
    <TextPage
      leftTitle={t('page2.leftTitle')}
      rightTitle={t('page2.rightTitle')}
      leftText={t('page2.leftText')}
      rightText={t('page2.rightText')}
    />
  );
};

export default Page2;
