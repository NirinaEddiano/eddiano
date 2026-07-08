'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/LanguageContext'
import { Globe } from 'lucide-react'

type ToggleVariant = 'light' | 'dark'

export default function LanguageToggle({
  variant = 'light',
}: {
  variant?: ToggleVariant
}) {
  const { lang, setLang } = useLang()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-[80px] h-[30px] rounded-full animate-pulse bg-white/10" />
    )
  }

  const isDark = variant === 'dark'

  return (
    <div className="flex items-center gap-1.5">
      <Globe
        size={14}
        className={isDark ? 'text-gray-400' : 'text-white/50'}
      />
      <div
        className={`relative flex items-center rounded-full border p-0.5 ${
          isDark
            ? 'border-gray-200 bg-gray-100'
            : 'border-white/20 bg-white/10'
        }`}
      >
        <div className="relative flex">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className={`absolute inset-y-0 rounded-full z-0 ${
              isDark ? 'bg-blue-600' : 'bg-blue-500'
            }`}
            style={{
              width: '50%',
              left: lang === 'fr' ? '0%' : '50%',
            }}
          />
          <button
            onClick={() => setLang('fr')}
            className={`relative z-10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${
              lang === 'fr'
                ? 'text-white'
                : isDark
                  ? 'text-gray-400 hover:text-gray-700'
                  : 'text-white/50 hover:text-white/80'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLang('en')}
            className={`relative z-10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${
              lang === 'en'
                ? 'text-white'
                : isDark
                  ? 'text-gray-400 hover:text-gray-700'
                  : 'text-white/50 hover:text-white/80'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  )
}
