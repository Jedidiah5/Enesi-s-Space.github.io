import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'ENESE - Portfolio',
  description: 'Welcome to my portfolio website showcasing my projects and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
