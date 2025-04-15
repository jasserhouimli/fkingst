export function AdvisorFooter() {
  return (
    <footer className="py-4 px-4 bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} FinanceVirtuel - Tous droits réservés</p>
        <p className="mt-1">
          Les conseils fournis sont à titre informatif uniquement et ne constituent pas des recommandations
          d'investissement.
        </p>
      </div>
    </footer>
  )
}
