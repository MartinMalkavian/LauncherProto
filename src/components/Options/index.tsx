import { useTranslation } from "react-i18next";
import Video from "components/Options/Video";
import Sliders from "components/Options/Sliders";
import Other from "components/Options/Other";
import Button from "components/ui/Button";
import "./options.scss";
import "./css/index.scss";

export default function Options() {
	const { t } = useTranslation();

	return (
		<div className="optionsBlock">
			<div className="body">
				<Video />
				<Sliders />
				<Other />
			</div>
			<div className="footer">
				<div className="cancel">
					<Button hoverColor="#9B4848">{t("cancel_btn")}</Button>
				</div>
				<div className="save">
					<Button>{t("save_btn")}</Button>
				</div>
			</div>
		</div>
	);
}
