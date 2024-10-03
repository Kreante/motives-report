import React from 'react';
import { EngagementChartComponent } from './engagement-chart';

interface ActivitiesFeelingsPageProps {
  locale: string;
}

export const ActivitiesFeelingsPage: React.FC<ActivitiesFeelingsPageProps> = ({ locale }) => {
  const title = locale === 'fr' ? "Ressentis liés aux activités" : "Feelings related to activities";
  const data = [
    { date: '31/01/23', serenity: 33, anxiety: -11 },
    { date: '01/03/23', serenity: 33, anxiety: -11 },
    // ... más datos
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <EngagementChartComponent data={data} />
      <p className="mt-4">
        {locale === 'fr' 
          ? "Explication en français des ressentis liés aux activités..." 
          : "Explanation in English of feelings related to activities..."}
      </p>
    </div>
  );
};