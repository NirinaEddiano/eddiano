"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle,Send } from "lucide-react";
import Link from "next/link";

export default function FaqSection() {
  
  // --- LES 7 QUESTIONS / RÉPONSES ---
  const faqs = [
    {
      question: "Quel outil choisir : Code (Next.js) ou CMS (WordPress/Shopify) ?",
      answer: "Tout dépend de vos objectifs. Si vous visez la performance pure, une application complexe ou une évolutivité totale, le Code (Next.js) est imbattable. Si vous avez besoin d'une boutique rapide à lancer ou d'un blog que vous gérez seul sans connaissances techniques, WordPress ou Shopify sont plus adaptés. Nous vous conseillerons la meilleure option lors de notre premier appel."
    },
    {
      question: "Combien de temps faut-il pour créer mon site web ?",
      answer: "Cela varie selon la complexité. Un site vitrine (One Page) ou une boutique Dropshipping simple peut être livré en 5 à 10 jours. Pour une application Next.js complexe ou un E-commerce sur-mesure avec beaucoup de fonctionnalités, comptez entre 3 et 6 semaines. Nous validons un calendrier précis avant de commencer."
    },
    {
      question: "Mon site sera-t-il bien référencé sur Google (SEO) ?",
      answer: "Absolument. Que ce soit en Code ou sur CMS, nous appliquons les meilleures pratiques SEO : structure balisée, vitesse de chargement optimisée (Core Web Vitals), meta-descriptions et sitemap. Votre site partira avec une longueur d'avance sur vos concurrents."
    },
    {
      question: "Puis-je modifier le contenu de mon site moi-même ?",
      answer: "Oui ! Sur WordPress et Shopify, vous avez un panneau d'admin intuitif. Pour les sites en Code (Next.js), nous pouvons intégrer un CMS 'Headless' (comme Sanity ou Strapi) qui vous permet de modifier vos textes et images aussi facilement que sur Word, sans toucher à une seule ligne de code."
    },
    {
      question: "Gérez-vous le Dropshipping et l'automatisation ?",
      answer: "Oui, c'est une de nos spécialités sur Shopify et WooCommerce. Nous configurons non seulement la boutique, mais aussi les applications d'automatisation (commandes, stocks) pour que vous puissiez vous concentrer uniquement sur le marketing et la vente."
    },
    {
      question: "Proposez-vous une maintenance après la mise en ligne ?",
      answer: "Bien sûr. Un site web doit vivre. Nous proposons des forfaits de maintenance mensuelle pour gérer les mises à jour de sécurité, les sauvegardes et les petites modifications, afin que vous ayez l'esprit tranquille."
    },
    {
      question: "Quels sont les éléments à fournir pour démarrer ?",
      answer: "Idéalement : votre logo, votre charte graphique (couleurs), les textes de présentation et vos images. Si vous n'avez rien de tout ça, pas de panique : nous pouvons aussi nous occuper du branding et de la rédaction ou utiliser des banques d'images professionnelles."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Le 1er est ouvert par défaut

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* --- EN-TÊTE --- */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions Fréquentes
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Tout ce que vous devez savoir avant de lancer votre projet digital.
          </p>
        </div>

        {/* --- LISTE DES QUESTIONS --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-blue-600 shadow-lg" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* QUESTION (Bouton Cliquable) */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    isOpen ? "text-blue-600" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Icône qui pivote */}
                  <div className={`p-2 rounded-full transition-colors ${
                    isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* RÉPONSE (Animation Fluide) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

       {/* N'oublie pas d'importer Send de 'lucide-react' en haut du fichier */}
        {/* import { Plus, Minus, MessageCircle, Send } from "lucide-react"; */}

        {/* --- FOOTER FAQ (PARTIE À REMPLACER) --- */}
        <div className="mt-16 bg-gray-900  rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
             
             {/* Déco fond */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                {/* ICONE FLOTTANTE (Message) */}
                <motion.div 
                    className="bg-white/20 p-4 rounded-full mb-6 text-white backdrop-blur-sm"
                    animate={{ y: [0, -10, 0] }} // Monte et descend
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <MessageCircle size={32} />
                </motion.div>

                <h4 className="text-2xl font-bold mb-4">Vous avez une autre question ?</h4>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                    Nous sommes là pour vous aider. Contactez-nous directement, nous répondons généralement en moins de 2 heures.
                </p>

                {/* BOUTON AVEC ICONE */}
                <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-3 bg-white text-gray-900  px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                    <span>Poser ma question</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
             </div>
        </div>
      </div>
    </section>
  );
}