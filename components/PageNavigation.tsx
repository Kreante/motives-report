import React from 'react';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-between items-center p-4">
    <button 
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
      disabled={currentPage === 0}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
    >
      Previous
    </button>
    <span>Page {currentPage + 1} of {totalPages}</span>
    <button 
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
      disabled={currentPage === totalPages - 1}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
    >
      Next
    </button>
  </div>
);
