"use client";

import { useState, TouchEvent } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { homeShowcaseProjects } from "@/lib/portfolio";

export default function ProjectShowcase() {
  const projects = homeShowcaseProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  if (projects.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const getSlideStyle = (index: number) => {
    if (index === activeIndex) {
      return "scale-100 opacity-100 z-20 translate-x-0 lg:translate-y-0";
    }

    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    if (index === prevIndex) {
      return "scale-90 opacity-40 z-10 -translate-x-[15%] lg:translate-x-0 lg:-translate-y-[25%] blur-[2px]";
    }

    if (index === nextIndex) {
      return "scale-90 opacity-40 z-10 translate-x-[15%] lg:translate-x-0 lg:translate-y-[25%] blur-[2px]";
    }

    return "scale-75 opacity-0 z-0 hidden";
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-hidden bg-gray-50 py-14 md:py-24"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 md:gap-12">
        <div className="order-1 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
            Notre Expertise
          </h2>
          <h3 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Une approche hybride pour <br />
            <span className="text-blue-600">votre succes digital.</span>
          </h3>

          <div className="space-y-4 text-base font-light leading-relaxed text-gray-600 md:text-lg">
            <p>
              Nous construisons des experiences digitales sur mesure, en
              choisissant la meilleure pile entre code sur mesure, WordPress et
              Shopify selon le besoin du projet.
            </p>
            <p>
              Cette section affiche maintenant de vraies paires desktop et
              mobile, avec une logique identique a celle de tes captures.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            {["100% Responsive", "SEO optimise", "Admin simple", "Design unique"].map(
              (tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-green-500" />
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative order-2 flex h-[300px] w-full items-center justify-center sm:h-[350px] md:h-[400px] lg:h-[600px]">
          <div
            className="absolute inset-0 z-30 lg:hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />

          <button
            onClick={prevSlide}
            className="absolute left-1/2 top-0 z-40 hidden -translate-x-1/2 rounded-full border border-gray-100 bg-white p-3 text-gray-800 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 lg:flex"
          >
            <ChevronUp size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute bottom-0 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-gray-100 bg-white p-3 text-gray-800 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 lg:flex"
          >
            <ChevronDown size={24} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-2 z-40 flex rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-white lg:hidden"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 z-40 flex rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-white lg:hidden"
          >
            <ChevronRight size={20} />
          </button>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute w-[82%] cursor-pointer transition-all duration-700 ease-in-out sm:w-[74%] md:w-[70%] lg:w-[80%] ${getSlideStyle(index)}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
                  <div className="flex h-6 items-center gap-1 border-b bg-gray-100 px-3">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <img
                    src={project.desktopImage}
                    alt={`${project.title} version PC`}
                    className="h-[180px] w-full object-cover object-top sm:h-[220px] md:h-[300px] lg:h-[350px]"
                  />
                </div>

                <div className="absolute -bottom-4 right-0 z-20 w-[28%] overflow-hidden rounded-[15px] border-[3px] border-white bg-black shadow-2xl sm:-bottom-5 sm:-right-3 sm:w-[25%] md:-bottom-8 md:-right-8 md:rounded-[20px] md:border-[4px] lg:-bottom-10 lg:-right-5">
                  <div className="absolute left-1/2 top-0 z-10 h-3 w-1/2 -translate-x-1/2 rounded-b-md bg-black" />
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} version mobile`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className="order-3 col-span-1 mt-4 flex justify-center gap-2 lg:hidden">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
