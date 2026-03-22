"use client";

import { useState, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ProjectShowcase() {
  // --- TES PHOTOS LOCALES ---
  const projects = [
    {
      id: 1,
      desktopImg: "/assets/projects/p1-pc.jpg", 
      mobileImg: "/assets/projects/p1-mobile.jpg",
    },
    {
      id: 2,
      desktopImg: "/assets/projects/p2-pc.jpg",
      mobileImg: "/assets/projects/p2-mobile.jpg",
    },
    {
      id: 3,
      desktopImg: "/assets/projects/p3-pc.jpg",
      mobileImg: "/assets/projects/p3-mobile.jpg",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // --- LOGIQUE SWIPE (Uniquement horizontal pour mobile) ---
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

  // --- LOGIQUE D'AFFICHAGE (Horizontal Mobile / Vertical Desktop) ---
  const getSlideStyle = (index: number) => {
    // 1. Si c'est la slide active
    if (index === activeIndex) {
      return "scale-100 opacity-100 z-20 translate-x-0 lg:translate-y-0";
    }
    
    const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    // 2. Si c'est la slide précédente
    if (index === prevIndex) {
      // Mobile: Gauche (-15%) | Desktop: Haut (-25% vertical, 0% horizontal)
      return "scale-90 opacity-40 z-10 -translate-x-[15%] lg:translate-x-0 lg:-translate-y-[25%] blur-[2px]"; 
    }

    // 3. Si c'est la slide suivante
    if (index === nextIndex) {
      // Mobile: Droite (15%) | Desktop: Bas (25% vertical, 0% horizontal)
      return "scale-90 opacity-40 z-10 translate-x-[15%] lg:translate-x-0 lg:translate-y-[25%] blur-[2px]"; 
    }
    
    // 4. Les autres (Cachées)
    return "scale-75 opacity-0 z-0 hidden";
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden"> 
      {/* Conteneur principal : Grid sur Desktop */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- COLONNE GAUCHE : TEXTE --- */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-1"> 
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
                Notre Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Une approche hybride pour <br/>
                <span className="text-blue-600">votre succès digital.</span>
            </h3>
            
            <div className="text-gray-600 text-lg leading-relaxed space-y-4 font-light">
                <p>
                    Nous ne nous contentons pas de "faire des sites". Nous construisons des écosystèmes digitaux sur-mesure. 
                    Que vous ayez besoin de la puissance brute du <strong className="text-gray-900 font-medium">Code (Next.js/React)</strong>, 
                    de la flexibilité de <strong className="text-gray-900 font-medium">WordPress</strong>, 
                    ou de la performance commerciale de <strong className="text-gray-900 font-medium">Shopify</strong>, nous maîtrisons chaque outil.
                </p>
                <p>
                    Site Vitrine, E-commerce, E-learning ou application métier : nous choisissons la technologie 
                    idéale pour votre croissance.
                </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                {["100% Responsive", "Optimisé SEO", "Admin Facile", "Design Unique"].map((tag) => (
                    <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {tag}
                    </span>
                ))}
            </div>
        </div>


        {/* --- COLONNE DROITE : CARROUSEL --- */}
        <div className="relative w-full h-[350px] md:h-[400px] lg:h-[600px] flex items-center justify-center order-2">
            
            {/* Zone tactile Mobile (Swipe Horizontal) */}
            <div 
                className="absolute inset-0 z-30 lg:hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            ></div>

            {/* --- NAVIGATION DESKTOP (Verticale : Haut / Bas) --- */}
            {/* Bouton PREV (Haut) */}
            <button 
                onClick={prevSlide}
                className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 z-40 bg-white p-3 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all text-gray-800"
            >
                <ChevronUp size={24} />
            </button>
            
            {/* Bouton NEXT (Bas) */}
            <button 
                onClick={nextSlide}
                className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-40 bg-white p-3 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all text-gray-800"
            >
                <ChevronDown size={24} />
            </button>

            {/* --- NAVIGATION MOBILE (Horizontale : Gauche / Droite) --- */}
            <button 
                onClick={prevSlide}
                className="flex lg:hidden absolute left-0 z-40 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white text-gray-800"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={nextSlide}
                className="flex lg:hidden absolute right-0 z-40 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white text-gray-800"
            >
                <ChevronRight size={20} />
            </button>


            {/* --- LES SLIDES --- */}
            {projects.map((project, index) => (
                <div 
                    key={project.id}
                    className={`absolute transition-all duration-700 ease-in-out w-[85%] md:w-[70%] lg:w-[80%] cursor-pointer ${getSlideStyle(index)}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="relative group">
                        
                        {/* 1. IMAGE PC */}
                        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                            <div className="h-6 bg-gray-100 border-b flex items-center gap-1 px-3">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <img 
                                src={project.desktopImg} 
                                alt="Version PC" 
                                className="w-full h-[220px] md:h-[300px] lg:h-[350px] object-cover object-top"
                            />
                        </div>

                        {/* 2. IMAGE MOBILE (Ajustée pour desktop vertical) */}
                        <div className="absolute -bottom-5 -right-3 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-5 w-[25%] rounded-[15px] md:rounded-[20px] border-[3px] md:border-[4px] border-white shadow-2xl overflow-hidden bg-black z-20">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-3 bg-black rounded-b-md z-10"></div>
                            <img 
                                src={project.mobileImg} 
                                alt="Version Mobile" 
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>
            ))}
        </div>
        
        {/* Pagination (Mobile seulement maintenant, car Desktop a les flèches haut/bas) */}
        <div className="flex lg:hidden justify-center gap-2 mt-4 col-span-1 order-3">
            {projects.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "w-8 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}