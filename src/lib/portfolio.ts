export type PortfolioProject = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImg: string;
  mobileImg: string;
  mobileImages: string;
  desktopImage: string;
  mobileImage: string;
  linkView: string;
  tags: string[];
  context: string;
  quote: string;
  challengePoints: string[];
  challenge: string;
  impact: string;
};

const screenshotFilenames = [
  "Screenshot 2026-04-10 143925.png",
  "Screenshot 2026-04-10 143943.png",
  "Screenshot 2026-04-10 144145.png",
  "Screenshot 2026-04-10 144156.png",
  "Screenshot 2026-04-10 144305.png",
  "Screenshot 2026-04-10 144335.png",
  "Screenshot 2026-04-10 144417.png",
  "Screenshot 2026-04-10 144436.png",
  "Screenshot 2026-04-10 144558.png",
  "Screenshot 2026-04-10 144657.png",
  "Screenshot 2026-04-10 144831.png",
  "Screenshot 2026-04-10 144851.png",
  "Screenshot 2026-04-10 145007.png",
  "Screenshot 2026-04-10 145025.png",
  "Screenshot 2026-04-10 145624.png",
  "Screenshot 2026-04-10 145642.png",
  "Screenshot 2026-04-10 145928.png",
  "Screenshot 2026-04-10 145956.png",
  "Screenshot 2026-04-10 150125.png",
  "Screenshot 2026-04-10 150208.png",
  "Screenshot 2026-04-10 150422.png",
  "Screenshot 2026-04-10 150437.png",
  "Screenshot 2026-04-10 150600.png",
  "Screenshot 2026-04-10 150614.png",
  "Screenshot 2026-04-10 151217.png",
  "Screenshot 2026-04-10 151239.png",
  "Screenshot 2026-04-10 151310.png",
  "Screenshot 2026-04-10 151330.png",
  "Screenshot 2026-04-10 151441.png",
  "Screenshot 2026-04-10 151503.png",
  "Screenshot 2026-04-10 151750.png",
  "Screenshot 2026-04-10 151810.png",
  "Screenshot 2026-04-10 152116.png",
  "Screenshot 2026-04-10 152138.png",
  "Screenshot 2026-04-10 152311.png",
  "Screenshot 2026-04-10 152321.png",
  "Screenshot 2026-04-10 152410.png",
  "Screenshot 2026-04-10 152427.png",
  "Screenshot 2026-04-10 152527.png",
  "Screenshot 2026-04-10 152540.png",
  "Screenshot 2026-04-10 152658.png",
  "Screenshot 2026-04-10 152724.png",
  "Screenshot 2026-04-10 152740.png",
  "Screenshot 2026-04-10 152805.png",
  "Screenshot 2026-04-10 152932.png",
  "Screenshot 2026-04-10 152947.png",
  "Screenshot 2026-04-10 153023.png",
  "Screenshot 2026-04-10 153037.png",
  "Screenshot 2026-04-10 153058.png",
  "Screenshot 2026-04-10 153110.png",
  "Screenshot 2026-04-10 153831.png",
  "Screenshot 2026-04-10 153853.png",
  "Screenshot 2026-04-19 114542.png",
  "Screenshot 2026-04-19 114553.png",
  "Screenshot 2026-04-19 120304.png",
  "Screenshot 2026-04-19 120314.png",
  "Screenshot 2026-04-19 121101.png",
  "Screenshot 2026-04-19 121110.png",
] as const;

const portfolioTags = [
  ["UI Design", "Responsive", "Desktop"],
  ["Mobile First", "Landing Page", "Conversion"],
  ["E-commerce", "Branding", "Showcase"],
  ["WordPress", "SEO", "Visual Refresh"],
  ["Next.js", "Performance", "Premium UI"],
  ["Site Web", "CRO", "Product Focus"],
] as const;

const createImagePath = (filename: string) =>
  `/assets/portfolio/${encodeURIComponent(filename)}`;

