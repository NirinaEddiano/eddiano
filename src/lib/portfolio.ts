export type PortfolioProject = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImg: string;
  mobileImg: string;
  desktopImage: string;
  mobileImage: string;
  linkView: string;
  tags: string[];
  context: string;
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
] as const;

const portfolioTags = [
  ["UI Design", "Responsive", "Desktop"],
  ["Mobile First", "Landing Page", "Conversion"],
  ["E-commerce", "Branding", "Showcase"],
  ["WordPress", "SEO", "Visual Refresh"],
  ["Next.js", "Performance", "Premium UI"],
  ["Shopify", "CRO", "Product Focus"],
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

    return {
      id: `projet-${projectNumber}`,
      order: index + 1,
      title: `Projet ${projectNumber}`,
      subtitle: `Placeholder projet ${projectNumber} a personnaliser`,
      description: `Description fictive du projet ${projectNumber}. Tu pourras remplacer ce texte plus tard.`,
      image: desktopImage,
      detailImg: desktopImage,
      mobileImg: mobileImage,
      desktopImage,
      mobileImage,
      linkView: `/realisations/projet-${projectNumber}`,
      tags: [...portfolioTags[index % portfolioTags.length]],
      context: `Projet ${projectNumber} utilise un contenu temporaire pour mettre en place les nouveaux visuels desktop et mobile dans le portfolio.`,
      challenge: `Le challenge temporaire du projet ${projectNumber} consiste a poser une structure claire, premium et responsive que tu pourras ajuster contenu par contenu.`,
      impact: `Placeholder impact du projet ${projectNumber}. A remplacer ensuite par les vrais resultats, objectifs ou benefices client.`,
    };
  }
);

export const homePortfolioProjects = portfolioProjects.slice(0, 6);

export const homeShowcaseProjects = portfolioProjects.slice(6);
