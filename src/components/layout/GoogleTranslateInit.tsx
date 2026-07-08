'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: {
      translate: {
        TranslateElement: {
          new (
            config: {
              pageLanguage: string
              includedLanguages: string
              autoDisplay: boolean
            },
            elementId: string
          ): void
          InlineLayout: { SIMPLE: number }
        }
      }
    }
  }
}

export default function GoogleTranslateInit() {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return

    const hasCookie = document.cookie
      .split('; ')
      .some(row => row.startsWith('googtrans='))

    if (!hasCookie) {
      document.cookie = "googtrans=/fr/fr; path=/"
    }

    const div = document.createElement('div')
    div.id = 'google_translate_element'
    div.style.display = 'none'
    document.body.appendChild(div)

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'fr',
          includedLanguages: 'fr,en',
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)

    return () => {
      const el = document.getElementById('google_translate_element')
      if (el) el.remove()
      const s = document.getElementById('google-translate-script')
      if (s) s.remove()
    }
  }, [])

  return null
}
