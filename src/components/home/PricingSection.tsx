"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, ShoppingCart, LayoutTemplate, HelpCircle, Send } from "lucide-react";

const pricingHighlights = [
  {
    title: "Code sur mesure",
    subtitle: "Next.js / React",
    icon: <Code2 size={22} />,
    gradient: "from-blue-600 to-cyan-500",
    from: "150 €",
    to: "800 €",
    desc: "Site vitrine, e-commerce ou plateforme SaaS entièrement développés sur mesure.",
  },
  {
    title: "Shopify",
    subtitle: "E-commerce",
    icon: <ShoppingCart size={22} />,
    gradient: "from-green-600 to-emerald-500",
    from: "80 €",
    to: "200 €+",
    desc: "Boutique en ligne professionnelle sur la plateforme Shopify.",
  },
  {
    title: "WordPress",
    subtitle: "Vitrine & e-commerce",
    icon: <LayoutTemplate size={22} />,
    gradient: "from-indigo-600 to-blue-500",
    from: "100 €",
    to: "400 €",
    desc: "Sites flexibles et faciles à administrer, vitrine ou boutique.",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-blue-600">
              Tarifs transparents
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
              Des prix clairs, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                adaptés à votre besoin.
              </span>
            </h2>
            <p className="mt-4 text-lg font-light text-gray-600">
              Des fourchettes indicatives pour vous situer. Chaque projet est
              chiffré précisément lors du devis gratuit.
            </p>
          </div>
          <Link
            href="/tarifs"
            className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-7 py-4 font-bold text-white transition-all hover:bg-blue-600"
          >
            Voir tous les tarifs
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link
                href="/tarifs"
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                >
                  {item.icon}
                </div>
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient}`}
                />
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                  {item.subtitle}
                </span>
                <h3 className="mb-4 text-2xl font-black text-gray-900">
                  {item.title}
                </h3>
                <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-3xl font-black text-blue-600">
                    {item.from}
                  </span>
                  <span className="text-xl font-bold text-gray-300">à</span>
                  <span className="text-3xl font-black text-blue-600">{item.to}</span>
                </div>
                <span className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Fourchette indicative du budget
                </span>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-600">
                  {item.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Voir le détail
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-gray-900 p-8 text-white md:px-12"
        >
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
                <HelpCircle size={24} className="text-blue-400" />
              </div>
              <div>
                <p className="text-lg font-black md:text-xl">
                  Vous ne savez pas où se situe votre projet ?
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  Obtenez un devis précis et gratuit sous 24h.
                </p>
              </div>
            </div>
            <Link
              href="/devis"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-black text-white transition-all hover:bg-blue-700"
            >
              Devis gratuit
              <Send
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}