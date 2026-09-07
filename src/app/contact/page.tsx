"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Globe, CheckCircle2, MessageSquare } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "Developpement Next.js",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const updateField = (
    field: keyof typeof initialFormData,
    value: string,
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));

    if (submitState) {
      setSubmitState(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitState({
        type: "error",
        message: "Merci de renseigner votre nom, votre email et votre message.",
      });

      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState(null);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error || "Impossible d'envoyer votre message pour le moment.",
        );
      }

      setSubmitState({
        type: "success",
        message: "Votre message a bien ete envoye. Nous revenons vers vous rapidement.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue pendant l'envoi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-20 md:pb-32 flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/contact/contact-hero.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Parlons de votre futur projet
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 md:mb-8">
              Prêt à passer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                au niveau supérieur ?
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              De l'idée au déploiement, nous sommes votre partenaire technique
              pour créer des produits digitaux qui marquent les esprits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 -mt-12 md:-mt-24 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="lg:w-1/3 space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4 lg:flex-col">
                <div className="flex-1 min-w-0 p-3 sm:p-6 md:p-8 bg-white rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-2 sm:space-y-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Mail size={16} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">Email Direct</h3>
                  <a
                    href="mailto:anoeddi84@gmail.com"
                    className="block text-xs sm:text-base text-blue-600 font-bold break-all hover:underline"
                  >
                    anoeddi84@gmail.com
                  </a>
                </div>

                <div className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-2xl space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center">
                    <MessageSquare size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">WhatsApp / Call</h3>
                  <a
                    href="https://wa.me/261334334846?text=Bonjour%20Niryva%2C%20j%27aimerais%20discuter%20d%27un%20projet%20web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base md:text-lg text-green-600 font-bold leading-snug hover:underline"
                  >
                    +261 33 43 348 46
                  </a>
                  <a
                    href="https://wa.me/261334334846?text=Bonjour%20Niryva%2C%20j%27aimerais%20discuter%20d%27un%20projet%20web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-green-600"
                  >
                    <MessageSquare size={14} /> Discuter sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative h-[220px] sm:h-[250px] shadow-2xl border border-gray-100">
                <img
                  src="/assets/contact/contact-office.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Office"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Globe size={14} className="text-blue-400" />
                    Worldwide Service
                  </p>
                  <p className="text-sm font-light">
                    Nous collaborons avec des clients partout dans le monde en
                    remote.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Ex: John Doe"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                      Email Professionnel
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                      Telephone (Optionnel)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="+33 6 . . ."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none placeholder:text-gray-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                      Type de projet
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={(event) => updateField("projectType", event.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer text-gray-600 font-medium"
                    >
                      <option>Developpement Next.js</option>
                      <option>E-commerce Shopify</option>
                      <option>Site Vitrine WordPress</option>
                      <option>Maintenance & Evolution</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                    Votre Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    rows={5}
                    placeholder="Decrivez brievement vos objectifs..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none placeholder:text-gray-300"
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 sm:px-10 md:px-12 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-black text-base sm:text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</span>
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>

                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                      <CheckCircle2 size={16} className="text-green-500" /> Audit
                      offert
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                      <CheckCircle2 size={16} className="text-green-500" /> Devis
                      24h
                    </div>
                  </div>
                </div>

                {submitState && (
                  <p
                    aria-live="polite"
                    className={`text-sm font-semibold ${
                      submitState.type === "success" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {submitState.message}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

