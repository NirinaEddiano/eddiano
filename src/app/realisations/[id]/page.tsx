"use client";

import { use } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";

export default function DetailProjet({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = portfolioProjects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        Chargement...
      </div>
    );
  }

  return (
    <main className="bg-white selection:bg-blue-100">
      <section className="overflow-hidden bg-gray-900 pb-16 pt-28 text-white md:pb-24 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-10 lg:flex-row md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 md:space-y-8 lg:w-1/2"
            >
              <Link
                href="/realisations"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Retour portfolio
              </Link>
              <h1 className="text-3xl font-black leading-[0.95] tracking-tighter sm:text-4xl md:text-6xl md:leading-[0.9]">
                {project.title}
              </h1>
              <p className="max-w-lg text-lg font-light text-gray-400 md:text-xl">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold uppercase text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative lg:w-1/2"
            >
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-3xl" />
              <img
                src={project.image}
                alt={project.title}
                className="relative w-full rounded-[2.5rem] border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-24 py-20 md:space-y-48 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-10 lg:flex-row md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 lg:w-1/2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Target />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Le contexte
              </h2>
              <div className="space-y-5 text-base font-light leading-relaxed text-gray-600 md:space-y-6 md:text-lg">
                <p>{project.context}</p>
                <p className="font-normal text-gray-900">"{project.quote}"</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src={project.detailImg}
                className="rounded-[3rem] border border-gray-100 shadow-2xl"
                alt={`${project.title} desktop`}
              />
            </motion.div>
          </div>

          <div className="mt-24 flex flex-col items-center gap-10 lg:flex-row-reverse md:mt-32 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 lg:w-1/2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <Zap />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Le challenge technique
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-600">
                {project.challenge}
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                {project.challengePoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold text-gray-800"
                  >
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src={project.mobileImages}
                className="mx-auto max-h-[560px] w-full rounded-[3rem] border border-gray-100 bg-gray-100 object-contain object-top shadow-2xl"
                alt={`${project.title} mobile`}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-24 max-w-4xl space-y-8 pt-4 text-center md:mt-32 md:space-y-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-green-50 text-green-600">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 md:text-5xl">
              Résultats & impact
            </h2>
            <p className="text-xl font-light italic leading-relaxed text-gray-600">
              {project.impact}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-10 sm:flex-row sm:gap-6">
              <a
                href={project.linkView}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 font-bold text-gray-900 transition-all hover:border-blue-600 hover:text-blue-600 sm:w-auto sm:px-10 sm:py-5"
              >
                Voir le site <ExternalLink size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-4 rounded-full bg-gray-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-blue-600 sm:w-auto sm:px-12 sm:py-5"
              >
                Parler de ce projet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end md:gap-6">
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                D'autres réalisations{" "}
                <ArrowRight size={24} className="text-blue-600" />
              </h3>
              <p className="mt-2 text-gray-500">
                Découvrez d'autres projets signés par notre agence.
              </p>
            </div>
            <Link
              href="/realisations"
              className="text-sm font-bold text-blue-600 hover:underline"
            >
              Voir tout le portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {portfolioProjects
              .filter((other) => other.id !== id)
              .slice(0, 3)
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
                    className="group block rounded-[2rem] border border-gray-100 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[2.5rem] sm:p-5"
                  >
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-3xl">
                      <img
                        src={other.image}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={other.title}
                      />
                      <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-blue-600/10" />
                    </div>

                    <div className="px-2">
                      <h4 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                        {other.title}
                      </h4>
                      <p className="mt-1 font-light italic text-gray-400">
                        {other.subtitle}
                      </p>

                      <div className="mt-6 flex translate-x-[-10px] items-center gap-2 text-sm font-bold text-gray-900 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                        Découvrir le projet <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
