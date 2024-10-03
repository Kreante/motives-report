import React from 'react';
import GenericPage from './GenericPage';

const Page10: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 10' : 'Title of Page 10';
  const content = locale === 'fr' ? 'Contenu de la page 10 en français.' : 'Content of Page 10 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page10;
