"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type MarketData = {
  crypto: CryptoData[]
  forex: ForexData[]
  stocks: StockData[]
  lastUpdated: string
}

type CryptoData = {
  name: string
  symbol: string
  value: number
  change: number
  currency: string
  image: string
}

type ForexData = {
  name: string
  value: number
  change: number
  baseCurrency: string
}

type StockData = {
  name: string
  value: number
  change: number
  currency: string
}

export function FinancialTools() {
  return (
    <div className="h-full overflow-auto p-4">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
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
            className="text-emerald-600"
          >
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          <h2 className="text-lg font-medium text-blue-900">Outils Financiers</h2>
        </div>

        <Tabs defaultValue="savings" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="savings"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm rounded-md py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path>
                <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                <path d="M16 11h0"></path>
              </svg>
              Épargne
            </TabsTrigger>
            <TabsTrigger
              value="investment"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm rounded-md py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
              Investissement
            </TabsTrigger>
            <TabsTrigger
              value="budget"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm rounded-md py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              Budget
            </TabsTrigger>
          </TabsList>

          <TabsContent value="savings" className="pt-4">
            <SavingsCalculator />
          </TabsContent>

          <TabsContent value="investment" className="pt-4">
            <InvestmentCalculator />
          </TabsContent>

          <TabsContent value="budget" className="pt-4">
            <BudgetCalculator />
          </TabsContent>
        </Tabs>

        <MarketDataSection />
      </div>
    </div>
  )
}

