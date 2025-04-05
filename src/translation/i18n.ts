import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'expo-localization'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Locales
import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  es: { translation: es },
  en: { translation: en },
}

const getLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem('language')

  return savedLanguage || getLocales()[0].languageCode
}

const initI18n = async () => {
  const language = await getLanguage()

  await i18n.use(initReactI18next).init({
    resources,
    lng: language || undefined,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()

export default i18n
