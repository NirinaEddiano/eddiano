import Link from "next/link";

export const metadata = {
  title: "Mentions Légales - Niryva",
  description: "Informations légales de l'agence Niryva - Développement web",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6">
        <h1 className="mb-6 text-4xl font-black text-gray-900">Mentions légales</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
            <p className="mb-2">
              Le site <strong>niryva.com</strong> est édité par :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Raison sociale :</strong> RAMIADANARIVO NIRINA EDDIANO</li>
              <li><strong>Nom commercial :</strong> Niryva</li>
              <li><strong>Numéro NIF :</strong> 3019709309</li>
              <li><strong>Numéro STAT :</strong> 62011 12 2026 0 00807</li>
              <li><strong>Siège social :</strong> LOT IV A 660 BIS A, Tsarafiraisana Ambano, Madagascar</li>
              <li><strong>Email :</strong> anoeddi84@gmail.com</li>
              <li><strong>Téléphone :</strong> +261 33 43 348 46</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="mb-2">
              Le site est hébergé par :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p className="mb-2">
              L'ensemble du contenu du site (textes, images, logos, graphismes, code source) 
              est la propriété exclusive de Niryva et est protégé par le code de la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification ou diffusion, même partielle, 
              est strictement interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Responsabilité</h2>
            <p className="mb-2">
              Niryva s'efforce de fournir des informations aussi précises que possible. 
              Toutefois, l'éditeur ne peut garantir l'exactitude, la complétude ou l'actualité 
              des informations présentes sur le site.
            </p>
            <p>
              L'éditeur décline toute responsabilité en cas d'erreurs, d'omissions 
              ou de problèmes techniques liés à l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites web. 
              Niryva n'exerce aucun contrôle sur ces sites tiers 
              et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Pour toute question concernant les mentions légales, 
              veuillez nous contacter à l'adresse :{" "}
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