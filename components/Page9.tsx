import React from 'react';
import GenericPage from './GenericPage';

const Page9: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 9' : 'Title of Page 9';
  const content = locale === 'fr' ? 'Contenu de la page 9 en français.' : 'Content of Page 9 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page9;
