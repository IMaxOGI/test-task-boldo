import React from 'react';
import type { Metadata } from 'next';
import 'normalize.css/normalize.css';
import { Open_Sans } from 'next/font/google';
import './index.scss';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Boldo',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
