import RaceIcon from "components/ui/RaceIcon";
import { characterSliceType } from "interface/accountSliceTypes";
import { useTranslation } from "react-i18next";

export default function Character({ char }: { char: characterSliceType }) {
	const { t } = useTranslation();

	return (
		<div className="characterTable" key={char.id}>
			<div className="text">{char.name}</div>
			<div className="text">
				{char.sellRestrictionDate ? (
					<span style={{ color: "#CF4A4A" }}>
						{`${t("character_sell_denied")} ${char.sellRestrictionDate}`}
					</span>
				) : (
					t("character_sell_allowed")
				)}
			</div>
			<div className="text">{<RaceIcon race={char.race} />}</div>
			<div className="text">{char.level}</div>
		</div>
	);
}
