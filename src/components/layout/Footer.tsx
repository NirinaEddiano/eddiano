"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+261 33 43 348 46";
const WHATSAPP_LINK = `https://wa.me/261334334846?text=${encodeURIComponent(
  "Bonjour Niryva, j'aimerais discuter d'un projet web.",
)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = email.trim();

    if (!value) {
      setSubmitState({
        type: "error",
        message: "Merci de renseigner votre email.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setSubmitState({
        type: "error",
        message: "Merci de saisir une adresse email valide.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitState(null);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          data?.error || "Impossible d'envoyer cet email pour le moment.",
        );
      }

      setSubmitState({
        type: "success",
        message: "Votre email a bien ete envoye.",
      });
      setEmail("");
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Impossible d'envoyer cet email pour le moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-black pb-10 pt-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-2xl font-bold tracking-tighter"
            >
              <span className="text-white">Niryva</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Notre équipe combine expertise technique et créativité pour concevoir 
              des solutions digitales performantes. WordPress, Shopify et code sur mesure.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Expertises</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Développement Next.js / React
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                E-commerce Shopify
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Site Vitrine WordPress
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Dropshipping & SEO
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Restons connectés</h4>
            <p className="mb-4 text-sm text-gray-400">
              Recevez nos conseils pour digitaliser votre business.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex flex-col items-stretch gap-2 rounded-lg border border-white/10 bg-white/5 p-2 transition-colors focus-within:border-blue-500 sm:flex-row sm:items-center sm:p-1">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (submitState) {
                      setSubmitState(null);
                    }
                  }}
                  required
                  className="min-w-0 w-full border-none bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-end rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              {submitState && (
                <p
                  className={`mt-3 text-xs ${
                    submitState.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {submitState.message}
                </p>
              )}
            </form>

            <div className="space-y-3">
              <a
                href="mailto:anoeddi84@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-blue-500" />
                anoeddi84@gmail.com
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <MessageCircle size={16} className="text-green-500" />
                WhatsApp : {WHATSAPP_NUMBER}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-blue-500" />
                Disponible en Remote (Monde)
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Niryva - Tous droits reserves.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Mentions Legales
            </Link>
            <Link
              href="/confidentialite"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              Politique de Confidentialite
            </Link>
            <Link
              href="/cgv"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
