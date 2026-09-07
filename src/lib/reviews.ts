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
  "Merci encore pour votre réactivité. Les ajustements demandés ont été faits rapidement, tout est maintenant valide de notre côté, et c'est très rassurant de savoir que je peux revenir vers vous pour la suite si besoin.",
  "Merci pour votre patience et pour le suivi jusqu'aux derniers détails. Les corrections ont bien été prises en compte, la traduction a été réglée proprement et tout est finalement rentré dans l'ordre.",
  "Merci pour la rapidité d'exécution et pour votre sérieux. Même avec les petits délais et les retours de dernière minute, tout a été corrigé proprement et nous avons pu valider sans stress.",
  "Merci pour votre professionnalisme et surtout pour votre communication. J'ai apprécié le fait de pouvoir avancer en confiance, avec des réponses claires et un vrai sens du suivi jusqu'à la validation finale.",
  "Merci pour votre disponibilité et votre précision sur les derniers ajustements. Même sur des demandes très spécifiques, tout a été pris en compte avec soin et le résultat est exactement celui que j'attendais.",
  "Merci beaucoup pour votre aide et votre implication. Le travail a été bien reçu, les modifications ont été gérées sérieusement, et cela donne envie de continuer ensemble sur les prochaines évolutions.",
  "Merci pour le suivi, la réactivité et les corrections faites sans complication. Les points à revoir ont été traités un par un, et c'est appréciable de pouvoir vérifier chaque étape avec autant de clarté.",
  "Merci, tout s'est bien passé. J'ai aimé la façon dont les retours ont été pris en compte rapidement, et cela me met en confiance pour revenir vers vous sur les prochaines modifications du site.",
] as const;

export const homepageReviews: ReviewItem[] = reviewFilenames.map(
  (filename, index) => ({
    id: `review-${index + 1}`,
    text: reviewTexts[index],
    author: "Client anonyme",
    image: createReviewImagePath(filename),
  })
);
