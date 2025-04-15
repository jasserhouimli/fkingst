"use client"

import { useState, useEffect } from "react"
import Chat from "@/components/chat"
import { FinancialTools } from "@/components/financial-tools"
import { AdvisorHeader } from "@/components/advisor-header"
import { AdvisorFooter } from "@/components/advisor-footer"

export default function AdvisorPage() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setShowSidebar(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-white">
      <AdvisorHeader />

      <main className="flex flex-1 flex-col md:flex-row relative">
        <div className={`flex-1 transition-all duration-300 ease-in-out ${showSidebar && !isMobile ? "md:mr-96" : ""}`}>
          <Chat />
        </div>

        <div
          className={`fixed top-16 right-0 h-[calc(100vh-8rem)] w-full md:w-96 bg-white/90 backdrop-blur-sm border-l border-gray-200 transition-all duration-300 ease-in-out transform ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-l-md hidden md:block"
            aria-label={showSidebar ? "Masquer les outils" : "Afficher les outils"}
          >
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
              className={`transition-transform ${showSidebar ? "rotate-180" : ""}`}
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <FinancialTools />
        </div>
      </main>

      <AdvisorFooter />

      {/* Mobile Tools Toggle */}
      {isMobile && (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed bottom-4 right-4 z-30 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-lg"
        >
          {showSidebar ? (
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
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
              <path d="M3 3v18h18"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
          )}
        </button>
      )}
    </div>
  )
}
