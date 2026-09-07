"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  LayoutTemplate,
  ArrowRight,
  Check,
  HelpCircle,
  Send,
  Layers,
  PenLine,
  ShieldCheck,
  Timer,
  CreditCard,
  BadgeCheck,
  MessageSquareText,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";

type PricingItem = {
  id: string;
  label: string;
  price: string;
  suffix?: string;
  detail: string;
  features: string[];
  featured?: boolean;
};

type PricingCategory = {
  id: "custom" | "shopify" | "wordpress";
  title: string;
  tabLabel: string;
  subtitle: string;
  photo: string;
  icon: React.ReactNode;
  gradient: string;
  items: PricingItem[];
};

const pricingCategories: PricingCategory[] = [
  {
    id: "custom",
    title: "Site sur mesure (Next.js / React)",
    tabLabel: "Code sur mesure",
    subtitle:
      "Solutions entièrement développées à la main, sur-mesure pour votre projet.",
    photo: "/assets/services/service-custom.jpg",
    icon: <Code2 size={22} />,
    gradient: "from-blue-600 to-cyan-500",
    items: [
      {
        id: "custom-vitrine-basic",
        label: "Site vitrine (4 pages)",
        price: "150 €",
        suffix: " 200 €",
        detail:
          "Pour un site comportant les pages de base : Accueil, À propos, Contact et une page de présentation (services ou produits).",
        features: [
          "Design moderne et responsive",
          "4 pages incluses (Accueil, À propos, Contact, Présentation)",
          "Optimisation SEO de base",
          "Formulaire de contact",
        ],
      },
      {
        id: "custom-vitrine-plus",
        label: "Site vitrine (plus de 4 pages)",
        price: "200 €",
        suffix: " 400 €",
        detail:
          "Pour un site vitrine de plus de 4 pages. Le tarif varie selon le nombre de pages ajoutées.",
        features: [
          "Toutes les pages de base",
          "Pages supplémentaires facturées selon le nombre",
          "Design personnalisé",
          "Optimisation SEO avancée",
          "Univers graphique complet",
        ],
      },
      {
        id: "custom-ecommerce",
        label: "Site e-commerce sur mesure",
        price: "400 €",
        suffix: " 600 €",
        detail:
          "Pour une boutique en ligne entièrement codée sur mesure. Le tarif varie selon les fonctionnalités et le nombre de pages.",
        features: [
          "Boutique en ligne complète",
          "Paiement en ligne sécurisé",
          "Gestion des produits et des stocks",
          "Fonctionnalités selon vos besoins",
          "Nombre de pages à définir",
        ],
      },
      {
        id: "custom-saas",
        label: "Plateforme web SaaS / autre",
        price: "400 €",
        suffix: " 800 €",
        featured: true,
        detail:
          "Pour une plateforme web, une application SaaS ou tout autre type de plateforme. Le tarif varie selon la complexité et le nombre d'interfaces.",
        features: [
          "Plateforme web sur mesure",
          "Multiples interfaces utilisateurs",
          "Base de données et API",
          "Complexité et fonctionnalités selon le projet",
          "Accompagnement complet",
        ],
      },
    ],
  },
  {
    id: "shopify",
    title: "Boutique sur Shopify",
    tabLabel: "Shopify",
    subtitle:
      "Boutiques en ligne professionnelles sur la plateforme e-commerce Shopify.",
    photo: "/assets/services/service-shopify.jpg",
    icon: <ShoppingCart size={22} />,
    gradient: "from-green-600 to-emerald-500",
    items: [
      {
        id: "shopify-complete",
        label: "Site Shopify complet",
        price: "200 €",
        suffix: "+",
        featured: true,
        detail:
          "Pour un site complet avec les pages de base : Accueil, Produit, À propos et Contact. Le prix augmente selon le contenu et le nombre de produits.",
        features: [
          "Pages Accueil, Produit, À propos, Contact",
          "Mise en place de la boutique Shopify",
          "Ajout de produits",
          "Tarif selon contenus et produits",
        ],
      },
      {
        id: "shopify-minimal",
        label: "Site Shopify minimaliste",
        price: "80 €",
        suffix: " 150 €",
        detail:
          "Pour un site ne présentant que la page Produit avec la page d'Accueil : l'essentiel pour se lancer rapidement.",
        features: [
          "Page d'accueil + page produit (l'essentiel)",
          "Mise en place rapide",
          "Idéal pour démarrer",
        ],
      },
    ],
  },
  {
    id: "wordpress",
    title: "Site sur WordPress",
    tabLabel: "WordPress",
    subtitle:
      "Sites flexibles et faciles à administrer sur WordPress.",
    photo: "/assets/services/service-wordpress.jpg",
    icon: <LayoutTemplate size={22} />,
    gradient: "from-indigo-600 to-blue-500",
    items: [
      {
        id: "wp-ecommerce",
        label: "Site WordPress e-commerce",
        price: "200 €",
        suffix: " 400 €",
        detail:
          "Pour une boutique en ligne sur WordPress. Le tarif varie selon les pages à créer et les produits.",
        features: [
          "Boutique en ligne (WooCommerce)",
          "Pages selon vos besoins",
          "Gestion des produits",
          "Paiement en ligne",
        ],
      },
      {
        id: "wp-vitrine",
        label: "Site WordPress vitrine",
        price: "100 €",
        suffix: " 200 €",
        detail:
          "Pour un site vitrine sur WordPress. Le tarif varie selon les pages à créer.",
        features: [
          "Site vitrine professionnel",
          "Pages selon vos besoins",
          "Facile à administrer vous-même",
          "Design adapté à votre image",
        ],
      },
    ],
  },
];

