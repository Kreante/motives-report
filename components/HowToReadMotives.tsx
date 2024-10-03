import React from 'react';
import { useTranslation } from 'react-i18next';

interface HowToReadMotivesProps {
  locale: string;
}

export const HowToReadMotives: React.FC<HowToReadMotivesProps> = ({ locale }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-primary text-2xl mb-6 text-center">{t('howToReadMotives.title')}</h2>
      
      <div className="border border-gray-300 p-6 mb-6">
        <ol className="list-decimal pl-6 space-y-4 text-sm">
          {/* Sección 1 */}
          <li>
            <p>{t('howToReadMotives.section1.header')}</p>
            <p className="mt-2">{t('howToReadMotives.section1.content1')}</p>
            <ul className="list-disc pl-6 mt-2">
              {t('howToReadMotives.section1.list1', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-2">{t('howToReadMotives.section1.content2')}</p>
            <p className="mt-2 font-semibold">{t('howToReadMotives.section1.conclusion')}</p>
          </li>

          {/* Sección 2 */}
          <li className="mt-4">
            <p>{t('howToReadMotives.section2.header')}</p>
            <ul className="list-disc pl-6 mt-2">
              {t('howToReadMotives.section2.list1', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">{t('howToReadMotives.section2.conclusion')}</p>
          </li>

          {/* Sección 3 */}
          <li className="mt-4">
            <p>{t('howToReadMotives.section3.header')}</p>
            <ol className="list-alpha pl-6 mt-2">
              {t('howToReadMotives.section3.list1', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </li>
        </ol>
      </div>

      <p className="text-primary text-center text-lg font-semibold">{t('howToReadMotives.footer')}</p>
    </div>
  );
};
