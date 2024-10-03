import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Page5: React.FC<{ locale: string, svgGraphic: string }> = ({ locale, svgGraphic }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full p-4">
      <h2 className="text-primary text-2xl mb-2 text-center font-bold">{t('page6.title')}</h2>

      <div className="flex justify-between items-stretch h-full">
        {/* Columna izquierda */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div className="mb-4">
            <p className="text-justify mb-2">{t('page6.gratitudeText')}</p>
            <p className="text-justify">{t('page6.resentmentText')}</p>
          </div>
          <div>
            <p className="text-justify mb-2">{t('page6.kindnessText')}</p>
            <p className="text-justify">{t('page6.guiltText')}</p>
          </div>
        </div>

        {/* Gráfico central */}
        <div className="w-1/3 flex justify-center items-center px-2">
          <Image src={svgGraphic} alt={t('page6.motivesGraphicAlt')} width={300} height={300} />
        </div>

        {/* Columna derecha */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div className="mb-4">
            <p className="text-justify mb-2">{t('page6.prideText')}</p>
            <p className="text-justify">{t('page6.vexationText')}</p>
          </div>
          <div>
            <p className="text-justify mb-2">{t('page6.devotionText')}</p>
            <p className="text-justify">{t('page6.embarrassmentText')}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page5;