function isRange(item: PricingItem) {
  return !!item.suffix && item.suffix !== "+";
}

function PricingCard({ item, index }: { item: PricingItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`relative flex flex-col rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 ${
        item.featured
          ? "border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl"
          : "border-gray-100 bg-white shadow-sm"
      }`}
    >
      {item.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
          Populaire
        </span>
      )}

      <h3 className="mb-3 text-lg font-bold text-gray-900">{item.label}</h3>

      {/* Prix affiché comme une fourchette claire */}
      <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
        <span
          className={`text-3xl font-black md:text-4xl ${
            item.featured ? "text-blue-600" : "text-gray-900"
          }`}
        >
          {item.price}
        </span>
        {item.suffix && item.suffix !== "+" && (
          <>
            <span
              className={`text-2xl font-bold ${
                item.featured ? "text-blue-400" : "text-gray-300"
              }`}
            >
              à
            </span>
            <span
              className={`text-3xl font-black md:text-4xl ${
                item.featured ? "text-blue-600" : "text-gray-900"
              }`}
            >
              {item.suffix}
            </span>
          </>
        )}
        {item.suffix === "+" && (
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-black text-blue-600">
            +
          </span>
        )}
      </div>
      <span className="mb-5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {isRange(item) ? "fourchette indicative du budget" : "tarif selon contenus & produits"}
      </span>

      <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
        {item.detail}
      </p>

      <ul className="mb-8 space-y-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
            <Check size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/devis"
        className={`group mt-auto flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-white transition-all ${
          item.featured
            ? "bg-blue-600 shadow-lg shadow-blue-600/25 hover:bg-blue-700"
            : "bg-gray-900 hover:bg-blue-600"
        }`}
      >
        Demander un devis gratuit
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

function DevisColumn({ gradient }: { gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 p-6 text-center md:p-8"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
      >
        <PenLine size={24} />
      </div>
      <h3 className="mb-2 text-lg font-black text-gray-900">
        Décrivez votre projet
      </h3>
      <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
        Répondez à quelques questions simples : nous vous préparons un devis
        précis et gratuit sous 24h.
      </p>
      <Link
        href="/devis"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700"
      >
        Faire une demande
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-600">
          <ShieldCheck size={12} /> Sans engagement
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          <Timer size={12} /> Réponse sous 24h
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-600">
          <BadgeCheck size={12} /> 100% gratuit
        </span>
      </div>
    </motion.div>
  );
}

