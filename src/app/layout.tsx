import '../styles/globals.css';

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio',
  },
  description: 'A personal portfolio website built with Next.js',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prabhjotsinghchadha.com',
    title: 'Portfolio',
    description: 'A Prabhjot&apos;s Portfolio Site',
    siteName: 'Portfolio',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}

