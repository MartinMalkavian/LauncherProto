import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./css/index.scss";
import { useState } from "react";

import { AddAccountStateType } from "interface/accountSliceTypes";
import AccountCode from "./AccountCode";
import AccountTitle from "./AccountTitle";
import AccountList from "./AccountList";

export default function AccountsPage() {
	const { t } = useTranslation();
	const [accountListState, setAccountListState] =
		useState<AddAccountStateType>();

	const addAccountHandler = (state: AddAccountStateType) => {
		setAccountListState(state);
	};

	let page = <></>;
	switch (accountListState) {
		default:
			page = <AccountList addAccountHandler={addAccountHandler} />;
			break;
		case "code":
			page = <AccountCode updateAddAccountState={addAccountHandler} />;
			break;
		case "title":
			page = <AccountTitle updateAddAccountState={addAccountHandler} />;
			break;
	}

	return (
		<div className="LoginBlock">
			<div className="header">
				<img src="/images/logo.png" alt="logo" />
				<img src="/images/logo_text.png" alt="RF-ONLINE CERBERUS" />
			</div>
			<div className="body">{page}</div>
			<div className="footer subTitle">
				<FontAwesomeIcon icon={faDownload} /> {t("account_current_version")}{" "}
				1.4.0
			</div>
		</div>
	);
}
