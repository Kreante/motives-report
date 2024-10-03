"use client";

import MotivesReport from './motives-report';

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <MotivesReport locale={lang} />
    </main>
  );
}