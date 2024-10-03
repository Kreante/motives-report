import { Ubuntu } from "next/font/google";
import "../globals.css";
import { Providers } from '../providers';
// Quitamos la importación de i18n que estaba causando problemas

const ubuntu = Ubuntu({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${ubuntu.variable} font-sans`}>
        <Providers locale={params.lang}>
          {children}
        </Providers>
      </body>
    </html>
  )
}