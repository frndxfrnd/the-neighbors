import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export default () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            'hello world': 'Hello World!',
            'first circle': 'Stay connected with other local businesses in your community.Share and support your favorite stores, restaurants and businesses to empower them to do more.'
          }
        }
      },
      fallbackLng: 'en'
    })
}
