import Link from "next/link"
import { HomeHeader } from "@/components/home-header"
import { HomeFooter } from "@/components/home-footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <HomeHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5 z-0"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                  Votre conseiller financier virtuel disponible 24/7
                </h1>
                <p className="text-lg text-gray-600">
                  Obtenez des conseils financiers personnalisés, des analyses de budget et des stratégies
                  d'investissement adaptées à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/advisor"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium rounded-full hover:shadow-lg transition-all text-center"
                  >
                    Consulter maintenant
                  </Link>
                  <Link
                    href="#features"
                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-full border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Conseiller Financier</h3>
                      <p className="text-xs text-gray-500">En ligne</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">
                        Bonjour ! Je suis votre conseiller financier virtuel. Comment puis-je vous aider aujourd'hui ?
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      <p className="text-sm">J'aimerais savoir comment optimiser mon épargne pour ma retraite.</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">
                        Excellente question ! Pour optimiser votre épargne retraite, je vous recommande de...
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                    <input
                      type="text"
                      placeholder="Posez votre question..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="p-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Fonctionnalités principales</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Notre conseiller financier virtuel combine intelligence artificielle et expertise financière pour vous
                offrir des conseils personnalisés.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z"></path>
                    <path d="m15 5-2-3h-2l-2 3"></path>
                    <path d="m15 19-2 3h-2l-2-3"></path>
                    <path d="M19 12c0-1.7-1.3-3-3-3h-2"></path>
                    <path d="M5 12c0-1.7 1.3-3 3-3h2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Conseils personnalisés</h3>
                <p className="text-gray-600">
                  Recevez des conseils financiers adaptés à votre situation, vos objectifs et votre profil de risque.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">Analyse de marché</h3>
                <p className="text-gray-600">
                  Suivez les tendances du marché et recevez des analyses en temps réel pour prendre des décisions
                  éclairées.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Gestion de budget</h3>
                <p className="text-gray-600">
                  Optimisez vos finances avec des outils de gestion de budget et des recommandations d'épargne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="marche" className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Comment ça marche</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Notre plateforme est simple à utiliser et vous guide à chaque étape de votre parcours financier.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                  <div className="absolute w-full h-0.5 bg-blue-200 right-0 top-1/2 -z-10 md:w-[calc(100%+2rem)] md:right-0"></div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Posez votre question</h3>
                <p className="text-gray-600">
                  Décrivez votre situation financière et posez vos questions à notre conseiller virtuel.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                  <div className="absolute w-full h-0.5 bg-blue-200 right-0 top-1/2 -z-10 md:w-[calc(100%+2rem)] md:right-0"></div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Analyse intelligente</h3>
                <p className="text-gray-600">
                  Notre IA analyse votre situation et prépare des recommandations personnalisées.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                  <div className="absolute w-full h-0.5 bg-blue-200 right-0 top-1/2 -z-10 md:w-[calc(100%+2rem)] md:right-0"></div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Conseils personnalisés</h3>
                <p className="text-gray-600">
                  Recevez des conseils clairs et des stratégies adaptées à vos objectifs financiers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Mise en action</h3>
                <p className="text-gray-600">
                  Utilisez nos outils pour mettre en œuvre les recommandations et suivre vos progrès.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="temo" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ce que disent nos utilisateurs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez comment notre conseiller financier virtuel a aidé des milliers d'utilisateurs à améliorer leur
                situation financière.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Marie Dupont</h4>
                    <p className="text-sm text-gray-500">Entrepreneure</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Grâce aux conseils du conseiller virtuel, j'ai pu optimiser la gestion financière de mon entreprise
                  et augmenter ma marge bénéficiaire de 15% en seulement 6 mois."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Thomas Martin</h4>
                    <p className="text-sm text-gray-500">Ingénieur</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "J'étais perdu dans mes investissements. Le conseiller m'a aidé à restructurer mon portefeuille et à
                  définir une stratégie claire pour ma retraite. Je me sens beaucoup plus confiant maintenant."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sophie Bernard</h4>
                    <p className="text-sm text-gray-500">Médecin</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Avec mon emploi du temps chargé, je n'avais jamais le temps de m'occuper de mes finances. Ce
                  conseiller virtuel m'a permis de mettre en place un plan d'épargne efficace sans effort."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à améliorer votre situation financière ?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Commencez dès aujourd'hui avec notre conseiller financier virtuel et prenez le contrôle de votre avenir
              financier.
            </p>
            <Link
              href="/advisor"
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-full hover:shadow-lg transition-all inline-block"
            >
              Consulter gratuitement
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Questions fréquentes</h2>
              <p className="text-gray-600">Vous avez des questions ? Nous avons les réponses.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Comment fonctionne le conseiller financier virtuel ?
                </h3>
                <p className="text-gray-600">
                  Notre conseiller utilise l'intelligence artificielle pour analyser votre situation financière et vous
                  fournir des conseils personnalisés. Il s'adapte à vos besoins et objectifs spécifiques.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Les conseils sont-ils vraiment personnalisés ?
                </h3>
                <p className="text-gray-600">
                  Oui, notre IA prend en compte votre situation unique, vos objectifs et votre profil de risque pour
                  vous offrir des conseils sur mesure, pas des recommandations génériques.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Mes données financières sont-elles sécurisées ?
                </h3>
                <p className="text-gray-600">
                  Absolument. Nous utilisons un cryptage de niveau bancaire pour protéger vos informations. Vos données
                  ne sont jamais vendues à des tiers et restent strictement confidentielles.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Puis-je utiliser le service sur mobile ?</h3>
                <p className="text-gray-600">
                  Oui, notre plateforme est entièrement responsive et fonctionne parfaitement sur tous les appareils :
                  ordinateurs, tablettes et smartphones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
