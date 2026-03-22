"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* CARTE CTA ARRONDIE */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center justify-center text-center shadow-2xl"
        >
            {/* 1. IMAGE DE FOND (Setup Ordi) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/assets/cta-setup.jpg" 
                    alt="Bureau de développement" 
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
                {/* 2. OVERLAY (Filtre Noir Élégant) */}
                {/* On assombrit l'image pour que le texte blanc ressorte parfaitement */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* 3. CONTENU */}
            <div className="relative z-10 px-6 max-w-3xl mx-auto">
                
                {/* Titre : Simple et Direct */}
                <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Votre projet mérite une <br />
                    <span className="text-blue-400">identité d'exception.</span>
                </h2>

                {/* Description : Lisible */}
                <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
                    Du code sur-mesure à l'e-commerce performant. <br className="hidden md:block"/>
                    Nous avons l'expertise technique pour concrétiser vos idées dès aujourd'hui.
                </p>

                {/* BOUTONS (Style Moderne & Épuré) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    
                    {/* Bouton 1 : Blanc (Action Principale) */}
                    <Link 
                        href="/devis"
                        className="group w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                    >
                        <span>Lancer mon projet</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Bouton 2 : Transparent (Action Secondaire) */}
                    <Link 
                        href="/contact"
                        className="group w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <CalendarCheck size={20} />
                        <span>Réserver un appel</span>
                    </Link>

                </div>

            </div>

        </motion.div>
      </div>
    </section>
  );
}