import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';
import AnimationWrapper from './components/AnimationWrapper';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Enesi\'s Space',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet"/>
      </head>
      <body className={`${inter.className} bg-black min-h-screen`} suppressHydrationWarning>
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-custom-orange/10 to-transparent pointer-events-none z-0" />
        <div className="relative z-10">
          <AnimationWrapper>
            {children}
          </AnimationWrapper>
        </div>
      </body>
    </html>
  );
}
