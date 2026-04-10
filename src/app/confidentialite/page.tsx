import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité - Eddiano.dev",
  description: "Protection des données personnelles sur Eddiano.dev",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6">
        <h1 className="mb-6 text-4xl font-black text-gray-900">
          Politique de confidentialité
        </h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Données collectées</h2>
            <p className="mb-2">
              Nous collectons les données personnelles que vous nous fournissez 
              lorsque vous utilisez notre site web, notamment :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Informations de contact (nom, email, téléphone)</li>
              <li>Informations relatives à votre projet (description, type de service)</li>
              <li>Données de navigation (cookies, adresse IP)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Finalité des données</h2>
            <p className="mb-2">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Traiter vos demandes de contact et devis</li>
              <li>Vous fournir nos services et prestations</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant une durée 
              strictement nécessaire aux finalités pour lesquelles elles sont traitées :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Données de contact : 3 ans après la fin de la relation commerciale</li>
              <li>Données de demande de devis : 1 an en cas de refus</li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Vos droits</h2>
            <p className="mb-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Droit d'accès :</strong> Obtenir la confirmation de l'existence de vos données</li>
              <li><strong>Droit de rectification :</strong> Corriger les données inexactes</li>
              <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Obtenir vos données dans un format structuré</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:anoeddi84@gmail.com" className="text-blue-600 hover:underline">
                anoeddi84@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="mb-2">
              Notre site utilise des cookies pour :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Améliorer votre expérience de navigation</li>
              <li>Statistiques d'audience et analyse de fréquentation</li>
              <li>Publicité ciblée (si applicable)</li>
            </ul>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies 
              ou être averti de leur dépôt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
              appropriées pour protéger vos données personnelles contre la perte, 
              l'usage abusif, l'accès non autorisé, la divulgation, 
              la modification et la destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Transfert de données</h2>
            <p>
              Vos données ne sont pas transférées en dehors de l'Espace Économique Européen 
              sans garanties appropriées conformes au RGPD.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Pour toute question relative à notre politique de confidentialité, 
              contactez-nous à :{" "}
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