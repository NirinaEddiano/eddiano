import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/lib/i18n/LanguageContext";
import GoogleTranslateInit from "@/components/layout/GoogleTranslateInit";

export const metadata: Metadata = {
  title: "Eddiano.dev - Développeur Web Madagascar",
  description: "Développeur web professionnel à Madagascar - Création de sites internet sur mesure",
  icons: {
    icon: "/Screenshot 2026-04-10 201109.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <GoogleTranslateInit />
        <LangProvider>
          <Header />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}