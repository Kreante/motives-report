import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface Page4Props {
  svgGraphic: string; // El archivo SVG se puede pasar como una URL o como un string de contenido SVG
}

const Page4: React.FC<Page4Props> = ({ svgGraphic }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full p-4">
      <h2 className="text-primary text-2xl mb-2 text-center font-bold">{t('page4.title')}</h2>
      <h3 className="text-lg mb-4 text-center">{t('page4.subtitle')}</h3>

      <div className="flex justify-between items-stretch h-full">
        {/* Columna izquierda */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div className="mb-4">
            <p className="text-justify mb-2">{t('page4.serenityText')}</p>
            <p className="text-justify">{t('page4.anxietyText')}</p>
          </div>
          <div>
            <p className="text-justify mb-2">{t('page4.enthusiasmText')}</p>
            <p className="text-justify">{t('page4.boredomText')}</p>
          </div>
        </div>

        {/* Gráfico central */}
        <div className="w-1/3 flex justify-center items-center px-2">
          <Image src={svgGraphic} alt="Motives Graphic" width={300} height={300} />
        </div>

        {/* Columna derecha */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div className="mb-4">
            <p className="text-justify mb-2">{t('page4.composureText')}</p>
            <p className="text-justify">{t('page4.angerText')}</p>
          </div>
          <div>
            <p className="text-justify mb-2">{t('page4.mischiefText')}</p>
            <p className="text-justify">{t('page4.sullennessText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
