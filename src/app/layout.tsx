import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Urbangrey - Designing the Future of Work and Living',
  description:
    'At Urbangrey, we craft furniture that blends design excellence and functionality, creating solutions that elevate every space.',
  keywords: ['office furniture', 'modular furniture', 'custom furniture', 'interior design', 'commercial furniture', 'Urbangrey'],
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {GTM_ID && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      )}
      <body
        className={cn(
          'font-body antialiased',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        {GTM_ID && (
           <noscript>
             <iframe
               src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
               height="0"
               width="0"
               style={{ display: 'none', visibility: 'hidden' }}
             />
           </noscript>
        )}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
