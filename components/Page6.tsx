import React from 'react';
import { useTranslation } from 'react-i18next';
import EmotionChartLeft from './EmotionChartLeft';
import EmotionChartRight from './EmotionChartRight';
import { chartColors } from '../utils/chartConfig';
import Image from 'next/image';

const Page6: React.FC<{ svgGraphic: string }> = ({ svgGraphic }) => {
  const { t } = useTranslation();

  const emotionData = [
    { name: t('page5.culpabilite'), value: 25 },
    { name: t('page5.fierte'), value: 75 },
    { name: t('page5.devotion'), value: 90 },
    { name: t('page5.embarras'), value: 10 },
  ];

  return (
    <div className="flex flex-col h-full p-4">
      <h2 className="text-primary text-2xl mb-2 text-center font-bold">{t('page5.title')}</h2>
      <h3 className="text-lg mb-4 text-center">{t('page5.subtitle')}</h3>

      <div className="flex justify-between items-stretch h-full">
        {/* Columna izquierda */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div>
            <p className="text-justify mb-2">{t('page5.guiltText')}</p>
            <EmotionChartLeft 
              topEmotion={emotionData[0]}
              bottomEmotion={emotionData[1]}
              width={120} 
              height={150}
              colors={[chartColors.unpleasant, chartColors.pleasant]}
            />
          </div>
        </div>

        {/* Gráfico central */}
        <div className="w-1/3 flex justify-center items-center px-2">
          <Image src={svgGraphic} alt={t('page5.motivesGraphicAlt')} width={300} height={300} />
        </div>

        {/* Columna derecha */}
        <div className="w-1/3 flex flex-col justify-between text-xs leading-tight">
          <div className="border p-2 mb-4">
            <h3 className="font-bold mb-1">{t('page5.prideTitle')}</h3>
            <p className="text-justify mb-2">{t('page5.prideText')}</p>
            <p className="text-justify mb-2">{t('page5.vexationText')}</p>
            <EmotionChartRight 
              topEmotion={emotionData[1]}
              bottomEmotion={emotionData[0]}
              width={120} 
              height={150}
              colors={[chartColors.pleasant, chartColors.unpleasant]}
            />
          </div>
          <div className="border p-2">
            <h3 className="font-bold mb-1">{t('page5.devotionTitle')}</h3>
            <p className="text-justify mb-2">{t('page5.devotionText')}</p>
            <p className="text-justify mb-2">{t('page5.embarrassmentText')}</p>
            <EmotionChartRight 
              topEmotion={emotionData[2]}
              bottomEmotion={emotionData[3]}
              width={120} 
              height={150}
              colors={[chartColors.pleasant, chartColors.unpleasant]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
