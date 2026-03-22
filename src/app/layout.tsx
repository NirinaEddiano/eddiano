import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "eddiano.dev - Agence Web",
  description: "Création de sites web Next.js, Shopify et WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        
        {/* Le contenu de tes pages (page.tsx) s'affiche ici */}
        {children}

        {/* Le Footer s'affichera en bas de TOUTES les pages */}
        <Footer />
        
      </body>
    </html>
  );
}