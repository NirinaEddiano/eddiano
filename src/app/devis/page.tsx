"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Layout, MessageSquare, Send, 
  ArrowRight, ArrowLeft, CheckCircle2, Code2, 
  ShoppingCart, LayoutTemplate, Globe, Zap, LifeBuoy, AlertCircle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "", projectName: "", serviceType: "", description: "", email: "", phone: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Nettoyer l'erreur quand l'utilisateur commence à taper
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // --- LOGIQUE DE VALIDATION JS ---
  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Le nom est obligatoire pour commencer.";
    }
    if (step === 3) {
      if (!formData.description.trim()) newErrors.description = "Dites-nous au moins quelques mots sur votre besoin.";
    }
    if (step === 4) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) newErrors.email = "L'adresse email est requise.";
      else if (!emailRegex.test(formData.email)) newErrors.email = "Format d'email invalide.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const stepInfo = [
    { title: "Identité", desc: "Commençons par faire connaissance.", icon: <User className="text-blue-500"/> },
    { title: "Technologie", desc: "Quelle solution vous attire ?", icon: <Layout className="text-blue-500"/> },
    { title: "Vision", desc: "Détaillez vos ambitions.", icon: <Briefcase className="text-blue-500"/> },
    { title: "Contact", desc: "Où vous envoyer le devis ?", icon: <Send className="text-blue-500"/> },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[55vh] mb-20 flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/assets/devis/devis-hero.jpg" alt="" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Configurons votre <span className="text-blue-400">succès.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Répondez à quelques questions pour obtenir un chiffrage précis sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
            
            {/* GAUCHE (SIDEBAR) */}
            <div className="lg:w-1/3 bg-gray-900 p-12 text-white flex flex-col justify-between">
                <div className="space-y-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Étape {step} / {totalSteps}</span>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-fit">{stepInfo[step-1].icon}</div>
                    <h2 className="text-3xl font-bold tracking-tight">{stepInfo[step-1].title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{stepInfo[step-1].desc}</p>
                </div>
                <div className="flex gap-2 pt-10">
                    {[1,2,3,4].map(i => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-blue-500' : 'bg-white/10'}`}></div>
                    ))}
                </div>
            </div>

            {/* DROITE (FORMULAIRE) */}
            <div className="lg:w-2/3 p-8 md:p-16 flex flex-col bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="flex-grow"
                  >
                    {step === 1 && (
                      <div className="space-y-10">
                        <h3 className="text-2xl font-bold text-gray-900">À qui avons-nous l'honneur ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-2">Votre Nom (Requis)</label>
                                <input 
                                    value={formData.name} onChange={(e) => updateData("name", e.target.value)} 
                                    className={`w-full px-6 py-4 bg-gray-50 border ${errors.name ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300'} rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none`} 
                                    placeholder="John Doe" 
                                />
                                {errors.name && <motion.p initial={{y:-5, opacity:0}} animate={{y:0, opacity:1}} className="text-red-500 text-[11px] font-bold flex items-center gap-1 ml-2"><AlertCircle size={12}/> {errors.name}</motion.p>}
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-2">Nom du Projet</label>
                                <input value={formData.projectName} onChange={(e) => updateData("projectName", e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl outline-none" placeholder="Ex: Ma Boutique" />
                            </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-10">
                        <h3 className="text-2xl font-bold text-gray-900">Quelle technologie préférez-vous ?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Next.js", icon: <Code2 /> },
                                { label: "Shopify", icon: <ShoppingCart /> },
                                { label: "WordPress", icon: <LayoutTemplate /> },
                                { label: "Aidez-moi", icon: <LifeBuoy /> }
                            ].map((s) => (
                                <button key={s.label} onClick={() => updateData("serviceType", s.label)} className={`p-6 rounded-2xl border-2 flex items-center gap-4 ${formData.serviceType === s.label ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-200"}`}>
                                    <div className={`p-2 rounded-lg ${formData.serviceType === s.label ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}>{s.icon}</div>
                                    <span className="font-bold text-gray-900 text-sm">{s.label}</span>
                                </button>
                            ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Décrivez votre besoin.</h3>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-2">Votre message (Requis)</label>
                        <textarea 
                            value={formData.description} onChange={(e) => updateData("description", e.target.value)} 
                            className={`w-full px-6 py-5 bg-gray-50 border ${errors.description ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300'} rounded-2xl resize-none outline-none`} 
                            rows={5} placeholder="Expliquez-nous brièvement..."
                        />
                        {errors.description && <p className="text-red-500 text-[11px] font-bold flex items-center gap-1 ml-2"><AlertCircle size={12}/> {errors.description}</p>}
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-10">
                        <h3 className="text-2xl font-bold text-gray-900">Où envoyer le devis ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-2">Email (Requis)</label>
                                <input 
                                    value={formData.email} onChange={(e) => updateData("email", e.target.value)} 
                                    className={`w-full px-6 py-4 bg-gray-50 border ${errors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-300'} rounded-2xl outline-none`} 
                                    placeholder="votre@email.com" 
                                />
                                {errors.email && <p className="text-red-500 text-[11px] font-bold flex items-center gap-1 ml-2"><AlertCircle size={12}/> {errors.email}</p>}
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-600 ml-2">WhatsApp / Tel</label>
                                <input value={formData.phone} onChange={(e) => updateData("phone", e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl outline-none" placeholder="+33 6 . . ." />
                            </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 pt-10 border-t border-gray-100 flex items-center justify-between">
                    <button onClick={prevStep} className={`font-bold text-gray-500 hover:text-gray-900 transition-colors ${step === 1 ? "opacity-0" : ""}`}>
                        <ArrowLeft size={18} className="inline mr-2" /> Précédent
                    </button>
                    <div className="flex flex-col items-end gap-3">
                        {step < totalSteps ? (
                            <button onClick={nextStep} className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-xl">
                                Continuer <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button onClick={validateStep} className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-gray-900 transition-all shadow-xl">
                                Finaliser la demande <Send size={18} className="inline ml-2" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}