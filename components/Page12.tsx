import React from 'react';
import GenericPage from './GenericPage';

const Page12: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Titre de la page 12' : 'Title of Page 12';
  const content = locale === 'fr' ? 'Contenu de la page 12 en français.' : 'Content of Page 12 in English.';
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page12;
