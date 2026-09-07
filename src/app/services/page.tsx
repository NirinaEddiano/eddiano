"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, ShoppingCart, LayoutTemplate, CheckCircle2,
  ArrowRight, Zap, PenTool, Search, Plus, Minus, Mail, MousePointer2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import CtaSection from "@/components/home/CtaSection";
import PricingSection from "@/components/home/PricingSection";
import { portfolioProjects } from "@/lib/portfolio";

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const bridgeProject = portfolioProjects[9] ?? portfolioProjects[0];

  const servicesData = [
    {
      title: "Développement Next.js",
      subtitle: "Performance & Sur-Mesure",
      img: "/assets/services/service-custom.jpg",
      icon: <Code2 size={24} />,
      steps: [
        { t: "Architecture API", d: "Conception de serveurs ultra-rapides." },
        { t: "Interface Réactive", d: "Design fluide et sans rechargement." },
        { t: "SEO Elite", d: "Optimisation pour les moteurs de recherche." }
      ],
      color: "blue"
    },
    {
      title: "E-Commerce Shopify",
      subtitle: "Conversion & Ventes",
      img: "/assets/services/service-shopify.jpg",
      icon: <ShoppingCart size={24} />,
      steps: [
        { t: "Tunnel d'achat", d: "Optimisation de l'expérience client." },
        { t: "Custom Liquid", d: "Design unique hors templates standards." },
        { t: "Automatisation", d: "Gestion des stocks et mails auto." }
      ],
      color: "green"
    },
    {
      title: "WordPress Premium",
      subtitle: "Gestion & Autonomie",
      img: "/assets/services/service-wp.jpg",
      icon: <LayoutTemplate size={24} />,
      steps: [
        { t: "Admin Intuitive", d: "Modifiez vos textes sans aide." },
        { t: "Sécurité Totale", d: "Protection contre les cyber-attaques." },
        { t: "Design Élégant", d: "Un site qui reflète votre image pro." }
      ],
      color: "indigo"
    }
  ];

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/services/services-hero.jpg" className="w-full h-full object-cover opacity-60" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Nos <span className="text-blue-500">Expertises</span>.
          </motion.h1>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light">
            Découvrez comment nous transformons vos ambitions en produits digitaux d'exception.
          </p>
        </div>
      </section>

      {/* --- SECTION SERVICES VISUELLE --- */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-24 md:space-y-48">
            {servicesData.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Side (L'image moderne) */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                    <img src={service.img} alt={service.title} className="w-full h-[340px] sm:h-[420px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl w-fit mb-4">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  {/* Décoration flottante */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                </motion.div>

                {/* Info Side (Les étapes) */}
                <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
                  <div>
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">{service.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">L'approche <br className="hidden sm:block" /> {service.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {service.steps.map((step, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center font-bold text-gray-300 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                          0{i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{step.t}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/devis" className="inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all group">
                    Lancer mon projet <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO BRIDGE (VIVANT & VISUEL) --- */}
      <section className="py-20 md:py-28 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1  mt-20">
            {/* Collage de photos flottantes */}
            <div className="relative h-[320px] sm:h-[420px] md:h-[450px] w-full">
              <motion.img
                animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}
                src={bridgeProject.image}
                className="absolute top-0 left-0 w-[72%] rounded-2xl shadow-2xl border border-white/10 z-20"
                alt={`${bridgeProject.title} desktop`}
              />
              <motion.img
                animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                src={bridgeProject.mobileImg}
                className="absolute bottom-6 right-0 w-[38%] rounded-2xl shadow-2xl border border-white/10 z-30"
                alt={`${bridgeProject.title} mobile`}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
            </div>
          </div>

          <div className="text-white space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Nos résultats parlent <br /> <span className="text-blue-400">plus fort que les mots.</span></h2>
            <p className="text-gray-400 text-lg font-light">Nous avons aidé des dizaines d'entrepreneurs à doubler leur vitesse de chargement et leur taux de conversion.</p>
            <Link href="/realisations" className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-black hover:scale-105 transition-transform">
              Explorer nos travaux <MousePointer2 size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FAQ + CONTACT REDIRECT --- */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Une question technique ?</h2>
              <p className="text-gray-500">Nous aimons la clarté. Voici quelques réponses rapides.</p>
            </div>

            <div className="space-y-4 mb-20">
              {[
                { q: "Quelles technologies utilisez-vous ?", a: "Principalement Next.js pour la performance, Shopify pour le e-commerce et WordPress pour la flexibilité éditoriale." },
                { q: "Combien coûte un site internet ?", a: "Chaque projet est unique. Nous travaillons sur devis pour nous adapter précisément à vos besoins réels." }
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-start gap-4 p-5 sm:p-6 md:p-8 text-left font-bold text-gray-900">
                    {f.q} {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-8 pb-8 text-gray-500 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CONTACT CTA CARD */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
              <div>
                <h4 className="text-2xl font-bold mb-2">Pas de réponse ici ?</h4>
                <p className="text-gray-500">Posez-nous votre question directement, on ne mord pas.</p>
              </div>
              <Link href="/contact" className="flex w-full sm:w-auto items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                <Mail size={20} /> Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      <CtaSection />
    </main>
  );
}
