import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from '../src/Components/Languages/EN.json'
import AR from '../src/Components/Languages/AR.json'
import TR from '../src/Components/Languages/TR.json'
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: EN
  },
  ar: {
    translation: AR
  },
  tr: {
    translation: TR
  },
};

i18n.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'sessionStorage', 'htmlTag'],
      caches: ['localStorage'],

    },

    react: {
      useSuspense: false
    }
  });

export default i18n;