function SavingsCalculator() {
  const [initialAmount, setInitialAmount] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(100)
  const [years, setYears] = useState(5)
  const [interestRate, setInterestRate] = useState(3)
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    calculateSavings()
  }, [initialAmount, monthlyContribution, years, interestRate])

  const calculateSavings = () => {
    const p = initialAmount
    const pmt = monthlyContribution
    const r = interestRate / 100 / 12
    const n = years * 12

    const futureValue = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r)
    setResult(Math.round(futureValue * 100) / 100)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
        <h3 className="text-lg font-semibold text-blue-900">Calculateur d'Épargne</h3>
        <p className="text-sm text-gray-600">Calculez la croissance de votre épargne dans le temps</p>
      </div>
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="initial" className="text-sm font-medium text-gray-700">
              Montant initial
            </label>
            <span className="text-sm font-medium text-emerald-600">{initialAmount.toLocaleString("fr-FR")} €</span>
          </div>
          <input
            id="initial"
            type="range"
            min={0}
            max={10000}
            step={100}
            value={initialAmount}
            onChange={(e) => setInitialAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="monthly" className="text-sm font-medium text-gray-700">
              Contribution mensuelle
            </label>
            <span className="text-sm font-medium text-emerald-600">
              {monthlyContribution.toLocaleString("fr-FR")} €
            </span>
          </div>
          <input
            id="monthly"
            type="range"
            min={0}
            max={1000}
            step={10}
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="years" className="text-sm font-medium text-gray-700">
              Durée
            </label>
            <span className="text-sm font-medium text-emerald-600">{years} ans</span>
          </div>
          <input
            id="years"
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="interest" className="text-sm font-medium text-gray-700">
              Taux d'intérêt annuel
            </label>
            <span className="text-sm font-medium text-emerald-600">{interestRate}%</span>
          </div>
          <input
            id="interest"
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {result !== null && (
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
            <p className="font-medium text-gray-700">Montant final estimé:</p>
            <p className="text-2xl font-bold text-emerald-600">{result.toLocaleString("fr-FR")} €</p>
            <p className="text-xs text-gray-500 mt-2">
              Après {years} ans avec un taux d'intérêt de {interestRate}%
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [years, setYears] = useState(10)
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    calculateInvestment()
  }, [initialInvestment, annualReturn, years])

  const calculateInvestment = () => {
    const p = initialInvestment
    const r = annualReturn / 100
    const t = years

    const futureValue = p * Math.pow(1 + r, t)
    setResult(Math.round(futureValue * 100) / 100)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
        <h3 className="text-lg font-semibold text-blue-900">Calculateur d'Investissement</h3>
        <p className="text-sm text-gray-600">Estimez le rendement de vos investissements</p>
      </div>
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="investment" className="text-sm font-medium text-gray-700">
              Investissement initial
            </label>
            <span className="text-sm font-medium text-emerald-600">{initialInvestment.toLocaleString("fr-FR")} €</span>
          </div>
          <input
            id="investment"
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="return" className="text-sm font-medium text-gray-700">
              Rendement annuel moyen
            </label>
            <span className="text-sm font-medium text-emerald-600">{annualReturn}%</span>
          </div>
          <input
            id="return"
            type="range"
            min={1}
            max={15}
            step={0.5}
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="duration" className="text-sm font-medium text-gray-700">
              Durée
            </label>
            <span className="text-sm font-medium text-emerald-600">{years} ans</span>
          </div>
          <input
            id="duration"
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {result !== null && (
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
            <p className="font-medium text-gray-700">Valeur finale estimée:</p>
            <p className="text-2xl font-bold text-emerald-600">{result.toLocaleString("fr-FR")} €</p>
            <div className="flex items-center gap-1 mt-1 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m13 7 5 5-5 5"></path>
                <path d="M6 7v10"></path>
              </svg>
              <span className="text-sm">
                +{Math.round((result - initialInvestment) * 100) / 100} € (
                {Math.round((result / initialInvestment - 1) * 100)}%)
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function BudgetCalculator() {
  const [income, setIncome] = useState(3000)
  const [expenses, setExpenses] = useState(2000)
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    calculateBudget()
  }, [income, expenses])

  const calculateBudget = () => {
    const monthlyIncome = income
    const monthlyExpenses = expenses

    const balance = monthlyIncome - monthlyExpenses
    setResult(balance)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
        <h3 className="text-lg font-semibold text-blue-900">Calculateur de Budget</h3>
        <p className="text-sm text-gray-600">Gérez vos revenus et dépenses</p>
      </div>
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="income" className="text-sm font-medium text-gray-700">
              Revenu mensuel
            </label>
            <span className="text-sm font-medium text-emerald-600">{income.toLocaleString("fr-FR")} €</span>
          </div>
          <input
            id="income"
            type="range"
            min={1000}
            max={10000}
            step={100}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="expenses" className="text-sm font-medium text-gray-700">
              Dépenses mensuelles
            </label>
            <span className="text-sm font-medium text-emerald-600">{expenses.toLocaleString("fr-FR")} €</span>
          </div>
          <input
            id="expenses"
            type="range"
            min={500}
            max={5000}
            step={100}
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {result !== null && (
          <div className="mt-4 p-4 rounded-lg border">
            <p className="font-medium text-gray-700">Solde mensuel:</p>
            <p className="text-2xl font-bold">{result.toLocaleString("fr-FR")} €</p>
            {result > 0 ? (
              <p className="text-sm text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block mr-1"
                >
                  <path d="m3 9 9-7 9 7M6 5v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V5"></path>
                </svg>
                Excédent
              </p>
            ) : result < 0 ? (
              <p className="text-sm text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block mr-1"
                >
                  <path d="m3 9 9-7 9 7M6 5v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V5"></path>
                </svg>
                Déficit
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block mr-1"
                >
                  <path d="m3 9 9-7 9 7M6 5v11a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V5"></path>
                </svg>
                Équilibré
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function MarketDataSection() {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/market-data")
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`)
        }
        const data: MarketData = await response.json()
        setMarketData(data)
      } catch (e: any) {
        setError(e.message)
        console.error("Error fetching market data:", e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 60000) // Refresh every 60 seconds

    return () => clearInterval(intervalId) // Clean up interval on unmount
  }, [])

  if (isLoading) {
    return <div>Chargement des données du marché...</div>
  }

  if (error) {
    return <div>Erreur lors du chargement des données du marché: {error}</div>
  }

  if (!marketData) {
    return <div>Aucune donnée de marché disponible.</div>
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
        <h3 className="text-lg font-semibold text-blue-900">Données du Marché</h3>
        <p className="text-sm text-gray-600">Dernière mise à jour: {marketData.lastUpdated}</p>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-md font-semibold text-gray-700">Cryptomonnaies</h4>
          {marketData.crypto.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{crypto.name}</p>
                  <p className="text-xs text-gray-500">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">
                  {crypto.value} {crypto.currency}
                </p>
                <p className={`text-xs ${crypto.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {crypto.change >= 0 ? "+" : ""}
                  {crypto.change}%
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-md font-semibold text-gray-700">Forex</h4>
          {marketData.forex.map((forex) => (
            <div key={forex.name} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">{forex.name}</p>
                <p className="text-xs text-gray-500">Base: {forex.baseCurrency}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">{forex.value}</p>
                <p className={`text-xs ${forex.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {forex.change >= 0 ? "+" : ""}
                  {forex.change}%
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-md font-semibold text-gray-700">Actions</h4>
          {marketData.stocks.map((stock) => (
            <div key={stock.name} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">
                  {stock.value} {stock.currency}
                </p>
                <p className={`text-xs ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {stock.change >= 0 ? "+" : ""}
                  {stock.change}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
