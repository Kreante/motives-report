import React from 'react';
import GenericPage from './GenericPage';

const Page8: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 8' : 'Title of Page 8';
  const content = locale === 'fr' ? 'Contenu de la page 8 en français.' : 'Content of Page 8 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page8;
