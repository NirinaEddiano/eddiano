"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  Layers 
} from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  
  // --- DONNÉES RÉALISATIONS ---
  const projects = [
    {
      id: 1,
      title: "VANOVATION",
      // category supprimée du visuel
      description: "Boutique de mode haute performance avec filtrage avancé.",
      image: "/assets/portfolio/projet-1.jpg", 
      linkDetail: "/portfolio/fashion-nova",
      linkView: "https://monsite-demo.com"
    },
    {
      id: 2,
      title: "NUMOIA",
      description: "Design sobre et élégant pour un cabinet juridique international.",
      image: "/assets/portfolio/projet-2.jpg",
      linkDetail: "/portfolio/avocats",
      linkView: "#"
    },
    {
      id: 3,
      title: "JOVASI",
      description: "Plateforme de cours en ligne avec suivi de progression temps réel.",
      image: "/assets/portfolio/projet-3.jpg",
      linkDetail: "/portfolio/learning",
      linkView: "#"
    }
  ];

  // --- LOGIQUE CARROUSEL ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Si écran > 1024px -> 3 items, sinon 1 item
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - itemsPerView;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // Calcul du GAP (espace entre les cartes)
  const gap = 32; // 32px équivaut à gap-8

  return (
    <section id="realisations" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- EN-TÊTE + NAVIGATION --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            
            <div className="max-w-2xl">
                <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
                    Portfolio
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                    Nos dernières réalisations.
                </h3>
                <p className="text-gray-400 font-light text-lg">
                    Chaque projet est unique. Nous transformons vos idées en plateformes digitales performantes.
                </p>
            </div>

            {/* Boutons Desktop */}
            <div className="flex gap-4">
                <button 
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`p-4 rounded-full border border-gray-700 transition-all ${
                        currentIndex === 0 
                        ? "opacity-50 cursor-not-allowed text-gray-600" 
                        : "hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                    }`}
                >
                    <ArrowLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className={`p-4 rounded-full border border-gray-700 transition-all ${
                        currentIndex === maxIndex 
                        ? "opacity-50 cursor-not-allowed text-gray-600" 
                        : "hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                    }`}
                >
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>

        {/* --- CARROUSEL --- */}
        <div className="relative overflow-hidden w-full">
            <motion.div 
                className="flex gap-8" // gap-8 = 32px
                // Animation de glissement : On bouge de (100% / nombreItems) + un ajustement pour le gap
                animate={{ x: `calc(-${currentIndex} * (100% / ${itemsPerView}) - ${currentIndex > 0 ? (currentIndex * gap) / itemsPerView : 0}px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ 
                    // Sur desktop, on veut que le conteneur prenne toute la largeur sans débordement inutile
                    width: "100%",
                }}
            >
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="relative rounded-2xl overflow-hidden group border border-gray-800 shrink-0 aspect-[16/10]" 
                        // shrink-0 empêche l'écrasement. aspect-[16/10] garde un ratio type écran PC.
                        style={{ 
                            // Calcul précis de la largeur pour tenir à 3 avec le gap
                            width: itemsPerView === 1 
                                ? "100%" 
                                : `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})` 
                        }}
                    >
                        {/* IMAGE DE FOND */}
                        {/* object-top permet d'afficher le haut du site (header) sans le couper */}
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* OVERLAY ASSOMBRI */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-160"></div>

                        {/* CONTENU (Sans Badge) */}
                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full pr-24">
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                {project.title}
                            </h4>
                            
                            {/* Bouton Détails */}
                            <Link 
                                href={project.linkDetail}
                                className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors group/btn"
                            >
                                <Layers size={18} />
                                <span>Détails</span>
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* BOUTON VOIR (Oeil) */}
                        <Link 
                            href={project.linkView}
                            target="_blank"
                            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-center gap-1 group/eye"
                        >
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 group-hover/eye:bg-blue-600 group-hover/eye:border-blue-600 transition-all">
                                <Eye size={24} className="text-white" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover/eye:text-white transition-colors">
                                Voir
                            </span>
                        </Link>

                    </div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
}