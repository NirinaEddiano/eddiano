"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { homePortfolioProjects } from "@/lib/portfolio";

export default function PortfolioSection() {
  const projects = homePortfolioProjects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(projects.length - itemsPerView, 0);
  const gap = 32;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.section
      id="realisations"
      initial={{ opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="overflow-hidden bg-gray-900 py-16 text-white md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center md:mb-12 md:flex-row md:items-end md:gap-8 md:text-left">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">
              Portfolio
            </h2>
            <h3 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              6 apercus desktop sur la page d accueil.
            </h3>
            <p className="text-base font-light text-gray-400 md:text-lg">
              Cette section affiche uniquement les versions PC. Les paires
              desktop/mobile sont reservees a la section expertise et a la page
              realisations.
            </p>
          </div>

          <div className="flex gap-3 md:gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`rounded-full border border-gray-700 p-3 transition-all md:p-4 ${
                currentIndex === 0
                  ? "cursor-not-allowed text-gray-600 opacity-50"
                  : "hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`rounded-full border border-gray-700 p-3 transition-all md:p-4 ${
                currentIndex === maxIndex
                  ? "cursor-not-allowed text-gray-600 opacity-50"
                  : "hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: `calc(-${currentIndex} * (100% / ${itemsPerView}) - ${
                currentIndex > 0 ? (currentIndex * gap) / itemsPerView : 0
              }px)`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "100%" }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[16/10] shrink-0 overflow-hidden rounded-2xl border border-gray-800"
                style={{
                  width:
                    itemsPerView === 1
                      ? "100%"
                      : `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-5 pr-20 md:p-8 md:pr-24">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                    Projet {String(project.order).padStart(2, "0")}
                  </p>
                  <h4 className="mb-2 text-xl font-bold leading-tight text-white md:text-2xl">
                    {project.title}
                  </h4>
                  <p className="mb-4 max-w-md text-sm text-gray-300 md:text-base">
                    {project.description}
                  </p>

                  <Link
                    href={`/realisations/${project.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-blue-400 group/btn"
                  >
                    <Layers size={18} />
                    <span>Details</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>

                <Link
                  href={project.linkView}
                  target="_blank"
                  className="absolute bottom-6 right-6 flex flex-col items-center gap-1 md:bottom-8 md:right-8"
                >
                  <div className="rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
                    <Eye size={24} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 transition-colors group-hover:text-white">
                    Voir
                  </span>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
