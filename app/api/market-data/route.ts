import { NextResponse } from "next/server"

// Cache control - 5 minutes
export const revalidate = 300

export async function GET() {
  try {
    // Fetch cryptocurrency data from CoinGecko
    const cryptoResponse = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum,ripple,cardano,solana&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h",
      { next: { revalidate: 300 } },
    )

    if (!cryptoResponse.ok) {
      throw new Error(`CoinGecko API error: ${cryptoResponse.status}`)
    }

    const cryptoData = await cryptoResponse.json()

    // Fetch forex data from ExchangeRate-API
    const forexResponse = await fetch("https://open.er-api.com/v6/latest/EUR", { next: { revalidate: 300 } })

    if (!forexResponse.ok) {
      throw new Error(`Forex API error: ${forexResponse.status}`)
    }

    const forexData = await forexResponse.json()

    // Fetch stock market data (simplified with mock data as many stock APIs require paid subscriptions)
    // In a production app, you would replace this with a real API call
    const stockData = [
      { name: "CAC 40", value: 8045.17, change: 0.42, currency: "EUR" },
      { name: "S&P 500", value: 5218.26, change: -0.28, currency: "USD" },
      { name: "NASDAQ", value: 16340.87, change: 0.35, currency: "USD" },
      { name: "DAX", value: 18384.35, change: 0.18, currency: "EUR" },
    ]

    // Format cryptocurrency data
    const formattedCryptoData = cryptoData.map((crypto) => ({
      name: crypto.name,
      symbol: crypto.symbol.toUpperCase(),
      value: crypto.current_price,
      change: crypto.price_change_percentage_24h,
      currency: "EUR",
      image: crypto.image,
    }))

    // Format forex data (select a few major currencies)
    const selectedCurrencies = ["USD", "GBP", "JPY", "CHF", "CAD"]
    const formattedForexData = selectedCurrencies.map((currency) => ({
      name: currency,
      value: forexData.rates[currency],
      // Calculate change (this would normally come from the API)
      change: (Math.random() * 2 - 1) * 0.5, // Random change between -0.5% and 0.5%
      baseCurrency: "EUR",
    }))

    return NextResponse.json({
      crypto: formattedCryptoData,
      forex: formattedForexData,
      stocks: stockData,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching market data:", error)
    return NextResponse.json({ error: "Failed to fetch market data", details: error.message }, { status: 500 })
  }
}
