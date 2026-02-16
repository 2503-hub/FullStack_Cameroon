import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next) // connect with React
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation }
    },
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
