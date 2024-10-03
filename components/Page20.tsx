import React from 'react';
import GenericPage from './GenericPage';

const Page20: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 18' : 'Title of Page 18';
  const content = locale === 'fr' ? 'Contenu de la page 18 en français.' : 'Content of Page 18 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page20;
