"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { homepageReviews } from "@/lib/reviews";

export default function TestimonialsSection() {
  const reviews = homepageReviews;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.28em] text-emerald-700">
            Avis Clients
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Ils nous font confiance.
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-gray-500 md:text-lg">
            Les retours réels de nos clients, preuves à l'appui.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-950 p-2 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="mb-2 flex items-center gap-2 rounded-[1.2rem] bg-gray-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                <ShieldCheck size={16} className="text-emerald-400" />
                Témoignage client anonymisé
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={reviews[activeIndex].id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    src={reviews[activeIndex].image}
                    alt={`Avis ${activeIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </AnimatePresence>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1 flex flex-col justify-center lg:order-2"
          >
            <Quote size={52} className="mb-6 fill-emerald-50 text-emerald-100" />

            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[activeIndex].id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg font-medium leading-relaxed text-gray-800 sm:text-xl md:text-2xl">
                  "{reviews[activeIndex].text}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-lg font-bold text-white shadow-md">
                    C
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {reviews[activeIndex].author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Retour basé sur une conversation réelle
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-4">
              <button
                onClick={prevReview}
                className="group rounded-full border border-gray-200 p-4 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowLeft
                  size={24}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </button>
              <button
                onClick={nextReview}
                className="group rounded-full border border-gray-200 p-4 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
