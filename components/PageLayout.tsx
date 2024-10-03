import Image from 'next/image';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => (
  <div className="w-full h-full bg-white p-8 flex flex-col overflow-hidden">
    <div className="flex justify-between items-center mb-6">
      <Image 
        src="/images/logo_Motives_RVB_original.svg"
        alt="Motives Solutions"
        width={100}
        height={32}
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="flex-grow overflow-hidden">
      {children}
    </div>
    <footer className="mt-auto pt-4">
      <p className="text-sm text-gray-600 font-ubuntu">
        © MOTIVES 2024. Tous droits résérvés.
      </p>
    </footer>
  </div>
);