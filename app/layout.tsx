import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} font-sans`}>{children}</body>
    </html>
  )
}
