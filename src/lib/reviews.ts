export type ReviewItem = {
  id: string;
  text: string;
  author: string;
  image: string;
};

const reviewFilenames = [
  "Screenshot 2026-04-10 170027.png",
  "Screenshot 2026-04-10 170544.png",
  "Screenshot 2026-04-10 170840.png",
  "Screenshot 2026-04-10 171335.png",
  "Screenshot 2026-04-10 172038.png",
  "Screenshot 2026-04-10 172430.png",
  "Screenshot 2026-04-10 172817.png",
  "Screenshot 2026-04-10 173129.png",
] as const;

const createReviewImagePath = (filename: string) =>
  `/assets/reviews/${encodeURIComponent(filename)}`;

const reviewTexts = [
  "Merci encore pour votre reactivite. Les ajustements demandes ont ete faits rapidement, tout est maintenant valide de notre cote, et c est tres rassurant de savoir que je peux revenir vers vous pour la suite si besoin.",
  "Merci pour votre patience et pour le suivi jusqu aux derniers details. Les corrections ont bien ete prises en compte, la traduction a ete reglee proprement et tout est finalement rentre dans l ordre.",
  "Merci pour la rapidite d execution et pour votre serieux. Meme avec les petits delais et les retours de derniere minute, tout a ete corrige proprement et nous avons pu valider sans stress.",
  "Merci pour votre professionnalisme et surtout pour votre communication. J ai apprecie le fait de pouvoir avancer en confiance, avec des reponses claires et un vrai sens du suivi jusqu a la validation finale.",
  "Merci pour votre disponibilite et votre precision sur les derniers ajustements. Meme sur des demandes tres specifiques, tout a ete pris en compte avec soin et le resultat est exactement celui que j attendais.",
  "Merci beaucoup pour votre aide et votre implication. Le travail a ete bien recu, les modifications ont ete gerees serieusement, et cela donne envie de continuer ensemble sur les prochaines evolutions.",
  "Merci pour le suivi, la reactivite et les corrections faites sans complication. Les points a revoir ont ete traites un par un, et c est appreciable de pouvoir verifier chaque etape avec autant de clarte.",
  "Merci, tout s est bien passe. J ai aime la facon dont les retours ont ete pris en compte rapidement, et cela me met en confiance pour revenir vers vous sur les prochaines modifications du site.",
] as const;

export const homepageReviews: ReviewItem[] = reviewFilenames.map(
  (filename, index) => ({
    id: `review-${index + 1}`,
    text: reviewTexts[index],
    author: "Client anonyme",
    image: createReviewImagePath(filename),
  })
);
