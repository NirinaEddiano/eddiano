"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import pour détecter la page active
import { Menu, X, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname(); // Récupère l'URL actuelle (ex: "/services")
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Pages légales qui doivent toujours avoir le style sombre (texte blanc)
  const legalPages = ['/mentions-legales', '/confidentialite', '/cgv'];
  const isLegalPage = legalPages.includes(pathname);

  // --- CONFIGURATION DES LIENS ---
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Classes de base dynamiques
  // Pour les pages légales, on force toujours le style sombre (texte blanc, fond noir)
  // Pour les autres pages, on garde le comportement original (transparent en haut, blanc quand scrollé)
  const isLegalPageForced = isLegalPage;
  
  const navBgClass = isLegalPageForced
    ? "bg-black py-6"
    : isScrolled 
      ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
      : "bg-transparent py-6";
  
  const textColorClass = isLegalPageForced
    ? "text-white"
    : isScrolled 
      ? "text-gray-900" 
      : "text-white";
  
  const buttonClass = isLegalPageForced
    ? "bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
    : isScrolled
      ? "bg-black text-white border-black hover:bg-blue-600 hover:border-blue-600"
      : "bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm";

  const logoPrimaryClass = isMobileMenuOpen ? "text-white" : textColorClass;
  const logoAccentClass = isMobileMenuOpen
    ? "text-blue-400"
    : isLegalPageForced
      ? "text-blue-400"
      : isScrolled
        ? "text-blue-600"
        : "text-blue-400";
  const mobileIconClass = isMobileMenuOpen ? "text-white" : textColorClass;
  const mobileNavBgClass = isMobileMenuOpen
    ? "bg-transparent py-4"
    : navBgClass;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileNavBgClass} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        
        {/* LOGO */}
        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter flex gap-0.5 z-50">
          <span className={logoPrimaryClass}>Eddiano</span>
          <span className={logoAccentClass}>.dev</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            // Vérification si le lien est actif
            const isActive = pathname === link.href;

            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative text-sm font-bold transition-all duration-300 group
                  ${isActive 
                    ? (isLegalPageForced ? "text-blue-400" : (isScrolled ? "text-blue-600" : "text-blue-400")) 
                    : (isLegalPageForced ? "text-gray-300 hover:text-white" : (isScrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"))
                  }
                `}
              >
                {link.name}
                
                {/* Petite barre d'indication active (Animation Framer Motion) */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${isLegalPageForced ? "bg-blue-400" : (isScrolled ? "bg-blue-600" : "bg-blue-400")}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOUTON DEVIS */}
        <div className="hidden md:block">
          <Link 
            href="/devis"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border text-xs font-black uppercase tracking-widest transition-all duration-300 ${buttonClass} ${pathname === '/devis' ? 'ring-2 ring-blue-500' : ''}`}
          >
            <span>Devis Gratuit</span>
            <Send size={14} /> 
          </Link>
        </div>

        {/* BOUTON MOBILE */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden z-50 relative shrink-0">
            {isMobileMenuOpen ? <X className="text-white" /> : <Menu className={mobileIconClass} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden">
          <div className="flex h-full flex-col items-stretch overflow-y-auto px-6 pb-8 pt-24">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
              Navigation
            </p>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl sm:text-3xl font-black tracking-tighter transition-colors ${pathname === link.href ? "text-blue-500" : "text-white hover:text-blue-400"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              href="/devis"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 w-full text-center px-6 py-4 bg-blue-600 text-white rounded-3xl font-black text-base sm:text-lg flex items-center justify-center gap-3"
            >
              Devis Gratuit <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
