import React from 'react';
import GenericPage from './GenericPage';

const Page13: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 13' : 'Title of Page 13';
  const content = locale === 'fr' ? 'Contenu de la page 13 en français.' : 'Content of Page 13 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page13;
