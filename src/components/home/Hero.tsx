"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, LayoutDashboard, Star } from "lucide-react";

export default function Hero() {
  const words = ["Next.js (Code)", "WordPress", "Shopify"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  const TechCard = ({
    title,
    sub,
    icon,
    colorClass,
    borderClass,
    isImage = false,
  }: {
    title: string;
    sub: string;
    icon: string;
    colorClass: string;
    borderClass: string;
    isImage?: boolean;
  }) => (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-xl border bg-gray-900/80 p-2 shadow-xl backdrop-blur-md md:flex-row md:justify-start md:gap-3 md:py-2 md:pl-2 md:pr-4 ${borderClass}`}
    >
      {isImage ? (
        <img
          src={icon}
          alt={title}
          className="h-6 w-6 object-contain drop-shadow-md md:h-10 md:w-10"
        />
      ) : (
        <div className="rounded-lg bg-blue-600/20 p-1 md:p-1.5">
          <Code2 className="h-4 w-4 text-blue-400 md:h-6 md:w-6" />
        </div>
      )}
      <div className="text-center md:text-left">
        <p className="mb-0.5 text-[9px] font-bold leading-none text-white md:text-xs">
          {title}
        </p>
        <p className={`${colorClass} font-mono text-[8px] leading-none md:text-[10px]`}>
          {sub}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gray-900 md:min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      <div className="absolute right-[15%] top-28 z-10 hidden animate-float-fast md:block">
        <TechCard
          title="E-Commerce"
          sub="Shopify Expert"
          icon="/assets/logos/shopify.png"
          colorClass="text-green-400"
          borderClass="border-white/10"
          isImage
        />
      </div>

      <div className="absolute bottom-24 left-[10%] z-10 hidden animate-float-medium md:block">
        <TechCard
          title="Site Vitrine"
          sub="WordPress Pro"
          icon="/assets/logos/wordpress.png"
          colorClass="text-blue-400"
          borderClass="border-white/10"
          isImage
        />
      </div>

      <div className="absolute bottom-32 right-[8%] z-10 hidden animate-float-slow md:block">
        <TechCard
          title="Sur Mesure"
          sub="Next.js / React"
          icon=""
          colorClass="text-gray-300"
          borderClass="border-l-4 border-l-blue-500 border-white/10"
        />
      </div>

      <div className="container relative z-20 mt-0 flex flex-grow flex-col items-center justify-center px-5 pb-10 pt-24 text-center md:pb-0 md:pt-0 sm:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-2xl backdrop-blur-md">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="h-6 w-6 rounded-full border border-gray-800"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="h-6 w-6 rounded-full border border-gray-800"
            />
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              alt="User"
              className="h-6 w-6 rounded-full border border-gray-800"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex text-[10px] text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={10} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        <h2 className="mb-6 animate-pulse text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          Developpement web sur mesure
        </h2>

        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:mb-8 md:text-6xl lg:text-7xl">
          Votre site web professionnel <br className="hidden md:block" />
          <span className="cursor-blink bg-gradient-to-r from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            {currentText}
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-sm font-light leading-relaxed text-gray-300 sm:text-base md:mb-10">
          Transformez votre vision en realite digitale. Solutions performantes,
          design moderne et conversion optimisee pour votre business.
        </p>

        <div className="mb-4 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/devis"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 sm:w-auto"
          >
            <span className="uppercase tracking-wide">Demander mon devis</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/realisations"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Nos Projets</span>
          </Link>
        </div>
      </div>

      <div className="relative z-30 mt-auto w-full px-3 pb-5 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <TechCard
            title="Shopify"
            sub="E-Commerce"
            icon="/assets/logos/shopify.png"
            colorClass="text-green-400"
            borderClass="border-white/10"
            isImage
          />
          <TechCard
            title="WordPress"
            sub="Vitrine"
            icon="/assets/logos/wordpress.png"
            colorClass="text-blue-400"
            borderClass="border-white/10"
            isImage
          />
          <TechCard
            title="Next.js"
            sub="Sur Mesure"
            icon=""
            colorClass="text-blue-300"
            borderClass="border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
