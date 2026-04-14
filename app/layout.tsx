import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LS SHOP - As Melhores Ofertas de Hardware",
  description: "Sua curadoria de hardware com ofertas selecionadas do Magalu e Mercado Livre.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18074962232"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18074962232');

            // Função de Conversão que você me enviou
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18074962232/tMinCJyC_5scELiS6KpD',
                  'event_callback': callback
              });
              return false;
            };
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}