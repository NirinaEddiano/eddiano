"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";
import { portfolioProjects } from "@/lib/portfolio";

export default function RealisationsPage() {
  return (
    <main className="bg-white">
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-gray-900 md:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/assets/portfolio/portfolio-hero.jpg"
            alt="Hero realisations"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
              Etudes de cas
            </span>
            <h1 className="mb-6 text-4xl font-black leading-none tracking-tighter text-white sm:text-5xl md:mb-8 md:text-8xl">
              Toutes les <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                realisations.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-gray-300 md:text-xl">
              Découvrez nos réalisations en développement web, e-commerce et sites vitrines.
              Chaque projet illustre notre engagement pour l'excellence digitale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group flex flex-col"
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-4 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-50">
                    <div className="flex h-7 items-center gap-1 border-b bg-gray-100 px-3">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[calc(100%-1.75rem)] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-3 right-3 z-20 w-[28%] overflow-hidden rounded-[1.25rem] border-4 border-white bg-black shadow-2xl">
                    <div className="absolute left-1/2 top-0 z-10 h-3 w-1/2 -translate-x-1/2 rounded-b-md bg-black" />
                    <img
                      src={project.mobileImg}
                      alt={`${project.title} mobile`}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Link
                      href={`/realisations/${project.id}`}
                      className="rounded-full bg-white p-4 text-black shadow-xl transition-all hover:bg-blue-600 hover:text-white"
                    >
                      <Eye size={24} />
                    </Link>
                  </div>
                </div>

                <div className="px-1 text-center sm:px-2">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                    Projet {String(project.order).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-500">{project.subtitle}</p>
                  <p className="mb-5 text-sm text-gray-500 md:mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <Link
                      href={`/realisations/${project.id}`}
                      className="flex-1 rounded-2xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-600"
                    >
                      Voir details
                    </Link>
                    <a
                      href={project.linkView}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center rounded-2xl border border-gray-200 px-4 text-gray-400 transition-all hover:border-blue-600 hover:text-blue-600"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
