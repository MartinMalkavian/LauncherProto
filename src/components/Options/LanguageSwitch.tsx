import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
	const { i18n } = useTranslation();
	const lang = useRef<HTMLDivElement>(null);

	const changeLanguageHandler = () => {
		if (!lang.current) {
			return;
		}
		const local = i18n.language === "ru" ? "en" : "ru";
		i18n.changeLanguage(local);
		if (local === "ru") {
			lang.current.style.backgroundPositionX = `-165px`;
		} else {
			lang.current.style.backgroundPositionX = `0px`;
		}
	};

	return (
		<div
			className={`langSwitch ${i18n.language}`}
			onClick={changeLanguageHandler}
			ref={lang}
		></div>
	);
}
