import Link from "next/link"

export function HomeHeader() {
  return (
    <header className="py-4 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
            CF
          </div>
          <span className="text-xl font-bold text-blue-900">FinanceVirtuel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-blue-700 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#marche" className="text-gray-600 hover:text-blue-700 transition-colors">
            Comment ça marche
          </Link>
          <Link href="#temo" className="text-gray-600 hover:text-blue-700 transition-colors">
            Témoignages
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-700 transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/advisor"
            className="hidden md:block px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full hover:shadow-lg transition-all"
          >
            Essayer maintenant
          </Link>

          <button className="md:hidden">
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
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
