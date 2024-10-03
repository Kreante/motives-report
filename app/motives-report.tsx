"use client";

import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { CoverPage } from '../components/CoverPage';
import { HowToReadMotives } from '../components/HowToReadMotives';
import { ActivitiesFeelingsPage } from '../components/ActivitiesFeelingsPage';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6';
import Page7 from '../components/Page7';
import Page8 from '../components/Page8';
import Page9 from '../components/Page9';
import Page10 from '../components/Page10';
import Page11 from '../components/Page11';
import Page12 from '../components/Page12';
import Page13 from '../components/Page13';
import Page14 from '../components/Page14';
import Page15 from '../components/Page15';
import Page16 from '../components/Page16';
import Page17 from '../components/Page17';
import Page18 from '../components/Page18';
import Page19 from '../components/Page19';
import Page20 from '../components/Page20';
import Page21 from '../components/Page21';

const MotivesReport: React.FC<{ locale: string }> = ({ locale }) => {
  const title = locale === 'fr' ? "Rapport Motives" : "Motives Report";
  const subtitle = locale === 'fr' ? "3 AOÛT" : "AUGUST 3";

  const pages = [
    { component: CoverPage, props: { title, subtitle } },
    { component: Page2, props: { locale } },
    { component: HowToReadMotives, props: { locale } },
    { component: Page4, props: { svgGraphic: '/images/ressent_ses_relations.svg' } },
    { component: Page5, props: { locale, svgGraphic: '/images/ressent_ses_relations.svg' } },
    { component: Page6, props: { locale, svgGraphic: '/images/ressent_ses_relations.svg' } }, // Actualizado
    { component: ActivitiesFeelingsPage, props: { locale } },
    { component: Page1, props: { locale } },
    { component: Page3, props: { locale } },
    { component: Page7, props: { locale } },
    { component: Page8, props: { locale } },
    { component: Page9, props: { locale } },
    { component: Page10, props: { locale } },
    { component: Page11, props: { locale } },
    { component: Page12, props: { locale } },
    { component: Page13, props: { locale } },
    { component: Page14, props: { locale } },
    { component: Page15, props: { locale } },
    { component: Page16, props: { locale } },
    { component: Page17, props: { locale } },
    { component: Page18, props: { locale } },
    { component: Page19, props: { locale } },
    { component: Page20, props: { locale } },
    { component: Page21, props: { locale } }
  ];

  return (
    <div id="report-content" className="relative font-ubuntu">
      {
        pages.map((page, index) => {
          const Component = page.component; // Asignamos el componente dinámicamente

          return (
            <div key={index} className="page bg-white mb-8 print:mb-0" style={{ width: '297mm', height: '210mm' }}>
              <PageLayout title={page.props.title || ''}>
                <Component {...page.props} />  {/* Renderizamos el componente */}
              </PageLayout>
            </div>
          );
        })
      }

    </div>
  );
}

export default MotivesReport;
