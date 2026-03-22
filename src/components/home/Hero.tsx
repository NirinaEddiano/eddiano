"use client";

import { useState, useEffect } from "react";
import { Star, ArrowRight, LayoutDashboard, Code2 } from "lucide-react";

export default function Hero() {
  // --- Machine à écrire ---
  const words = ["Next.js (Code)", "WordPress", "Shopify"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  // --- Composant Carte (Utilisé en Flottant Desktop ET en Grille Mobile) ---
  const TechCard = ({ title, sub, icon, colorClass, borderClass, isImage = false }) => (
    <div className={`flex flex-col md:flex-row items-center gap-1.5 md:gap-3 bg-gray-900/80 backdrop-blur-md border ${borderClass} p-2 md:pr-4 md:pl-2 md:py-2 rounded-xl shadow-xl w-full h-full justify-center md:justify-start`}>
       {isImage ? (
         <img src={icon} alt={title} className="w-6 h-6 md:w-10 md:h-10 drop-shadow-md object-contain" />
       ) : (
         <div className="bg-blue-600/20 p-1 md:p-1.5 rounded-lg">
           <Code2 className="text-blue-400 w-4 h-4 md:w-6 md:h-6" />
         </div>
       )}
       <div className="text-center md:text-left">
         <p className="text-white font-bold text-[9px] md:text-xs leading-none mb-0.5">{title}</p>
         <p className={`${colorClass} text-[8px] md:text-[10px] font-mono leading-none`}>{sub}</p>
       </div>
    </div>
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      
      {/* FOND */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/hero-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </div>

      {/* --- ÉLÉMENTS FLOTTANTS (UNIQUEMENT DESKTOP) --- */}
      <div className="absolute top-28 right-[15%] animate-float-fast z-10 hidden md:block">
        <TechCard title="E-Commerce" sub="Shopify Expert" icon="/assets/logos/shopify.png" colorClass="text-green-400" borderClass="border-white/10" isImage={true} />
      </div>

      <div className="absolute bottom-24 left-[10%] animate-float-medium z-10 hidden md:block">
        <TechCard title="Site Vitrine" sub="WordPress Pro" icon="/assets/logos/wordpress.png" colorClass="text-blue-400" borderClass="border-white/10" isImage={true} />
      </div>

      <div className="absolute bottom-32 right-[8%] animate-float-slow z-10 hidden md:block">
         <TechCard title="Sur Mesure" sub="Next.js / React" icon="" colorClass="text-gray-300" borderClass="border-l-4 border-l-blue-500 border-white/10" isImage={false} />
      </div>

      {/* --- CONTENU CENTRAL --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center flex-grow justify-center mt-10 md:mt-0">
        
        {/* Avis Clients */}
        <div className="mb-6 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-2xl">
            <div className="flex -space-x-2">
               <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-6 h-6 rounded-full border border-gray-800" />
               <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-6 h-6 rounded-full border border-gray-800" />
               <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-6 h-6 rounded-full border border-gray-800" />
            </div>
            <div className="flex flex-col items-start">
                <div className="flex text-yellow-400 text-[10px]">
                    {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                </div>
            </div>
        </div>

        {/* TITRES */}
        <h2 className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 animate-pulse">
          Agence de Développement Web
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
          Votre site web professionnel <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200 cursor-blink">
            {currentText}
          </span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light">
          Transformez votre vision en réalité digitale. Solutions performantes, design moderne et conversion optimisée pour votre business.
        </p>
        
        {/* Boutons */}
        <div className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-3 mb-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-500 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <span className="uppercase tracking-wide">Demander mon devis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>Nos Projets</span>
          </button>
        </div>

      </div>

      {/* --- VERSION MOBILE : GRILLE DE 3 CARTES EN BAS --- */}
      {/* Utilisation de mt-auto pour pousser vers le bas et z-30 pour être au dessus du fond */}
      <div className="w-full md:hidden relative z-30 px-2 pb-6 mt-auto">
        <div className="grid grid-cols-3 gap-2">
             <TechCard 
                title="Shopify" 
                sub="E-Commerce" 
                icon="/assets/logos/shopify.png" 
                colorClass="text-green-400" 
                borderClass="border-white/10" 
                isImage={true} 
             />
             <TechCard 
                title="WordPress" 
                sub="Vitrine" 
                icon="/assets/logos/wordpress.png" 
                colorClass="text-blue-400" 
                borderClass="border-white/10" 
                isImage={true} 
             />
             <TechCard 
                title="Next.js" 
                sub="Sur Mesure" 
                icon="" 
                colorClass="text-blue-300" 
                borderClass="border-white/10" 
                isImage={false} 
             />
        </div>
      </div>
    </section>
  );
}