const steps = [
  {
    icon: <MessageSquareText size={22} />,
    title: "Décrivez votre projet",
    text: "Répondez aux quelques questions du formulaire de devis : le type de site, vos besoins et votre idée.",
  },
  {
    icon: <Timer size={22} />,
    title: "Devis gratuit sous 24h",
    text: "Nous analysons votre demande et vous envoyons un devis précis, gratuit et sans engagement.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Nous développons",
    text: "Une fois validé, nous réalisons votre site avec des points d'avancement réguliers.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Mise en ligne & support",
    text: "Votre site est livré, mis en ligne et accompagné pendant et après la mise en service.",
  },
];

const trustItems = [
  {
    icon: <ShieldCheck size={18} />,
    label: "Devis gratuit & sans engagement",
  },
  {
    icon: <Timer size={18} />,
    label: "Réponse sous 24h",
  },
  {
    icon: <CreditCard size={18} />,
    label: "Paiement sécurisé",
  },
  {
    icon: <BadgeCheck size={18} />,
    label: "Accompagnement complet",
  },
];

function PricingCategoryBlock({ category }: { category: PricingCategory }) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="mb-8 flex items-center gap-4 md:mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
        >
          {category.icon}
        </motion.div>
        <img
          src={category.photo}
          alt={category.title}
          className="hidden h-16 w-16 rounded-2xl object-cover shadow-md sm:block"
        />
        <div>
          <h2 className="text-2xl font-black tracking-tight text-gray-900 md:text-3xl">
            {category.title}
          </h2>
          <p className="text-sm text-gray-500 md:text-base">{category.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, i) => (
          <PricingCard key={item.id} item={item} index={i} />
        ))}
        <DevisColumn gradient={category.gradient} />
      </div>
    </div>
  );
}

export default function TarifsPage() {
  const [activeTab, setActiveTab] = useState<PricingCategory["id"]>("custom");
  const activeCategory = pricingCategories.find((c) => c.id === activeTab)!;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO — photo bien visible */}
      <section className="relative overflow-hidden bg-gray-950 px-4 pb-24 pt-32 text-white sm:px-6 md:pb-32 md:pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/cta-setup.jpg"
            alt="Notre bureau de développement"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/30 to-gray-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 via-transparent to-gray-950/60" />
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-blue-400">
              Nos tarifs transparents
            </span>
            <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl">
              Des prix clairs, <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ajustés à votre projet.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-200">
              Chaque projet est unique. Voici nos fourchettes de tarifs pour vous
              donner un ordre d'idée. Pour un devis précis et gratuit,
              contactez-nous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TABS */}
      <section className="relative z-20 -mt-7 px-4 sm:px-6 md:-mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto flex max-w-2xl flex-col gap-3 rounded-[2rem] border border-gray-100 bg-white p-3 shadow-2xl sm:flex-row"
        >
          {pricingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all ${
                activeTab === cat.id
                  ? "bg-gray-900 text-white shadow-lg"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {cat.icon}
              <span>{cat.tabLabel}</span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* PRICING CONTAINER */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PricingCategoryBlock category={activeCategory} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ETAPES */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-center text-3xl font-black tracking-tight text-gray-900 md:text-4xl"
          >
            Comment se déroule votre projet ?
          </motion.h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
            Un processus simple et transparent, du premier échange à la mise en
            ligne.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-[2rem] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  {step.icon}
                </div>
                <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-blue-500">
                  Étape {i + 1}
                </span>
                <h3 className="mb-2 text-base font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-4 text-sm font-bold text-gray-700 shadow-sm"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {item.icon}
                </span>
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC PROJET INCERTAIN */}
      <section className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 text-white shadow-2xl md:p-14"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <HelpCircle size={24} className="text-blue-400" />
                </div>
                <h2 className="mb-3 text-2xl font-black tracking-tight md:text-3xl">
                  Vous ne savez pas où se situe votre projet ?
                </h2>
                <p className="text-gray-300">
                  Pas de panique ! Le tarif peut varier selon votre projet et ses
                  spécificités. Décrivez-nous votre besoin et nous vous préparons
                  un devis précis et gratuit sous 24h.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <Link
                  href="/devis"
                  className="group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-black text-white transition-all hover:bg-blue-700"
                >
                  <Send size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  Devis gratuit
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
                >
                  <Layers size={18} /> Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}