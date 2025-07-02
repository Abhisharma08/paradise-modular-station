'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
    interface Window {
      dataLayer: any[];
    }
}
export const pageview = (url: string) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export default function GtmScript() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (GTM_ID) {
            const url = pathname + searchParams.toString();
            pageview(url);
        }
    }, [pathname, searchParams]);

    if (!GTM_ID) {
        return null;
    }

    return (
        <>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');
                    `,
                }}
            />
        </>
    );
}
