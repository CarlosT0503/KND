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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} ${kalam.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-knd-black font-mono-knd antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
