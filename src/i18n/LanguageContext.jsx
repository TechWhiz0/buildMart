import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'buildmart-lang'
const LanguageContext = createContext(null)

/** lang is null until the visitor picks a language (popup stays open). */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'hi' || saved === 'en' ? saved : null
    } catch {
      return null
    }
  })

  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode — choice just won't persist */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang || 'en'
  }, [lang])

  const t = translations[lang || 'en']

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
