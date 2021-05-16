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
            'first circle': 'Stay connected with other local businesses in your community. Share and support your favorite stores, restaurants and businesses to empower them to do more.',
            'second circle': 'Inspire and get inspired. Get in touch with other local shops, build strong relationships. Make an impact on your neighbourhood and contribute to a better future together.',
            'third circle': 'Promote your products and services, share your ideas, vision and passions. Stay engaged with your customers and followers!',
            'slogan': 'One single click. Your whole community.',
            'main message': 'Explore and discover what\'s new, fun and innovative at the heart of your community. Network and communicate with other local businesses, making every click count.',
            'discover title': 'Discover new products in your neighborhood'
          }
        }
      },
      fallbackLng: 'en'
    })
}
