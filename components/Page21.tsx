import React from 'react';
import GenericPage from './GenericPage';
import EmotionChartLeft from './EmotionChartLeft';
import EmotionChartRight from './EmotionChartRight';

const Page21: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? 'Gráficos de Emociones' : 'Emotion Charts';
  const content = (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '48%' }}>
        <h2>{locale === 'fr' ? 'Gráfico Izquierdo' : 'Left Chart'}</h2>
        <EmotionChartLeft 
          topEmotion={{ name: 'Sérénité', value: 33 }}
          bottomEmotion={{ name: 'Anxiété', value: 11 }}
          width={250}
          height={300}
        />
      </div>
      <div style={{ width: '48%' }}>
        <h2>{locale === 'fr' ? 'Gráfico Derecho' : 'Right Chart'}</h2>
        <EmotionChartRight 
          topEmotion={{ name: 'Sang-froid', value: 33 }}
          bottomEmotion={{ name: 'Colère', value: 11 }}
          width={250}
          height={300}
        />
      </div>
    </div>
  );
  
  return (
    <GenericPage title={title} content={content} locale={locale} />
  );
};

export default Page21;
