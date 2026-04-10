"use client";

import { motion } from "framer-motion";

export default function TechCarousel() {
  const logos = [
    { name: "Next.js", src: "/assets/logos/nextjs.png" }, // Attention: assure-toi que ce logo est NOIR pour le fond blanc
    { name: "React", src: "/assets/logos/react.png" },
    { name: "Tailwind", src: "/assets/logos/tailwind.png" },
    { name: "Shopify", src: "/assets/logos/shopify.png" },
    { name: "WordPress", src: "/assets/logos/wordpress.png" },
    { name: "Node.js", src: "/assets/logos/node.png" },
    { name: "HTML5", src: "/assets/logos/html.png" },
    { name: "CSS3", src: "/assets/logos/css.png" },
    { name: "JavaScript", src: "/assets/logos/js.png" },
    { name: "Figma", src: "/assets/logos/figma.png" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white py-10 overflow-hidden relative z-20 border-b border-gray-100"
    >
      
      {/* Pas de titre ici, comme demandé */}

      <div className="relative w-full overflow-hidden">
        
        {/* ZONES DE FLOU (Gradients plus larges) */}
        {/* Gauche */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
        {/* Droite */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>

        {/* BANDE DÉFILANTE */}
        <div className="flex items-center gap-16 animate-scroll pl-6">
          {/* Première boucle */}
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[100px]">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
          {/* Deuxième boucle (Duplication pour effet infini) */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[100px]">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
