import React from 'react';
import Image from 'next/image';

interface CoverPageProps {
  title: string;
  subtitle: string;
}

export const CoverPage: React.FC<CoverPageProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[190mm] w-[277mm] bg-white">
      <Image 
        src="/images/logo_Motives_RVB_original.svg"
        alt="Motives Solutions"
        width={530}
        height={170}
        className="mb-16"
      />
      <h1 className="text-4xl font-normal font-baumans mb-4">{title}</h1>
      <h2 className="text-2xl font-bold font-ubuntu">{subtitle}</h2>
    </div>
  );
};
