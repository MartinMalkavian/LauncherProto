import { useSelector } from "react-redux";
import { RootState } from "store";
import { useTranslation } from "react-i18next";

import AccountTitle from "./AccountTitle";
import CharactersList from "./CharactersList";
import AccountInfo from "./AccountInfo";
import AccountButtons from "./AccountButtons";

export default function AccountDescription({ id }: { id: number }) {
	const { t } = useTranslation();

	const account = useSelector((state: RootState) =>
		state.accounts.filter((account) => account.id === id)
	)[0];

	if (!account) {
		return (
			<div className="accountDetailsError bigTitle">
				{t("account_info_no_account")}
			</div>
		);
	}

	return (
		<div className="accountDetails">
			<AccountTitle t={t} account={account} />
			<CharactersList account={account} />
			<AccountInfo account={account} />
			<AccountButtons account={account} t={t} />
		</div>
	);
}
