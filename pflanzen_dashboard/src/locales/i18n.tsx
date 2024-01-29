import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import gerTranslation from "./ger.json";
import frTranslation from "./fr.json";
import esTranslation from "./es.json";
import itTranslation from "./it.json"
import zhTranslation from "./zh.json"
import hiTranslation from "./hi.json"
import arTranslation from "./ar.json"
import ptTranslation from "./pt.json"
import ruTranslation from "./ru.json"
import jaTranslation from "./ja.json"
import nlTranslation from "./nl.json"
import koTranslation from "./ko.json"

const resources = {
    // English
    en: {
        translation: enTranslation
    },
    // German
    ger: {
        translation: gerTranslation
    },
    // French
    fr: {
        translation: frTranslation
    },
    // Spanish
    es: {
        translation: esTranslation
    },
    // Italian
    it: {
        translation: itTranslation
    },
    // Mandarin Chinese
    zh: {
        translation: zhTranslation
    },
    // Hindi
    hi: {
        translation: hiTranslation
    },
    // Arabic
    ar: {
        translation: arTranslation
    },
    // Portuguese
    pt: {
        translation: ptTranslation
    },
    // Russian
    ru: {
        translation: ruTranslation
    },
    // Japanese
    ja: {
        translation: jaTranslation
    },
    // Dutch
    nl: {
        translation: nlTranslation
    },
    // Korean
    ko: {
        translation: koTranslation
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Set default language here
    fallbackLng: "ger",
    interpolation: {
        escapeValue: false
    }
}).then(r => console.log(r));

export default i18n;
