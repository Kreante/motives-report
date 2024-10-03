import React from 'react';
import GenericPage from './GenericPage';

const Page11: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 11' : 'Title of Page 11';
  const content = locale === 'fr' ? 'Contenu de la page 11 en français.' : 'Content of Page 11 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page11;
