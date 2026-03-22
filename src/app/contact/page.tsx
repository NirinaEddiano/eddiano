"use client";

import { motion } from "framer-motion";
import { 
  Mail, Send, Globe, CheckCircle2, Phone, MessageSquare 
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* --- HERO SECTION : PHOTO SUR TOUTE LA HAUTEUR --- */}
      <section className="relative pt-38 pb-30 flex items-center bg-gray-900 text-white overflow-hidden">
        {/* IMAGE DE FOND (Z-0) */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/assets/contact/contact-hero.jpg" 
                alt="Contact Hero" 
                className="w-full h-full object-cover opacity-70" // Image bien visible
            />
            {/* VOILE SOMBRE LÉGER (Filtre sur toute l'image) */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* DÉGRADÉ SUBTIL UNIQUEMENT AU PIED (Pour fusionner avec la section suivante) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Parlons de votre futur projet
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                Prêt à passer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">au niveau supérieur ?</span>
            </h1>
            <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl">
              De l'idée au déploiement, nous sommes votre partenaire technique pour créer des produits digitaux qui marquent les esprits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION FORMULAIRE (Remonte sur le Hero) --- */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* GAUCHE : INFOS DE CONTACT */}
            <div className="lg:w-1/3 space-y-6">
              <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Email Direct</h3>
                <a href="mailto:contact@eddiano.dev" className="block text-blue-600 font-bold hover:underline">contact@eddiano.dev</a>
              </div>

              <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-4">
                <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">WhatsApp / Call</h3>
                <p className="text-gray-900 font-bold text-lg">+33 6 00 00 00 00</p>
              </div>

              <div className="p-8 rounded-[2.5rem] overflow-hidden relative h-[250px] shadow-2xl border border-gray-100">
                  <img src="/assets/contact/contact-office.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                      <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-2"><Globe size={14} className="text-blue-400"/> Worldwide Service</p>
                      <p className="text-sm font-light">Nous collaborons avec des clients partout dans le monde en remote.</p>
                  </div>
              </div>
            </div>

            {/* DROITE : FORMULAIRE (Bordures corrigées) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <form className="space-y-8">
                {/* GRILLE 2x2 SANS ESPACE VIDE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nom Complet</label>
                    <input type="text" placeholder="Ex: John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Professionnel</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Téléphone (Optionnel)</label>
                    <input type="tel" placeholder="+33 6 . . ." className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Type de projet</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer text-gray-600 font-medium">
                        <option>Développement Next.js</option>
                        <option>E-commerce Shopify</option>
                        <option>Site Vitrine WordPress</option>
                        <option>Maintenance & Evolution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Votre Message</label>
                  <textarea rows={5} placeholder="Décrivez brièvement vos objectifs..." className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none placeholder:text-gray-300"></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                    <button className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 group">
                        <span>Envoyer le message</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <div className="flex gap-8">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                            <CheckCircle2 size={16} className="text-green-500" /> Audit offert
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                            <CheckCircle2 size={16} className="text-green-500" /> Devis 24h
                        </div>
                    </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}