import React from 'react';

interface GenericPageProps {
  title: string;
  subtitle?: string;
  content: string;
  locale: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle, content, locale }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[190mm] w-[277mm] bg-white">
      <h1 className="text-4xl font-normal mb-4">{locale === 'fr' ? title : title}</h1>
      {subtitle && <h2 className="text-2xl font-bold mb-4">{locale === 'fr' ? subtitle : subtitle}</h2>}
      <p className="text-lg font-normal">{locale === 'fr' ? content : content}</p>
    </div>
  );
};

export default GenericPage;
