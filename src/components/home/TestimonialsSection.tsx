"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  // --- DONNÉES AVIS ---
  const reviews = [
    {
      id: 1,
      text: "J'étais sceptique sur le fait de refaire mon site, mais l'équipe a su comprendre exactement ce que je voulais. Le design est incroyable et mes ventes ont augmenté de 30% le premier mois.",
      author: "Client(Anonyme)",
      role: "CEO Boutique Mode",
      image: "/assets/reviews/review-1.jpg", // Capture mobile 1
    },
    {
      id: 2,
      text: "Une rapidité d'exécution impressionnante. Ils m'ont livré une application Next.js fluide et parfaitement optimisée pour le SEO. Je recommande pour tout projet technique.",
      author: "Client(Anonyme)",
      role: "Fondateur Startup Tech",
      image: "/assets/reviews/review-2.jpg", // Capture mobile 2
    },
    {
      id: 3,
      text: "Mon ancien site WordPress était lent et buggé. Maintenant, tout est fluide, l'admin est super simple à utiliser et le design fait très pro. Merci pour ce travail !",
      author: "Client(Anonyme)",
      role: "Directeur Agence Immo",
      image: "/assets/reviews/review-3.jpg", // Capture mobile 3
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Fonction pour passer à l'avis suivant
  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  // Fonction pour passer à l'avis précédent
  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Logique pour déterminer l'ordre des cartes (0 = devant, 1 = milieu, 2 = fond)
  const getCardStyle = (index: number) => {
    // Calcul de la distance par rapport à l'index actif
    // Si activeIndex est 0, alors index 0 est devant, 1 est milieu, 2 est fond
    const position = (index - activeIndex + reviews.length) % reviews.length;

    if (position === 0) {
      // CARTE DU DESSUS (Active)
      return {
        zIndex: 30,
        scale: 1,
        rotate: 0,
        x: 0,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (position === 1) {
      // CARTE DU MILIEU (Suivante)
      return {
        zIndex: 20,
        scale: 0.92,
        rotate: 6, // Légère rotation à droite
        x: 40, // Décalage vers la droite
        opacity: 1,
        filter: "brightness(0.8)", // Un peu plus sombre
      };
    } else {
      // CARTE DU FOND (Celle d'après)
      return {
        zIndex: 10,
        scale: 0.85,
        rotate: -6, // Légère rotation à gauche
        x: -40, // Décalage vers la gauche
        opacity: 1,
        filter: "brightness(0.6)",
      };
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* --- PARTIE GAUCHE : CARTES EMPILÉES (IMAGES) --- */}
            <div className="relative h-[500px] w-full flex items-center justify-center order-1">
                {/* Cercle décoratif derrière */}
                <div className="absolute w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl -z-10"></div>

                {reviews.map((review, index) => {
                    const style = getCardStyle(index);
                    
                    // On ne rend que les 3 cartes pertinentes pour éviter la surcharge si bcp d'avis
                    // Ici on a que 3 avis donc on rend tout
                    return (
                        <motion.div
                            key={review.id}
                            className="absolute w-[280px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                            initial={false} // Pas d'animation au chargement initial
                            animate={style} // Animation vers le nouveau style
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <img 
                                src={review.image} 
                                alt="Capture Avis" 
                                className="w-full h-full object-cover"
                            />
                            {/* Petit overlay en bas pour le style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                    );
                })}
            </div>


            {/* --- PARTIE DROITE : TEXTE AVIS --- */}
            <div className="flex flex-col justify-center order-2 lg:pl-10">
                
                <div className="mb-8">
                    <Quote size={48} className="text-blue-100 mb-6 fill-blue-50" />
                    
                    {/* Zone de texte animée */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex} // Clé unique pour forcer le re-rendu et l'animation
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic mb-8">
                                "{reviews[activeIndex].text}"
                            </p>

                            <div className="flex items-center gap-4">
                                {/* Avatar Anonyme (Cercle avec Initiale) */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {reviews[activeIndex].author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        {reviews[activeIndex].author}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* BOUTONS NAVIGATION */}
                <div className="flex gap-4 mt-4">
                    <button 
                        onClick={prevReview}
                        className="p-4 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={nextReview}
                        className="p-4 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
}