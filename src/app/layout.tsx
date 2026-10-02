import type { Metadata } from "next";
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

// Bootstrap literal de Google Tag Manager, tal cual lo entrega GTM.
// Se inyecta con <script dangerouslySetInnerHTML> (no next/script) para
// que llegue al navegador como un <script> plano dentro de <head>, sin
// pasar por el runtime/serialización de next/script (self.__next_s) que
// Tag Assistant no estaba detectando.
const GTM_ID = "GTM-5D3QSW59";
const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} ${kalam.variable} h-full`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          id="gtm-script"
          dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="flex min-h-full flex-col bg-knd-black font-mono-knd antialiased">
        {/* Google Tag Manager (noscript) — primer elemento real de <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
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
