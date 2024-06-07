// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import idTranslation from "./locales/id/translation.json";

// i18next configuration
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    id: {
      translation: idTranslation,
    },
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
