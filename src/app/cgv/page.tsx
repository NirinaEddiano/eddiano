import Link from "next/link";

export const metadata = {
  title: "Conditions Générales de Vente - Niryva",
  description: "CGV de Niryva - Conditions de vente et prestations",
};

export default function CgvPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6">
        <h1 className="mb-6 text-4xl font-black text-gray-900">
          Conditions Générales de Vente (CGV)
        </h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Champ d'application</h2>
            <p className="mb-2">
              Les présentes Conditions Générales de Vente (CGV) s'appliquent 
              à toutes les prestations de services proposées par Niryva.
            </p>
            <p>
              Toute commande de prestation implique l'acceptation sans réserve 
              des présentes CGV par le client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Prestations proposées</h2>
            <p className="mb-2">
              Niryva propose les services suivants :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Développement de sites web sur mesure (Next.js, React)</li>
              <li>Création de boutiques e-commerce (Shopify)</li>
              <li>Sites vitrines WordPress</li>
              <li>Maintenance et évolution de sites existants</li>
              <li>Conseil et accompagnement digital</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Tarifs et devis</h2>
            <p className="mb-2">
              Les tarifs sont établis sur devis personnalisé en fonction :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>De la complexité du projet</li>
              <li>Des fonctionnalités demandées</li>
              <li>Des délais de réalisation</li>
              <li>Des prestations annexes (hébergement, maintenance, etc.)</li>
            </ul>
            <p className="mt-2">
              Tout devis accepté et signé par le client constitue un accord ferme 
              et définitif sur les prix et prestations convenues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Modalités de paiement</h2>
            <p className="mb-2">
              Sauf mention contraire sur le devis :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Un acompte de 30% à 50% est demandé au démarrage du projet</li>
              <li>Le solde est payable à la livraison du projet</li>
              <li>Les paiements s'effectuent par virement bancaire</li>
              <li>Délai de paiement : 30 jours maximum</li>
            </ul>
            <p className="mt-2">
              Tout retard de paiement pourra entraîner la suspension des prestations 
              et l'application de pénalités de retard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Délais de réalisation</h2>
            <p className="mb-2">
              Les délais de réalisation sont précisés sur chaque devis et dépendent :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>De la complexité du projet</li>
              <li>De la réactivité du client à fournir les éléments nécessaires</li>
              <li>Des éventuelles modifications demandées en cours de projet</li>
            </ul>
            <p className="mt-2">
              Les délais annoncés sont donnés à titre indicatif. 
              En cas de retard indépendant de notre volonté, 
              le client en sera informé dans les meilleurs délais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Obligations du client</h2>
            <p className="mb-2">
              Le client s'engage à :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fournir tous les éléments nécessaires à la réalisation du projet</li>
              <li>Respecter les délais de validation des différentes étapes</li>
              <li>Garantir qu'il dispose des droits sur les contenus fournis</li>
              <li>Régler les factures dans les délais convenus</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Révisions et modifications</h2>
            <p className="mb-2">
              Le devis inclut un nombre limité de révisions précisé lors de la commande. 
              Toute demande supplémentaire pourra faire l'objet d'un complément de facturation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Maintenance et support</h2>
            <p className="mb-2">
              Un service de maintenance optionnel peut être proposé après la livraison du projet :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mises à jour de sécurité</li>
              <li>Corrections de bugs</li>
              <li>Support technique par email</li>
              <li>Sauvegardes régulières</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Propriété intellectuelle</h2>
            <p className="mb-2">
              La propriété intellectuelle des livrables est transférée au client 
              après paiement intégral du projet. Jusqu'au paiement complet, 
              Niryva conserve la propriété de l'ensemble des travaux réalisés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Responsabilité</h2>
            <p>
              La responsabilité de Niryva est limitée au montant total de la prestation. 
              L'agence ne saurait être tenu responsable des dommages indirects, 
              pertes d'exploitation ou manque à gagner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit malgache. 
              En cas de litige, les tribunaux d'Antananarivo seront seuls compétents.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Pour toute question concernant nos CGV, contactez-nous à :{" "}
              <a href="mailto:anoeddi84@gmail.com" className="text-blue-600 hover:underline">
                anoeddi84@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}