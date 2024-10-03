import React from 'react';
import GenericPage from './GenericPage';

const Page17: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 17' : 'Title of Page 17';
  const content = locale === 'fr' ? 'Contenu de la page 17 en français.' : 'Content of Page 17 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page17;