export const portfolioProjects: PortfolioProject[] = Array.from(
  { length: Math.floor(screenshotFilenames.length / 2) },
  (_, index) => {
    const desktopFilename = screenshotFilenames[index * 2];
    const mobileFilename = screenshotFilenames[index * 2 + 1];
    const projectNumber = String(index + 1).padStart(2, "0");
    const desktopImage = createImagePath(desktopFilename);
    const mobileImage = createImagePath(mobileFilename);

    // Update project 1 with SafePet details
    if (index === 0) {
      return {
        id: `safepet-jp`,
        order: index + 1,
        title: `SafePet Japan`,
        subtitle: `Site e-commerce pour produits animaux intelligents`,
        description: `Site e-commerce moderne pour SafePet Japan, spécialisé dans les litières automatiques pour chats, sèche-cheveux intelligents pour animaux et solutions de soin innovantes.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 143925.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-13 194856.png`,
        mobileImg: `/assets/portfolio/Screenshot 2026-04-10 143943.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-10 143925.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-10 143943.png`,
        linkView: `https://safepet-jp.com/`,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-13 195138.png`,
        tags: ["E-commerce", "Soins Animaux", "Produits Intelligents"],
        context: `SafePet Japan est une marque leader dans les produits de soin intelligent pour animaux, offrant des litières automatiques pour chats, des sèche-cheveux intelligents et d'autres solutions innovantes pour les propriétaires d'animaux modernes.`,
        quote: `Une boutique qui valorise des produits intelligents pour animaux avec une presentation claire, rassurante et orientee conversion.`,
        challengePoints: [
          "Parcours produit fluide",
          "Visuels lifestyle premium",
          "UX responsive",
          "Reassurance e-commerce",
        ],
        challenge: `Créer une expérience e-commerce moderne et conviviale qui met en valeur la sophistication technologique des produits tout en conservant une esthétique chaleureuse et adaptée aux animaux.`,
        impact: `Amélioration de la présence en ligne de SafePet Japan, meilleure expérience utilisateur pour les propriétaires d'animaux et augmentation des taux de conversion grâce à une présentation produit intuitive.`,
      };
    }

    if (index === 1) {
      return {
        id: `projet-02`,
        order: index + 1,
        title: `Ironiq UK`,
        subtitle: `Boutique e-commerce pour machine a repasser automatique`,
        description: `Site e-commerce centre sur Ironiq, une machine de repassage automatique mise en avant avec offres, bundles, FAQ, pages d'aide et argumentaires conversion.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 144145.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 063912.png`,
        mobileImg: `/assets/portfolio/Screenshot 2026-04-10 144156.png`,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 063948.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 063836.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 063854.png`,
        linkView: `https://air-ox-uk.myshopify.com/`,
        tags: ["Site Web", "E-commerce", "Produit Monoproduit"],
        context: `Ironiq UK presente une boutique e-commerce focalisee sur un produit hero: l'Automatic Ironing Machine. Le site structure la vente autour d'une promesse simple, repasser plus vite avec une experience hands-free, tout en rassurant l'utilisateur avec pages FAQ, shipping, returns, suivi de commande et accessoires complementaires.`,
        quote: `Le site insiste sur un message clair: gagner du temps, reduire l'effort quotidien et rendre le repassage plus simple avec un systeme automatique.`,
        challengePoints: [
          "Product page persuasive",
          "Bundles et cadeaux",
          "FAQ et reassurance",
          "Parcours d'achat clair",
        ],
        challenge: `Le travail produit repose sur une page de vente dense mais lisible: hero fort, prix promotionnel, packs multi-achats, preuves visuelles avant/apres, explication du fonctionnement en 4 etapes et fiches d'information utiles comme la livraison et les retours. Le tout doit rester fluide sur desktop comme sur mobile.`,
        impact: `Le site donne une lecture immediate de l'offre Ironiq: benefices du produit, compatibilite avec plusieurs types de vetements, fonctionnement en quelques minutes, argumentaire de confort d'usage et environnement e-commerce complet pour soutenir la conversion autour du produit principal et de ses accessoires.`,
      };
    }

    if (index === 2) {
      return {
        id: `projet-03`,
        order: index + 1,
        title: `JOVASI`,
        subtitle: `Défense instantanée face au danger`,
        description: `Boutique e-commerce monoproduit pour JOVASI, présentant une clé anti-agression électrique intégrant lampe, électrochoc et alarme.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 072139.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 072203.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 063836.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 063854.png`,
        linkView: `https://jjovasi.com/`,
        tags: ["Site Web", "E-commerce", "Sécurité"],
        context: `JOVASI propose une clé anti-agression électrique multifonction (lampe, électrochoc, alarme). Le site est conçu pour convertir rapidement avec une offre découverte à -50% et une présentation directe des bénéfices liés à la sécurité personnelle.`,
        quote: `Une approche directe et rassurante pour un produit de sécurité personnelle, avec une mise en avant claire de la promotion et des fonctionnalités de défense instantanée.`,
        challengePoints: [
          "Mise en avant de l'offre -50%",
          "Présentation des 3 fonctionnalités",
          "Design rassurant",
          "Conversion rapide"
        ],
        challenge: `Créer un site monoproduit impactant qui met en confiance l'utilisateur face à un produit sensible (sécurité personnelle), tout en facilitant l'achat via une forte promotion.`,
        impact: `Mise en place d'une boutique e-commerce optimisée pour la conversion avec un parcours d'achat simplifié pour la Clé Anti-Agression Électrique.`,
      };
    }

    if (index === 3) {
      return {
        id: `projet-04`,
        order: index + 1,
        title: `Whilp`,
        subtitle: `All-in-One Hairstyler pour des résultats de salon à domicile`,
        description: `Boutique e-commerce complète pour Whilp, ciblant le marché germanophone avec des outils de coiffure innovants comme le AirStyler et le Straithair Pro.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 144417.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 074327.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 074406.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 074327.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 074406.png`,
        linkView: `https://whilp.com/`,
        tags: ["Site Web", "Beauté & Soins", "E-commerce"],
        context: `Whilp propose des appareils de coiffure tout-en-un (AirStyler, Straithair Pro) destinés aux marchés allemand, autrichien et suisse. Le site est structuré pour mettre en avant l'efficacité du styling à la maison avec des descriptions précises, des bundles attractifs (eBook gratuit) et des garanties rassurantes comme la livraison gratuite et le paiement sur facture avec Klarna.`,
        quote: `Obtenez des résultats comme au salon de coiffure directement depuis chez vous, grâce à une technologie innovante sans chaleur extrême.`,
        challengePoints: [
          "Page produit très convaincante",
          "Mise en valeur des bénéfices sans chaleur extrême",
          "Design premium et élégant",
          "Optimisation pour le marché DACH"
        ],
        challenge: `Créer une expérience e-commerce qui transmet immédiatement la qualité premium d'un produit "high-ticket" tout en rassurant les clients avec une structure d'information limpide, des FAQ et des options de paiement flexibles.`,
        impact: `Lancement d'une plateforme robuste permettant de décliner toute une gamme de produits de soin capillaire (Go, Care Series, Snail) autour du produit phare, maximisant ainsi la conversion et la valeur client.`,
      };
    }

    if (index === 4) {
      return {
        id: `projet-05`,
        order: index + 1,
        title: `FittaBella`,
        subtitle: `Leggings thermoactifs 3D pour sculpter la silhouette`,
        description: `Boutique e-commerce ciblant le marché italien, spécialisée dans les vêtements minceur et shapewear avec technologie 3D brevetée.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 144558.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 075323.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 075346.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 075346.png`,
        mobileImage: mobileImage,
        linkView: `https://fittabella.com/`,
        tags: ["Site Web", "Shapewear", "E-commerce"],
        context: `FittaBella est une marque e-commerce italienne proposant des vêtements sculptants, notamment son produit phare : le Leggings Termoattivo 3D. Le site est structuré pour maximiser la confiance des visiteurs grâce à des essais cliniques mentionnés, des avis clients authentiques, une garantie satisfait ou remboursé de 30 jours et la livraison gratuite.`,
        quote: `Découvrez une technologie 3D brevetée qui réduit la cellulite à la racine, prouvée cliniquement avec des résultats en 30 jours.`,
        challengePoints: [
          "Mise en avant des bénéfices produit",
          "Preuve sociale forte (avis clients)",
          "Parcours d'achat optimisé",
          "Design rassurant et pro"
        ],
        challenge: `Créer une page produit convaincante pour un vêtement technique de bien-être, en expliquant clairement le fonctionnement de la technologie 3D tout en levant les freins à l'achat avec des garanties solides.`,
        impact: `Mise en place d'une boutique e-commerce performante sur le marché italien, avec une navigation fluide entre les gammes (leggings, brassières, patchs) et une page produit à très haut taux de conversion.`,
      };
    }

    if (index === 5) {
      return {
        id: `projet-06`,
        order: index + 1,
        title: `Numa`,
        subtitle: `Le masseur cervical 3-en-1 pour soulager les douleurs`,
        description: `Boutique e-commerce spécialisée dans le bien-être, proposant le CerviCalm®, un appareil thérapeutique avec une offre d'essai de 365 jours.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 080109.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 080136.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 080109.png`,
        mobileImage: mobileImage,
        linkView: `https://numaa-shop.com/`,
        tags: ["Site Web", "Bien-être", "E-commerce"],
        context: `Numa est une marque centrée sur le soulagement des douleurs cervicales avec son produit phare : CerviCalm. Le site est pensé pour convaincre une audience souffrant de douleurs chroniques, en s'appuyant sur des arguments thérapeutiques (chaleur, vibrations, traction) et une garantie d'essai d'un an totalement sans risque.`,
        quote: `Votre kiné à domicile. Soulagez vos douleurs naturellement en seulement 15 minutes par jour.`,
        challengePoints: [
          "Mise en avant des 3 technologies",
          "Offre irrésistible (Essai 365 jours)",
          "Preuve sociale et rassurance",
          "Upsells stratégiques (Guides)"
        ],
        challenge: `Bâtir une confiance absolue pour un produit de santé/bien-être, en structurant la page produit autour des douleurs réelles des utilisateurs et en offrant une garantie de remboursement sans condition pour lever tout frein à l'achat.`,
        impact: `Mise en ligne d'un tunnel de vente à haute conversion grâce à une offre claire (-50% + bonus), un copywriting percutant ciblant la douleur, et une expérience utilisateur fluide.`,
      };
    }

    if (index === 6) {
      return {
        id: `projet-07`,
        order: index + 1,
        title: `Soya Paris`,
        subtitle: `L'oreiller ergonomique pour un sommeil réparateur`,
        description: `Boutique e-commerce spécialisée dans la literie ergonomique, articulée autour de son best-seller l'Oreiller Soya 2.0.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 080554.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 080607.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 080554.png`,
        mobileImage: mobileImage,
        linkView: `https://jthphk-05.myshopify.com/`,
        tags: ["Site Web", "Literie", "E-commerce"],
        context: `Soya Paris se concentre sur le confort du sommeil en proposant des oreillers ergonomiques et des accessoires associés. La boutique met en valeur son produit phare, l'Oreiller Soya 2.0, tout en intégrant un écosystème de produits complémentaires (housses de rechange, coussins lombaires) pour enrichir l'offre.`,
        quote: `Un sommeil de qualité grâce à une ergonomie pensée pour vous, accompagnée d'accessoires sur mesure.`,
        challengePoints: [
          "Mise en avant du produit hero",
          "Upsell fluide (housses supplémentaires)",
          "Design épuré et apaisant",
          "Structure multi-produits cohérente"
        ],
        challenge: `Concevoir une boutique en ligne capable de vendre un produit principal fort tout en poussant efficacement des produits complémentaires (cross-selling) pour augmenter le panier moyen dès la première commande.`,
        impact: `Une plateforme de vente optimisée, augmentant le panier moyen grâce à des parcours utilisateurs pensés pour proposer naturellement des accessoires en complément de l'achat principal.`,
      };
    }

    if (index === 7) {
      return {
        id: `projet-08`,
        order: index + 1,
        title: `Silky Touch Paris`,
        subtitle: `Cheveux parfaits en moins de 5 minutes, où que vous soyez`,
        description: `Boutique e-commerce pour Silky Touch Paris, offrant la GoBrush PRO, une brosse lissante sans fil pensée pour un styling rapide.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 081132.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 081150.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 081132.png`,
        mobileImage: mobileImage,
        linkView: `https://www.silkytouchparis.com/products/perfect-hair-in-under-5-minutes-on-the-go`,
        tags: ["Site Web", "Beauté", "E-commerce"],
        context: `Silky Touch Paris cible les femmes modernes avec un emploi du temps chargé, proposant une brosse lissante chauffante sans fil (GoBrush PRO). Le site est structuré pour des ventes flash attractives (-50% et pochette en cuir offerte), tout en rassurant via une garantie satisfait ou remboursé de 30 jours et la livraison gratuite.`,
        quote: `Obtenez des résultats dignes d'un salon de coiffure en 5 minutes, où que vous soyez avec cet outil sans fil et compact.`,
        challengePoints: [
          "Proposition de valeur ultra-claire",
          "Preuve sociale forte (100k+ clientes)",
          "Offre agressive avec cadeaux",
          "Section FAQ anti-objections"
        ],
        challenge: `Créer une page de vente e-commerce hautement focalisée pour un produit innovant, en éliminant toutes les frictions d'achat grâce à des réponses précises (voyage en avion, types de cheveux) et une forte mise en avant des résultats avant/après.`,
        impact: `Une page produit dynamique et rassurante qui met en valeur la portabilité de l'appareil et convertit efficacement le trafic via des témoignages authentiques et visuels.`,
      };
    }

    if (index === 8) {
      return {
        id: `projet-09`,
        order: index + 1,
        title: `Aóuhra`,
        subtitle: `Lunettes anti-lumière bleue pour le travail profond et le sommeil`,
        description: `Boutique e-commerce premium spécialisée dans le biohacking et l'optimisation du sommeil avec des lunettes à verres rouges.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 081703.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 081719.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 081703.png`,
        mobileImage: mobileImage,
        linkView: `https://aouhra.com/`,
        tags: ["Site Web", "Biohacking", "E-commerce"],
        context: `Aóuhra se positionne sur le marché de l'optimisation du sommeil et du biohacking. La boutique met en avant les bénéfices cognitifs de ses lunettes à verres rouges (Flow State™), conçues pour réduire la fatigue oculaire et améliorer la qualité du sommeil. La stratégie intègre également la vente d'accessoires complémentaires comme des bouchons d'oreilles et des masques de nuit.`,
        quote: `Des lunettes à verres rouges pour un travail profond et un sommeil encore plus profond.`,
        challengePoints: [
          "Branding premium et scientifique",
          "Stratégie de bundles (cross-selling)",
          "Éducation du client sur le sommeil",
          "Design dark mode immersif"
        ],
        challenge: `Créer une expérience e-commerce immersive reflétant l'aspect technologique et scientifique du produit, tout en facilitant l'achat de packs complets pour augmenter le panier moyen.`,
        impact: `Une boutique au design affirmé qui éduque le consommateur sur l'hygiène du sommeil et convertit efficacement grâce à une proposition de valeur axée sur la performance et le bien-être.`,
      };
    }

    if (index === 9) {
      return {
        id: `projet-10`,
        order: index + 1,
        title: `DOYOO™ Hair & Beauty`,
        subtitle: `Next-Gen Beauty Devices & Premium Care`,
        description: `Boutique e-commerce premium pour DOYOO™, spécialisée dans les appareils de coiffure innovants et les solutions de soins capillaires.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 091226.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 091239.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 091226.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 091239.png`,
        linkView: `https://www.doyoo.shop`,
        tags: ["Site Web", "Beauté & Soins", "E-commerce"],
        context: `DOYOO™ développe des outils de beauté esthétiques et intelligents (AirPro 5in1, AirStraight 2in1) conçus pour faciliter le quotidien sans dommages liés à la chaleur extrême. La boutique met également en avant un pommeau de douche filtrant pour optimiser la qualité de l'eau, ciblant ainsi la santé globale de la peau et des cheveux.`,
        quote: `La technologie rencontre le Selfcare avec des appareils esthétiques qui rendent le quotidien plus intelligent, plus rapide et plus agréable.`,
        challengePoints: [
          "Mise en avant des bundles (No Bad Hair Days)",
          "Preuve sociale (71k+ clientes)",
          "Design premium et épuré",
          "Structure orientée conversion"
        ],
        challenge: `Construire une expérience de marque haut de gamme tout en gardant une forte approche e-commerce (conversion), en rassurant l'utilisateur avec des avis authentiques, des résultats visibles et des offres irrésistibles.`,
        impact: `Une boutique en ligne extrêmement performante qui valorise l'innovation technologique de la marque et booste le panier moyen grâce à des ventes croisées et des offres groupées stratégiques.`,
      };
    }

    if (index === 10) {
      return {
        id: `projet-11`,
        order: index + 1,
        title: `Oreiller Soya 3.0`,
        subtitle: `L'évolution ultime de l'oreiller ergonomique`,
        description: `Page produit dédiée au nouvel Oreiller Soya 3.0, mettant en avant ses innovations ergonomiques pour un sommeil réparateur et sans douleur.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 105847.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 105901.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 105847.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 105901.png`,
        linkView: `https://soya-paris.com/products/oreiller-soya-3-0`,
        tags: ["Site Web", "Literie", "Landing Page"],
        context: `Faisant suite au succès de la version 2.0 (plus de 100 000 dormeurs), Soya Paris lance son Oreiller Soya 3.0. La page est conçue pour présenter de manière convaincante les nouvelles caractéristiques : mousse intelligente 3.0, housse en fibre de bambou et hauteurs personnalisables, tout en offrant une période d'essai de 30 nuits.`,
        quote: `Un sommeil sans douleur renforcé grâce à une conception approuvée par plus de 200 professionnels de la santé.`,
        challengePoints: [
          "Mise en avant des 4 innovations majeures",
          "Preuve sociale forte (Avis, stats, experts)",
          "Offre d'essai de 30 nuits sans risque",
          "Design rassurant et ergonomique"
        ],
        challenge: `Créer une page produit extrêmement persuasive qui justifie la montée en gamme vers la version 3.0, en adressant directement les douleurs des utilisateurs (cervicales, migraines, posture, ronflements) et en s'appuyant sur des données cliniques et des avis clients authentiques.`,
        impact: `Lancement réussi du nouveau produit phare avec un taux de conversion maximisé grâce à un parcours utilisateur clair, une forte réassurance et un design premium centré sur les bénéfices santé.`,
      };
    }

    if (index === 11) {
      return {
        id: `projet-12`,
        order: index + 1,
        title: `Leonie & Co`,
        subtitle: `Leggings Anti-Cellulite 3D Drainants`,
        description: `Boutique e-commerce pour Leonie & Co, spécialisée dans les leggings sculptants intégrant une technologie 3D pour galber et raffermir la silhouette.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 110305.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 110328.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 110305.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 110328.png`,
        linkView: `https://leonieandco.fr`,
        tags: ["Site Web", "Mode & Beauté", "E-commerce"],
        context: `Leonie & Co propose une approche innovante du vêtement de sport et de bien-être avec son legging phare anti-cellulite. La boutique est structurée pour mettre en évidence les bénéfices clés (technologie 3D drainante, compression douce, effet push-up) et inclut également des sous-vêtements techniques complémentaires (tangas invisibles).`,
        quote: `Le legging qui sublime vos courbes et booste votre confiance, alliant confort absolu et technologie sculptante.`,
        challengePoints: [
          "Mise en avant des bénéfices (Drainage, Push-up)",
          "Présentation de la large gamme de couleurs",
          "Preuve sociale (>20 000 clientes)",
          "Offres promotionnelles attractives"
        ],
        challenge: `Créer une expérience e-commerce visuelle et persuasive qui éduque les clientes sur la technologie 3D du tissu tout en valorisant l'aspect esthétique et mode des produits.`,
        impact: `Une boutique élégante et hautement conversionnelle qui s'appuie sur des offres ciblées, des avis rassurants et des visuels produits percutants pour maximiser les ventes.`,
      };
    }

    if (index === 12) {
      return {
        id: `projet-13`,
        order: index + 1,
        title: `ThermaFits`,
        subtitle: `ThermaBoots™ Fleeced Waterproof Boots`,
        description: `Boutique e-commerce pour ThermaFits, proposant des bottes d'hiver haut de gamme, imperméables et doublées en polaire pour affronter le froid.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 110831.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 110844.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 110831.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 110844.png`,
        linkView: `https://thermafits.com/products/thermaboots-fleeced-waterproof-boots`,
        tags: ["Site Web", "Chaussures", "E-commerce"],
        context: `ThermaFits résout le problème des pieds froids et mouillés avec les ThermaBoots™, des bottes 100% imperméables dotées d'une doublure en polaire chaude, d'une semelle antidérapante et d'une conception unisexe facile à enfiler. Le site cible particulièrement le marché britannique (UK) en s'appuyant sur les besoins liés à la météo pluvieuse.`,
        quote: `Conçu pour le froid, construit pour vous permettre de bouger. Une chaleur garantie toute la journée sans compromis.`,
        challengePoints: [
          "Mise en avant des 4 bénéfices principaux (Chaleur, Facilité d'enfilage, Support, Unisexe)",
          "Offre promotionnelle (Buy 1 get 1 50% off)",
          "Preuve sociale avec des avis clients",
          "Garantie satisfait ou remboursé de 30 jours"
        ],
        challenge: `Créer une page produit convaincante qui met en valeur la fonctionnalité (protection météo) tout en conservant un attrait lifestyle, en éliminant les freins à l'achat via des garanties solides et des témoignages.`,
        impact: `Une page de vente optimisée qui transforme le besoin de chaussures d'hiver en un achat fluide grâce à des offres claires et un copywriting ciblant directement les douleurs des clients.`,
      };
    }

    if (index === 13) {
      return {
        id: `projet-14`,
        order: index + 1,
        title: `PSX Revive`,
        subtitle: `Playstation® Portable 3000 Moddée`,
        description: `Boutique e-commerce spécialisée dans le retrogaming, mettant en avant une PSP 3000 remise à neuf contenant plus de 20 000 jeux classiques.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 111255.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 111311.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 111255.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 111311.png`,
        linkView: `https://psxrevive.store/products/playstation%C2%AE-portable`,
        tags: ["Site Web", "Gaming Rétro", "E-commerce"],
        context: `PSX Revive propose une solution clé en main pour les passionnés de retrogaming : une console PSP 3000 moddée. Livrée prête à jouer avec une nouvelle batterie et une carte mémoire préchargée de plus de 20 000 jeux (couvrant plus de 30 consoles), elle offre une expérience hors ligne complète.`,
        quote: `Plus de puissance, plus de nostalgie. Accédez à vos jeux rétro préférés instantanément, où que vous soyez et sans connexion internet.`,
        challengePoints: [
          "Mise en évidence de la valeur (20k+ jeux, prêt à jouer)",
          "Preuve sociale via les témoignages authentiques",
          "Cross-selling stratégique d'accessoires (coques, grips)",
          "Garanties fortes (30 jours, expédition mondiale gratuite)"
        ],
        challenge: `Créer une page de vente de confiance pour un produit technique (console modifiée), en rassurant l'acheteur sur la qualité du matériel et la simplicité d'utilisation grâce à une communication transparente.`,
        impact: `Une boutique en ligne performante qui séduit une audience nostalgique grâce à une offre irrésistible, des réassurances solides et une optimisation du panier moyen via les accessoires.`,
      };
    }

    if (index === 14) {
      return {
        id: `projet-15`,
        order: index + 1,
        title: `LeiShape`,
        subtitle: `Thermal Sculpting Smoothing Leggings`,
        description: `Boutique e-commerce axée sur le marché italien, spécialisée dans les collants thermiques innovants à effet seconde peau.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 111925.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 111943.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 111925.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 111943.png`,
        linkView: `https://leishape.com/products/leggings-termici-modellanti-leviganti?variant=57050501054851`,
        tags: ["Site Web", "Mode & Beauté", "E-commerce"],
        context: `LeiShape propose une révolution pour la garde-robe hivernale avec ses leggings thermiques "effetto pelle nuda". La page produit est conçue pour dissiper toutes les objections : elle met en avant l'indestructibilité du produit, l'effet ventre plat, le lissage de la cellulite et l'effet push-up sur les fessiers, sans "effet couche".`,
        quote: `Sexy même en hiver. Les premiers leggings thermiques au monde qui font tout : jambes nues parfaites, taille fine et chaleur enveloppante.`,
        challengePoints: [
          "Mise en évidence des bénéfices (Ventre plat, Push-up, Chaleur)",
          "Utilisation intensive de la preuve sociale (10 500+ avis)",
          "Section FAQ ultra-détaillée anti-objections",
          "Garanties massives (Anti-déchirure à vie, 100 jours d'essai)"
        ],
        challenge: `Créer une page de vente hautement persuasive qui justifie un prix premium par rapport aux collants classiques, en répondant directement aux douleurs des clientes (froid, déchirures fréquentes, effet inesthétique) pour booster les conversions.`,
        impact: `Une page produit extrêmement performante qui transforme une nécessité hivernale en un achat mode indispensable grâce à un copywriting agressif et une forte rassurance.`,
      };
    }

    if (index === 15) {
      return {
        id: `projet-16`,
        order: index + 1,
        title: `NutriPour`,
        subtitle: `8-in-1 Nut Milk & Juice Maker`,
        description: `Boutique e-commerce pour un appareil de cuisine innovant, permettant de réaliser facilement ses propres laits végétaux et jus frais sans additifs.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 112413.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 112431.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 112413.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 112431.png`,
        linkView: `https://mycocohair.com/products/nutripour-the-8-in-1-multifunction-nut-milk-juice-maker`,
        tags: ["Site Web", "Cuisine & Santé", "E-commerce"],
        context: `NutriPour cible le marché du bien-être et de l'alimentation saine avec un appareil multifonction (8-en-1). La page de vente s'appuie sur la frustration des consommateurs face aux conservateurs et aux prix élevés des laits végétaux en magasin, en proposant une solution économique, saine et facile à utiliser (fonction d'auto-nettoyage incluse).`,
        quote: `Économisez de l'argent et protégez votre santé intestinale avec chaque verre délicieux, sans conservateurs ni additifs.`,
        challengePoints: [
          "Démonstration claire des bénéfices (Économies, Santé, Facilité)",
          "Mise en valeur des caractéristiques (8-en-1, Auto-nettoyage)",
          "Preuve sociale importante via des cas d'usage quotidiens",
          "Offre irrésistible (Livre de recettes gratuit, Garantie 30 jours)"
        ],
        challenge: `Construire une landing page éducative et persuasive qui justifie l'investissement dans un appareil de cuisine spécialisé en démontrant le retour sur investissement rapide et les avantages immédiats pour la santé.`,
        impact: `Une page produit très convaincante qui transforme l'appareil NutriPour en un indispensable de la cuisine moderne pour les foyers soucieux de leur alimentation.`,
      };
    }

    if (index === 16) {
      return {
        id: `projet-17`,
        order: index + 1,
        title: `Nesti`,
        subtitle: `Adults Compression Pod - A Calming Hug for Bedtime`,
        description: `Boutique e-commerce pour Nesti, un cocon de compression sensorielle conçu pour soulager l'anxiété et favoriser un sommeil réparateur.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 152116.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 113212.png`,
        mobileImg: `/assets/portfolio/Screenshot 2026-04-10 152138.png`,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 113227.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 113212.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 113227.png`,
        linkView: `https://nestishop.com/products/nesti-compression-pod-adults`,
        tags: ["Site Web", "Bien-être", "E-commerce"],
        context: `Nesti s'adresse aux adultes souffrant de troubles du sommeil, d'anxiété ou de surcharge sensorielle. Le site met en avant une solution naturelle basée sur la thérapie par pression profonde (Deep Touch Pressure). La page produit s'articule autour des bienfaits du cocon (sommeil, relaxation, voyage) et intègre des éléments de comparaison avec les couvertures lestées traditionnelles pour souligner ses avantages.`,
        quote: `Endormez-vous plus vite, restez endormi plus longtemps. Une sensation de calme instantané grâce à une compression douce.`,
        challengePoints: [
          "Mise en évidence des bienfaits scientifiques (DTP)",
          "Comparatif clair (Nesti vs Couvertures lestées)",
          "Preuve sociale forte (Avis clients et cas d'usage)",
          "Section FAQ pour dissiper les objections (Chaleur, Claustrophobie)"
        ],
        challenge: `Concevoir une page produit apaisante et éducative qui explique simplement le concept de thérapie par pression profonde, tout en rassurant les utilisateurs sur le confort thermique et la liberté de mouvement.`,
        impact: `Une page de vente hautement optimisée qui éduque le consommateur sur les alternatives non médicamenteuses pour le sommeil et convertit efficacement grâce à une proposition de valeur claire et rassurante.`,
      };
    }

    if (index === 17) {
      return {
        id: `projet-18`,
        order: index + 1,
        title: `Don Camera`,
        subtitle: `Digital Film Camera - L'expérience rétro sans les contraintes`,
        description: `Boutique e-commerce pour Don Camera, la première caméra de développement numérique offrant un rendu vintage, des photos illimitées et aucun frais de développement.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 113729.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 113742.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 113729.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 113742.png`,
        linkView: `https://doncamera.com/products/digifil-retrocam`,
        tags: ["Site Web", "Photographie", "E-commerce"],
        context: `Don Camera se positionne comme l'alternative ultime aux appareils photo jetables. Le site s'adresse aux passionnés de photographie nostalgiques en leur offrant le même fini vintage, mais sans écran pour conserver la surprise du développement et sans frais récurrents.`,
        quote: `Ne perdez plus d'argent avec des appareils jetables. Une caméra réutilisable, des photos illimitées et un développement gratuit directement sur votre téléphone.`,
        challengePoints: [
          "Proposition de valeur claire (Fini rétro, pas de frais)",
          "Explication du concept sans écran (Authenticité)",
          "Mise en avant du transfert digital vers le smartphone",
          "Offres promotionnelles (2ème à -20%, Pack lancement)"
        ],
        challenge: `Créer une landing page attrayante qui éduque le consommateur sur cette nouvelle façon de prendre des photos (sans voir le résultat immédiatement) tout en soulignant les avantages économiques par rapport aux jetables.`,
        impact: `Une boutique e-commerce immersive qui génère de la confiance et convertit efficacement grâce à une démonstration claire des bénéfices et une forte rassurance (garantie 30 jours, expédition rapide).`,
      };
    }

    if (index === 18) {
      return {
        id: `projet-19`,
        order: index + 1,
        title: `LumiBeam™`,
        subtitle: `Portable Projector - Immersive 130" Big Screen Anywhere`,
        description: `Boutique e-commerce pour LumiBeam™, un vidéoprojecteur portable intelligent offrant une qualité HD, un pied rotatif à 180° et Android TV intégré.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 114157.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 114207.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 114157.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 114207.png`,
        linkView: `https://trylumiibeam.com/products/lumibeam%E2%84%A2-portable-projector`,
        tags: ["Site Web", "High-Tech", "E-commerce"],
        context: `LumiBeam™ propose un projecteur compact et performant conçu pour remplacer les télévisions et écrans de gaming encombrants. Le site met en valeur la polyvalence de l'appareil (films, gaming, ambiances relaxantes) avec une configuration instantanée grâce à l'autocorrection trapézoïdale (Auto Keystone) et Android TV intégré.`,
        quote: `Transformez n'importe quel mur ou plafond en un écran géant époustouflant. Une véritable expérience cinématographique en quelques secondes.`,
        challengePoints: [
          "Mise en évidence des atouts technologiques (HD, Auto-correction)",
          "Offre irrésistible avec bundles (6 cadeaux gratuits inclus)",
          "Comparaison forte (LumiBeam vs Imitations)",
          "Preuve de polyvalence (Films, Gaming, Ambiances)"
        ],
        challenge: `Créer une landing page dynamique et très visuelle qui justifie l'investissement en démontrant que ce projecteur remplace plusieurs appareils (TV, lumières d'ambiance), tout en rassurant l'acheteur face aux contrefaçons grâce à une garantie forte et une présentation premium.`,
        impact: `Une boutique e-commerce performante et persuasive qui transforme un achat tech en une expérience lifestyle indispensable, avec un taux de conversion maximisé grâce à des offres groupées agressives (packs gratuits).`,
      };
    }

    if (index === 19) {
      return {
        id: `projet-20`,
        order: index + 1,
        title: `TrueFords`,
        subtitle: `Non-Iron Shirt - Engineered for Confidence`,
        description: `Boutique e-commerce pour TrueFords, une marque de chemises innovantes infroissables combinant l'élégance du coton avec un tissu technique ultra-extensible.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 114542.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 114553.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 114542.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 114553.png`,
        linkView: `https://trylumiibeam.com/products/truefords-non-iron-shirt`,
        tags: ["Site Web", "Mode Homme", "E-commerce"],
        context: `TrueFords propose une chemise révolutionnaire pour les professionnels masculins. Fabriquée avec le tissu breveté TrueMotion™, elle ne nécessite aucun repassage, offre une coupe athlétique flatteuse et garantit une respirabilité optimale. Le site cible la douleur liée au temps perdu à repasser.`,
        quote: `Ne repassez plus jamais. La chemise qui reste parfaitement lisse, nette et confortable du matin jusqu'au soir.`,
        challengePoints: [
          "Mise en évidence de la promesse (Zéro repassage, Gain de temps)",
          "Preuve sociale massive (+22 000 avis clients)",
          "Démonstration de la technologie TrueMotion™",
          "Section F.A.Q détaillée et guide des tailles"
        ],
        challenge: `Créer une landing page très persuasive qui justifie un prix premium en démontrant la valeur du temps gagné, tout en rassurant via des témoignages authentiques et une forte identité visuelle professionnelle.`,
        impact: `Une boutique e-commerce à très forte conversion qui adresse parfaitement les points de douleur d'une cible masculine professionnelle, transformant une commodité en un produit hautement désirable.`,
      };
    }

    if (index === 21) {
      return {
        id: `projet-22`,
        order: index + 1,
        title: `Maison Corval`,
        subtitle: `Corval Wallet 2.0 - Le portefeuille intelligent`,
        description: `Boutique e-commerce pour le Corval Wallet 2.0, un portefeuille compact, élégant et sécurisé avec protection RFID et accès instantané aux cartes.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 120304.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 120314.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 120304.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 120314.png`,
        linkView: `https://maisoncorval.com/products/corval-wallet-2-0`,
        tags: ["Site Web", "Accessoires", "E-commerce"],
        context: `Maison Corval propose un portefeuille premium (cuir vegan et aluminium) pensé pour simplifier le quotidien. Il permet de stocker jusqu'à 11 cartes, avec une protection RFID contre le vol de données. Le site met en avant la praticité (mécanisme "Flip"), l'élégance et la sécurité.`,
        quote: `L'accès instantané à vos cartes d'une simple pression, dans un format ultra-fin et discret.`,
        challengePoints: [
          "Mise en avant des fonctionnalités (Protection RFID, Flip)",
          "Design épuré reflétant l'élégance du produit",
          "Rassurance via avis clients et FAQ détaillée",
          "Présentation claire des capacités de rangement"
        ],
        challenge: `Créer une page produit convaincante qui démontre visuellement la facilité d'utilisation et la sécurité du portefeuille, tout en justifiant son positionnement premium par ses matériaux.`,
        impact: `Un site e-commerce qui valorise le produit avec succès, transformant un accessoire du quotidien en un indispensable élégant et technologique.`,
      };
    }

    if (index === 22) {
      return {
        id: `projet-23`,
        order: index + 1,
        title: `Steameo`,
        subtitle: `Nettoyeur à vapeur sans produits chimiques`,
        description: `Boutique e-commerce pour Steameo, un nettoyeur vapeur polyvalent qui élimine 99,9% des bactéries pour une maison saine, sans produits toxiques.`,
        image: desktopImage,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 121101.png`,
        mobileImg: mobileImage,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 121110.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 121101.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 121110.png`,
        linkView: `https://steameo.co/`,
        tags: ["Site Web", "Maison & Entretien", "E-commerce"],
        context: `Steameo est un appareil ménager puissant conçu pour remplacer tous les produits d'entretien chimiques. Le site met en avant la facilité d'utilisation, le gain de temps et la sécurité pour la santé (idéal pour enfants et animaux).`,
        quote: `Un seul appareil pour nettoyer toute votre maison 3x plus vite, sans frotter, sans produits toxiques.`,
        challengePoints: [
          "Mise en avant des bénéfices santé (sans chimie, anti-allergène)",
          "Démonstration de polyvalence avec 9 accessoires",
          "Preuve sociale forte (+1400 avis détaillés)",
          "Offre irrésistible et garantie 30 jours"
        ],
        challenge: `Concevoir une landing page qui éduque sur les dangers des produits ménagers classiques tout en démontrant l'efficacité de la vapeur via des témoignages et des bénéfices clairs.`,
        impact: `Un site e-commerce très persuasif qui adresse des points de douleur profonds (temps, santé, effort) avec une solution unique, maximisant ainsi le taux de conversion et la confiance.`,
      };
    }

    if (index === 24) {
      return {
        id: `projet-25`,
        order: index + 1,
        title: `Cleenovia`,
        subtitle: `VitaMixia - Macchina Multifunzione 8-in-1`,
        description: `Boutique e-commerce italienne pour Cleenovia, proposant VitaMixia, une machine multifonction 8-en-1 pour réaliser des laits végétaux frais, soupes et smoothies.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 153058.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 121857.png`,
        mobileImg: `/assets/portfolio/Screenshot 2026-04-10 153110.png`,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 121857.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 121843.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 121857.png`,
        linkView: `https://cleenovia.com`,
        tags: ["Site Web", "Cuisine & Santé", "E-commerce"],
        context: `Cleenovia s'adresse aux familles italiennes cherchant à manger mieux et plus sainement. Le produit phare, VitaMixia, est une machine 8-en-1 qui remplace plusieurs appareils de cuisine. Elle permet de préparer du lait végétal 100% naturel sans conservateurs, des soupes et des smoothies en seulement 20 minutes, avec une fonction d'auto-nettoyage.`,
        quote: `Latte vegetale fresco al 100% naturale. Una sola macchina con otto funzioni che sostituisce l'estrattore, il blender, lo scaldabiberon e il bollitore.`,
        challengePoints: [
          "Mise en avant des 8 fonctions en 1",
          "Bénéfices santé (100% naturel, zéro conservateur)",
          "Preuve sociale et ciblage des familles italiennes",
          "Fonction d'auto-nettoyage en 60 secondes"
        ],
        challenge: `Créer une page de vente convaincante pour le marché italien, en expliquant comment cette machine multifonction simplifie le quotidien et permet de réaliser des économies tout en mangeant plus sainement.`,
        impact: `Une boutique en ligne claire et performante qui met en valeur l'aspect pratique et sain du produit, avec une garantie de remboursement de 90 jours pour maximiser la confiance.`,
      };
    }

    if (index === 25) {
      return {
        id: `projet-26`,
        order: index + 1,
        title: `Numoya`,
        subtitle: `GoBrush Pro - Brosse Lissante Portable`,
        description: `Boutique e-commerce pour Numoya, mettant en avant la GoBrush Pro, une brosse lissante sans fil compacte pour des retouches parfaites n'importe où.`,
        image: `/assets/portfolio/Screenshot 2026-04-10 153831.png`,
        detailImg: `/assets/portfolio/Screenshot 2026-04-19 122457.png`,
        mobileImg: `/assets/portfolio/Screenshot 2026-04-10 153853.png`,
        mobileImages: `/assets/portfolio/Screenshot 2026-04-19 122514.png`,
        desktopImage: `/assets/portfolio/Screenshot 2026-04-19 122457.png`,
        mobileImage: `/assets/portfolio/Screenshot 2026-04-19 122514.png`,
        linkView: `https://numoya.com/products/numoya-portable-straightener-brush-gobrush-pro-black`,
        tags: ["Site Web", "Beauté & Soins", "E-commerce"],
        context: `Numoya cible les personnes en déplacement avec la GoBrush Pro, une brosse lissante sans fil, légère et rechargeable. Équipée d'une technologie de chauffage en céramique et d'ions négatifs pour réduire les frisottis, elle permet des retouches rapides en voyage ou au bureau.`,
        quote: `La liberté de se coiffer n'importe où. Une brosse lissante sans fil alliant performance ionique et format voyage.`,
        challengePoints: [
          "Mise en évidence du format compact et sans fil",
          "Mise en avant des bénéfices (ions négatifs, anti-frisottis)",
          "Parcours d'achat optimisé pour mobile",
          "Design orienté lifestyle et voyage"
        ],
        challenge: `Construire une landing page persuasive démontrant la praticité d'une brosse sans fil pour les retouches quotidiennes, tout en rassurant sur la protection thermique des cheveux.`,
        impact: `Une plateforme e-commerce visuelle et rassurante qui positionne la brosse comme un accessoire indispensable, augmentant ainsi le taux de conversion sur une cible active.`,
      };
    }

    return {
      id: `projet-${projectNumber}`,
      order: index + 1,
      title: `Projet ${projectNumber}`,
      subtitle: `Placeholder projet ${projectNumber} a personnaliser`,
      description: `Description fictive du projet ${projectNumber}. Tu pourras remplacer ce texte plus tard.`,
      image: desktopImage,
      detailImg: desktopImage,
      mobileImg: mobileImage,
      mobileImages: mobileImage,
      desktopImage,
      mobileImage,
      linkView: `/realisations/projet-${projectNumber}`,
      tags: [...portfolioTags[index % portfolioTags.length]],
      context: `Projet ${projectNumber} utilise un contenu temporaire pour mettre en place les nouveaux visuels desktop et mobile dans le portfolio.`,
      quote: `Projet ${projectNumber} reste en contenu temporaire en attendant son texte final et ses vrais points forts.`,
      challengePoints: [
        "Core Web Vitals",
        "Optimisation mobile",
        "Structure claire",
        "Responsive setup",
      ],
      challenge: `Le challenge temporaire du projet ${projectNumber} consiste a poser une structure claire, premium et responsive que tu pourras ajuster contenu par contenu.`,
      impact: `Placeholder impact du projet ${projectNumber}. A remplacer ensuite par les vrais resultats, objectifs ou benefices client.`,
    };
  }
).filter(project => project.id !== 'safepet-jp' && project.id !== 'projet-02' && project.id !== 'projet-03' && project.id !== 'projet-04' && project.id !== 'projet-07' && project.id !== 'projet-08' && project.id !== 'projet-16' && project.id !== 'projet-19' && project.id !== 'projet-20' && project.id !== 'projet-21' && project.id !== 'projet-24' && project.id !== 'projet-27' && project.id !== 'projet-28' && project.id !== 'projet-29').map((project, index) => ({ ...project, order: index + 1 }));

export const homePortfolioProjects = portfolioProjects.slice(0, 6);

export const homeShowcaseProjects = portfolioProjects.slice(6);
