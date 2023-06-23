import Button from "components/ui/Button";
import Checkbox from "components/ui/Checkbox";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

export default function Other() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const exceptionsBtnHandler = () => {
		navigate("/options/exceptions");
	};
	return (
		<div className="OtherBlock">
			<LanguageSwitch />
			<Checkbox>{t("options_checkbox_window")}</Checkbox>
			<Checkbox>{t("options_checkbox_mouse")}</Checkbox>
			<Checkbox currentState={true}>{t("options_checkbox_textures")}</Checkbox>
			<Checkbox>{t("options_checkbox_music")}</Checkbox>
			<Checkbox>{t("options_checkbox_sound")}</Checkbox>
			<Checkbox>{t("options_checkbox_update")}</Checkbox>
			<div className="content text">{t("options_exceptions_text")}</div>
			<Button
				icon={faClipboardList}
				onClick={exceptionsBtnHandler}
				style={{ fontSize: 15 }}
			>
				{t("options_exceptions_btn")}
			</Button>
		</div>
	);
}
