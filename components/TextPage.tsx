import React from 'react';

interface TextPageProps {
  leftTitle: string;
  rightTitle: string;
  leftText: string;
  rightText: string;
}

export const TextPage: React.FC<TextPageProps> = ({ leftTitle, rightTitle, leftText, rightText }) => {
  return (
    <div className="h-full grid grid-cols-2 gap-8 font-ubuntu text-secondary">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-primary">{leftTitle}</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: leftText }} 
          className="text-sm text-justify space-y-4 leading-relaxed"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-primary">{rightTitle}</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: rightText }} 
          className="text-sm text-justify space-y-4 leading-relaxed"
        />
      </div>
    </div>
  );
};
