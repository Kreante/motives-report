import React from 'react';
import GenericPage from './GenericPage';

const Page7: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 7' : 'Title of Page 7';
  const content = locale === 'fr' ? 'Contenu de la page 7 en français.' : 'Content of Page 7 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page7;
