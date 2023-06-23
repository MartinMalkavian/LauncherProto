import { useParams } from "react-router-dom";
import AccountDescription from "./AccountDescription";
// import "./account.scss";
import "./css/index.scss";
import { useTranslation } from "react-i18next";

export default function AboutAccount() {
	const { i18n } = useTranslation();
	const { id } = useParams();

	if (id === undefined) {
		return (
			<div
				className={`aboutDummy ${
					i18n.language === "ru" ? "dummy_ru" : "dummy_en"
				}`}
			></div>
		);
	}

	return <AccountDescription id={+id} />;
}
