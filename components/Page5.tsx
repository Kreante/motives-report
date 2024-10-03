import React from 'react';
import GenericPage from './GenericPage';

const Page5: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 1' : 'Title of Page 1';
  const content = locale === 'fr' ? 'Contenu de la page 1 en français.' : 'Content of Page 1 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page5;
