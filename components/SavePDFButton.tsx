import React, { useState } from 'react';

interface SavePDFButtonProps {
  isReady: boolean;
}

export const SavePDFButton: React.FC<SavePDFButtonProps> = ({ isReady }) => {
  const [isLoading, setIsLoading] = useState(false);

  const printReport = async () => {
    if (!isReady) {
      alert("El reporte aún no está listo. Por favor, espere unos segundos.");
      return;
    }

    setIsLoading(true);

    // Verificación adicional de los gráficos
    const checkCharts = () => {
      const charts = document.querySelectorAll('.recharts-wrapper');
      return charts.length > 0 && Array.from(charts).every(chart => chart.innerHTML !== '');
    };

    const waitForCharts = () => {
      if (checkCharts()) {
        setIsLoading(false);
        window.print();
      } else {
        setTimeout(waitForCharts, 500);
      }
    };

    waitForCharts();
  };

  return (
    <button 
      onClick={printReport} 
      className={`bg-gray-800 text-white p-2 rounded flex items-center justify-center ${!isReady && 'opacity-50 cursor-not-allowed'}`}
      disabled={!isReady || isLoading}
    >
      {isLoading ? (
        <span>Preparando...</span>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Guardar PDF
        </>
      )}
    </button>
  );
};
