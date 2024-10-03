import React from 'react';

interface CircularChartPageProps {
  title: string;
}

export const CircularChartPage: React.FC<CircularChartPageProps> = ({ title }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {/* Aquí iría la implementación del gráfico circular */}
    <p className="text-center py-20">Gráfico circular en implementación...</p>
  </div>
);
