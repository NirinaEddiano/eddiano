import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/lib/i18n/LanguageContext";
import GoogleTranslateInit from "@/components/layout/GoogleTranslateInit";

export const metadata: Metadata = {
  title: "Niryva - Agence Web | WordPress, Shopify & Code Sur-Mesure",
  description: "Niryva, agence web spécialisée en création de sites internet. WordPress, Shopify et développement sur mesure pour entreprises francophones.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
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