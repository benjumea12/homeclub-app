import { useTranslation } from 'react-i18next'
import en from './locales/en.json'

type TranslationKeys = keyof typeof en

const useTypedTranslation = () => {
  const { t } = useTranslation()
  const typedT: (key: TranslationKeys) => string = t
  return { t: typedT }
}

export { useTypedTranslation }
