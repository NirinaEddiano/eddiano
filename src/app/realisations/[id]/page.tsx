"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, CheckCircle2, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects } from "../page";

export default function DetailProjet() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="h-screen flex items-center justify-center">Chargement...</div>;

  return (
    <main className="bg-white selection:bg-blue-100">
      <Header />

      {/* --- HERO : TEXTE GAUCHE / PHOTO DROITE --- */}
      <section className="pt-40 pb-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <Link href="/realisations" className="group inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Retour Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">{project.title}</h1>
              <p className="text-xl text-gray-400 font-light max-w-lg">{project.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-[10px] font-bold uppercase text-white/60">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img src={project.image} alt={project.title} className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION DÉTAILS AVEC PARAGRAPHES --- */}
      <section className="py-32 space-y-48">
        <div className="container mx-auto px-6">
          
          {/* BLOC 1 : CONTEXTE & DÉFI (Image Droite) */}
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Target /></div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Le Contexte & Vision</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                <p>{project.context}</p>
                <p className="font-normal text-gray-900">"L'objectif n'était pas seulement de refaire un site, mais de repenser entièrement le parcours client pour éliminer toute friction."</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <img src={project.detailImg} className="rounded-[3rem] shadow-2xl border border-gray-100" alt="Work detail" />
            </motion.div>
          </div>

          {/* BLOC 2 : TECHNIQUE (Image Gauche - INVERSÉ) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:w-1/2 space-y-8">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center"><Zap /></div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Le Challenge Technique</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">{project.challenge}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {["Core Web Vitals 100", "Optimisation Mobile", "Headless Tech", "Zero Bloatware"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-gray-800">
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <img src={project.mobileImg} className="rounded-[3rem] shadow-2xl border border-gray-100 h-[500px] w-full object-cover" alt="Mobile version" />
            </motion.div>
          </div>

          {/* BLOC 3 : IMPACT (Plein Écran ou Centré) */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center space-y-10">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto"><TrendingUp size={32} /></div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Résultats & Impact Business</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                {project.impact}
              </p>
              <div className="pt-10">
                 <a href={project.linkView} target="_blank" className="inline-flex items-center gap-4 bg-gray-900 text-white px-12 py-5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl">
                    Voir le site live <Globe size={20} />
                 </a>
              </div>
          </motion.div>

        </div>
      </section>

      {/* --- SECTION AUTRES PROJETS (GRILLE DE 3) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        D'autres réalisations <ArrowRight size={24} className="text-blue-600"/>
                    </h3>
                    <p className="text-gray-500 mt-2">Explorez nos autres succès digitaux.</p>
                </div>
                <Link href="/realisations" className="text-sm font-bold text-blue-600 hover:underline">
                    Voir tout le portfolio
                </Link>
            </div>

            {/* Grille responsive : 1 col mobile, 2 ou 3 col desktop selon le nombre */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects
                  .filter(p => p.id !== id) // On cache le projet actuel
                  .slice(0, 3)              // On limite à 3 au cas où tu en aurais plus tard
                  .map((other, index) => (
                    <motion.div
                        key={other.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link 
                            href={`/realisations/${other.id}`} 
                            className="group block bg-white p-5 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Image avec ratio 16/10 constant */}
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                                <img 
                                    src={other.image} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    alt={other.title} 
                                />
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
                            </div>

                            {/* Contenu Texte */}
                            <div className="px-2">
                                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {other.title}
                                </h4>
                                <p className="text-gray-400 mt-1 font-light italic">
                                    {other.subtitle}
                                </p>
                                
                                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                    Découvrir le projet <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* Si tu n'as que 2 autres projets (comme actuellement), tu peux ajouter 
                    un petit bloc "Call to Action" pour remplir la 3ème colonne */}
                {projects.filter(p => p.id !== id).length < 3 && (
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="hidden lg:flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-2 border-dashed border-gray-200 text-center bg-gray-50/50"
                   >
                        <p className="text-gray-400 text-sm mb-4">Votre projet pourrait être le prochain ici.</p>
                        <Link href="/contact" className="text-blue-600 font-bold hover:underline">
                            Contactez-nous →
                        </Link>
                   </motion.div>
                )}
            </div>
        </div>
      </section>
    </main>
  );
}