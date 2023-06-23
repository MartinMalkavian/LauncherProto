import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locales/en.json";
import ruTranslation from "../locales/ru.json";

export default function locales() {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources: {
				en: {
					translation: enTranslation,
				},
				ru: {
					translation: ruTranslation,
				},
			},
			lng: "ru",
			fallbackLng: "ru",
			debug: false,
			interpolation: {
				escapeValue: false,
			},
		});
}
