import React from 'react';
import GenericPage from './GenericPage';

const Page14: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 14' : 'Title of Page 14';
  const content = locale === 'fr' ? 'Contenu de la page 14 en français.' : 'Content of Page 14 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page14;
