"use client";

import Link from "next/link";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  Mail, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* --- PARTIE HAUTE (GRID 4 COLONNES) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* COLONNE 1 : MARQUE & INFO */}
            <div className="space-y-6">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
                  <span className="text-white">Eddiano</span>
                  <span className="text-blue-500">.dev</span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Agence digitale spécialisée dans la création de sites web performants. 
                    Nous transformons vos idées en expériences digitales uniques.
                </p>
                
                {/* Réseaux Sociaux */}
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white">
                        <Twitter size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-gray-400 hover:text-white">
                        <Github size={18} />
                    </a>
                </div>
            </div>

            {/* COLONNE 2 : LIENS RAPIDES */}
            <div>
                <h4 className="text-lg font-bold mb-6">Agence</h4>
                <ul className="space-y-4">
                    <li>
                        <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                            Nos Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#realisations" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* COLONNE 3 : EXPERTISES (SEO) */}
            <div>
                <h4 className="text-lg font-bold mb-6">Expertises</h4>
                <ul className="space-y-4">
                    <li className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        Développement Next.js / React
                    </li>
                    <li className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        E-commerce Shopify
                    </li>
                    <li className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        Site Vitrine WordPress
                    </li>
                    <li className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                        Dropshipping & SEO
                    </li>
                </ul>
            </div>

            {/* COLONNE 4 : NEWSLETTER & CONTACT */}
            <div>
                <h4 className="text-lg font-bold mb-6">Restons connectés</h4>
                <p className="text-gray-400 text-sm mb-4">
                    Recevez nos conseils pour digitaliser votre business.
                </p>
                
                {/* Input Newsletter */}
                <form className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1 focus-within:border-blue-500 transition-colors mb-8">
                    <input 
                        type="email" 
                        placeholder="Votre email" 
                        className="bg-transparent border-none text-sm text-white px-3 py-2 w-full focus:outline-none placeholder:text-gray-600"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors">
                        <ArrowRight size={18} />
                    </button>
                </form>

                {/* Infos Contact Direct */}
                <div className="space-y-3">
                    <a href="mailto:contact@eddiano.dev" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                        <Mail size={16} className="text-blue-500" />
                        contact@eddiano.dev
                    </a>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <MapPin size={16} className="text-blue-500" />
                        Disponible en Remote (Monde)
                    </div>
                </div>
            </div>

        </div>

        {/* --- PARTIE BASSE (COPYRIGHT) --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
                &copy; {currentYear} eddiano.dev - Tous droits réservés.
            </p>
            
            <div className="flex gap-6">
                <Link href="/mentions-legales" className="text-gray-500 text-xs hover:text-white transition-colors">
                    Mentions Légales
                </Link>
                <Link href="/confidentialite" className="text-gray-500 text-xs hover:text-white transition-colors">
                    Politique de Confidentialité
                </Link>
                <Link href="/cgv" className="text-gray-500 text-xs hover:text-white transition-colors">
                    CGV
                </Link>
            </div>
        </div>

      </div>
    </footer>
  );
}