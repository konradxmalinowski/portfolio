import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '../constants/translations'

type Language = 'en' | 'pl'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('pl')) return 'pl'
  return 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language | null
    return savedLang || getBrowserLanguage()
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
