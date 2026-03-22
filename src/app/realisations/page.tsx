"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/home/CtaSection";

// Données partagées (À mettre idéalement dans un fichier séparé plus tard)
// Dans src/app/realisations/page.tsx ou un fichier data.ts
export const projects = [
  {
    id: "vanovation",
    title: "VANOVATION",
    subtitle: "Révolutionner l'E-commerce de Mode",
    image: "/assets/portfolio/projet-1.jpg",
    detailImg: "/assets/portfolio/projet-1-detail.jpg",
    mobileImg: "/assets/portfolio/projet-1-mobile.jpg",
    linkView: "https://demo.com",
    tags: ["Next.js", "Shopify", "UI/UX"],
    context: "Le projet Vanovation est né d'un constat simple : l'industrie de la mode en ligne est saturée. Le client utilisait auparavant une solution standard qui freinait sa croissance en raison de lenteurs sur mobile.",
    challenge: "Notre défi majeur a été de fusionner l'élégance d'une marque de luxe avec la puissance brute de Next.js en architecture Headless.",
    impact: "Le taux de rebond a chuté de 45% et le panier moyen a augmenté de 30% dès le premier mois."
  },
  {
    id: "numoia",
    title: "NUMOIA",
    subtitle: "L'Autorité Digitale pour le Droit",
    image: "/assets/portfolio/projet-2.jpg",
    detailImg: "/assets/portfolio/projet-2-detail.jpg",
    mobileImg: "/assets/portfolio/projet-2-mobile.jpg",
    linkView: "#",
    tags: ["WordPress", "SEO Elite", "Branding"],
    context: "Numoia est un cabinet juridique international. Le besoin n'était pas seulement d'avoir une vitrine, mais de créer un outil de réassurance haut de gamme.",
    challenge: "Nous avons conçu un design minimaliste basé sur la typographie pour évoquer l'ordre et la clarté, tout en optimisant le SEO sémantique.",
    impact: "Le cabinet reçoit aujourd'hui trois fois plus de demandes de contact qualifiées via leur nouveau site web."
  },
  {
    id: "jovasi",
    title: "JOVASI",
    subtitle: "Plateforme E-learning Interactive",
    image: "/assets/portfolio/projet-3.jpg",
    detailImg: "/assets/portfolio/projet-3-detail.jpg",
    mobileImg: "/assets/portfolio/projet-3-mobile.jpg",
    linkView: "#",
    tags: ["React", "Node.js", "LMS"],
    context: "Jovasi souhaitait moderniser l'apprentissage en ligne avec une plateforme capable de gérer des milliers d'étudiants en temps réel sans latence.",
    challenge: "Le défi était de créer un tableau de bord intuitif pour les formateurs tout en garantissant une lecture vidéo fluide et interactive pour les élèves.",
    impact: "Une réduction de 60% des tickets de support technique et une satisfaction utilisateur notée 4.9/5 par les étudiants."
  }
];

export default function RealisationsPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* --- NOUVELLE HERO SECTION DÉFINISSANTE --- */}
<section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
  {/* IMAGE DE FOND AVEC OVERLAY */}
  <div className="absolute inset-0 z-0">
    <motion.img 
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      src="/assets/portfolio/portfolio-hero.jpg" 
      alt="Nos Réalisations Hero" 
      className="w-full h-full object-cover opacity-50"
    />
    {/* Dégradé pour la lisibilité et le style "Luxe" */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
        Études de Cas & Succès
      </span>
      <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
        Le fruit de notre <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">savoir-faire.</span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
        Chaque projet est une nouvelle opportunité de repousser les limites du design et de la performance technique.
      </p>
      
      {/* Statistiques rapides pour impressionner */}
      <div className="mt-12 flex flex-wrap justify-center gap-12 text-white/80">
          <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Responsive</p>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
          <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">98+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Score SEO</p>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden md:block"></div>
          <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">&lt; 1s</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Chargement</p>
          </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* --- GRILLE 3 COLONNES --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col"
                    >
                        {/* PHOTO EN HAUT */}
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-2xl border border-gray-100">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Link href={`/realisations/${project.id}`} className="bg-white text-black p-4 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all">
                                    <Eye size={24} />
                                </Link>
                            </div>
                        </div>

                        {/* TITRE ET BOUTONS EN BAS */}
                        <div className="px-2 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{project.title}</h3>
                            <div className="flex gap-3">
                                <Link 
                                    href={`/realisations/${project.id}`}
                                    className="flex-1 py-3.5 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-colors"
                                >
                                    Voir Détails
                                </Link>
                                <a 
                                    href={project.linkView} target="_blank"
                                    className="px-4 border border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    <CtaSection />
    </main>
  );
}