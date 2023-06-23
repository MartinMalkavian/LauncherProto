import { accountsSliceType } from "interface/accountSliceTypes";
import Character from "./Character";
import { useTranslation } from "react-i18next";

export default function CharactersList({
	account,
}: {
	account: accountsSliceType;
}) {
	const { t } = useTranslation();

	return (
		<>
			<div className="characterTable header">
				<div className="subTitle">{t("character_name")}</div>
				<div className="subTitle">{t("character_sell")}</div>
				<div className="subTitle">{t("character_race")}</div>
				<div className="subTitle">{t("character_level")}</div>
			</div>
			<div className="characterList">
				{account.characters.length > 0 ? (
					account.characters.map((char) => (
						<Character char={char} key={char.name} />
					))
				) : (
					<div className="charactersEmpty title">
						{t("character_no_character")}
					</div>
				)}
			</div>
		</>
	);
}
