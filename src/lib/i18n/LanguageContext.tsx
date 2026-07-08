'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type Language = 'fr' | 'en'

interface LangContextType {
  lang: Language
  setLang: (lang: Language) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'fr',
  setLang: () => {},
})

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function getInitialLang(): Language {
  const val = getCookie('googtrans')
  if (val && val.endsWith('/en')) return 'en'
  return 'fr'
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang)

  const setLang = useCallback((newLang: Language) => {
    if (newLang === getInitialLang()) return
    setLangState(newLang)

    if (newLang === 'en') {
      document.cookie = "googtrans=/fr/en; path=/"
      document.cookie = "googtrans=/fr/en; domain=" + window.location.hostname + "; path=/"
    } else {
      document.cookie = "googtrans=/fr/fr; path=/"
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;"
    }

    window.location.reload()
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
