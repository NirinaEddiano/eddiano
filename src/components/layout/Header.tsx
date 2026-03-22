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

  // Classes de base dynamiques
  const navBgClass = isScrolled 
    ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
    : "bg-transparent py-6";
  
  const textColorClass = isScrolled ? "text-gray-900" : "text-white";
  
  const buttonClass = isScrolled
    ? "bg-black text-white border-black hover:bg-blue-600 hover:border-blue-600"
    : "bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex gap-0.5 z-50">
          <span className={textColorClass}>Eddiano</span>
          <span className={isScrolled ? "text-blue-600" : "text-blue-400"}>.dev</span>
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
                    ? (isScrolled ? "text-blue-600" : "text-blue-400") 
                    : (isScrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white")
                  }
                `}
              >
                {link.name}
                
                {/* Petite barre d'indication active (Animation Framer Motion) */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}
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
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden z-50 relative">
          {isMobileMenuOpen ? <X className="text-white" /> : <Menu className={textColorClass} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 md:hidden p-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl font-black tracking-tighter transition-colors ${pathname === link.href ? "text-blue-500" : "text-white hover:text-blue-400"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/devis"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-8 py-5 bg-blue-600 text-white rounded-3xl font-black text-xl flex items-center justify-center gap-4"
          >
            Devis Gratuit <ArrowRight size={24} />
          </Link>
        </div>
      )}
    </header>
  );
}