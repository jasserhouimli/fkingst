import Link from "next/link"

export function AdvisorHeader() {
  return (
    <header className="py-4 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
            CF
          </div>
          <span className="text-xl font-bold text-blue-900">FinanceVirtuel</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="px-4 py-2 text-gray-600 hover:text-blue-700 transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </header>
  )
}
