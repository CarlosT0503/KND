import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, JetBrains_Mono, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KND // Cuartel General",
  description:
    "Cuartel general digital privado de KND. Operaciones, agentes, archivos y logros.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} ${kalam.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-knd-black font-mono-knd antialiased">
        {/* Google Tag Manager
            strategy="beforeInteractive" hace que Next.js inyecte este
            script en el <head> del HTML inicial sin importar en qué parte
            del árbol se declare — es la forma recomendada por Next.js de
            instalar GTM en el layout raíz (ver next/script docs). */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5D3QSW59');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) — debe ser lo primero dentro de <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5D3QSW59"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
