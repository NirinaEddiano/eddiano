"use client";

import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Code2, 
  ShoppingCart, 
  LayoutTemplate,
  Globe
} from "lucide-react";
// 1. IMPORT DE FRAMER MOTION
import { motion } from "framer-motion";

export default function ServicesSection() {
  
  const services = [
    {
      id: "code",
      title: "Développement Sur-Mesure & Apps",
      subtitle: "Next.js • React • Node.js",
      description: "Pour les projets ambitieux qui ne rentrent dans aucune case. Nous développons des écosystèmes complets, ultra-rapides et sans aucune limite technique.",
      domains: ["Site Vitrine","SaaS & CRM", "E-Learning Complexe", "Marketplace", "App Mobile (React Native)"],
      features: [
        "Performance maximale (Core Web Vitals 100%)",
        "Applications Mobiles natives & PWA",
        "Architecture évolutive (Scalable)",
        "Sécurité avancée et API sur mesure"
      ],
      image: "/assets/services/service-code.jpg",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700 border-blue-600"
    },
    {
      id: "shopify",
      title: "E-Commerce Shopify Expert",
      subtitle: "Boutiques qui convertissent",
      description: "Ne soyez pas limité par un thème. Nous injectons du code sur-mesure même dans les thèmes gratuits pour créer une boutique unique qui reflète votre image de marque.",
      domains: ["Boutique en ligne", "Dropshipping & POD", "Site Vitrine","Migration", "Vente Internationale"],
      features: [
        "Design 100% sur mesure (Même sur thème gratuit)",
        "Création de sections personnalisées (Liquid/JS)",
        "Optimisation du taux de conversion (CRO)",
        "Connexion ERP & Logistique"
      ],
      image: "/assets/services/service-shopify.jpg",
      icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
      color: "bg-green-50 text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700 border-green-600"
    },
    {
      id: "wordpress",
      title: "Sites Vitrines & Éditoriaux",
      subtitle: "WordPress • CMS",
      description: "L'alliance parfaite entre un design premium et une gestion autonome. Idéal pour présenter votre activité, vos services ou gérer un média en ligne.",
      domains: ["Site Vitrine", "Portfolio", "Blog / Média", "Dropshipping (WooCommerce)"],
      features: [
        "Interface d'administration simplifiée",
        "Design unique (Pas de template vu et revu)",
        "Optimisation SEO native (Référencement)",
        "Formation à la gestion incluse"
      ],
      image: "/assets/services/service-wordpress.jpg",
      icon: <LayoutTemplate className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50 text-indigo-600",
      buttonColor: "bg-gray-900 hover:bg-black border-gray-900"
    }
  ];

  return (
    <section id="services" className="relative bg-white py-20 md:py-28 overflow-hidden">
      
      {/* --- EN-TÊTE ANIMÉ --- */}
      <div className="container mx-auto px-6 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Découvrez nos services.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Notre agence conçoit des solutions digitales élégantes et performantes. 
                Du <span className="text-blue-600 font-medium">Code pur</span> au <span className="text-green-600 font-medium">NoCode</span>, 
                nous choisissons la meilleure arme pour votre croissance.
            </p>
          </motion.div>
      </div>

      {/* ======================= LISTE DES CARTES ANIMÉES ======================= */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-24">
        {services.map((service, index) => {
            
            const isReverse = index % 2 !== 0;

            return (
                // 2. ON REMPLACE div PAR motion.div
                <motion.div 
                    key={index} 
                    className="w-full max-w-6xl mx-auto"
                    // Animation : Commence invisible et plus bas de 50px
                    initial={{ opacity: 0, y: 50 }}
                    // Quand visible : Devient opaque et remonte à sa place
                    whileInView={{ opacity: 1, y: 0 }}
                    // Options : Une seule fois, et démarre quand 20% de la carte est visible
                    viewport={{ once: true, margin: "-50px" }}
                    // Durée : 0.7s (assez lent pour être élégant)
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            
                            {/* CONTENU TEXTE */}
                            <div className={`p-8 md:p-12 flex flex-col justify-between order-2 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${service.color}`}>
                                        {service.icon}
                                        {service.subtitle}
                                    </div>
                                    
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-base mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.domains.map((domain, i) => (
                                            <span key={i} className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-md border border-gray-200">
                                                {domain}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0 text-blue-600">
                                                    <CheckCircle2 size={18} fill="#EFF6FF" />
                                                </div>
                                                <span className="text-sm text-gray-700 font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                    <Link
                                        href="/devis"
                                        className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white text-sm font-bold rounded-xl transition-transform hover:scale-[1.02] ${service.buttonColor}`}
                                    >
                                        <FileText size={18} />
                                        <span>Devis Gratuit</span>
                                    </Link>
                                    
                                    <Link
                                        href="/services"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 text-sm font-bold border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        <Globe size={18} />
                                        <span>Voir le Service</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className={`relative h-64 lg:h-full overflow-hidden bg-gray-100 order-1 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                </motion.div>
            );
        })}
      </div>

    </section>
  );
}
