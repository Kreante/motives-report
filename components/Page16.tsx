import React from 'react';
import GenericPage from './GenericPage';

const Page16: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 16' : 'Title of Page 16';
  const content = locale === 'fr' ? 'Contenu de la page 16 en français.' : 'Content of Page 16 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page16;
