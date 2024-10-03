import React from 'react';
import GenericPage from './GenericPage';

const Page15: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 15' : 'Title of Page 15';
  const content = locale === 'fr' ? 'Contenu de la page 15 en français.' : 'Content of Page 15 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page15;
