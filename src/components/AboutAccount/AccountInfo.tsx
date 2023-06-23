import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accountsSliceType } from "interface/accountSliceTypes";
import {
	faStarHalfAlt,
	faUserLock,
	faVolumeMute,
	faCoins,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function AccountInfo({
	account,
}: {
	account: accountsSliceType;
}) {
	const { t } = useTranslation();

	let accountOnlineStatus;
	switch (account.status) {
		default:
			accountOnlineStatus = t("account_info_offline");
			break;
		case 1:
			accountOnlineStatus = <span>{t("account_info_this_pc")}</span>;
			break;
		case 2:
			accountOnlineStatus = <span>{t("account_info_another_pc")}</span>;
			break;
	}

	return (
		<>
			<div className="accountInfo">
				<div className="subTitle">
					<FontAwesomeIcon icon={faStarHalfAlt} />
					{t("account_info_premium")}
					{account.premiumStatus === 1 ? (
						<span>
							{t("account_info_prem_expire")} {account.premiumEndDate}
						</span>
					) : (
						t("account_info_none")
					)}
				</div>
				<div className="subTitle">
					<FontAwesomeIcon icon={faUserLock} /> {t("account_info_ban")}
					{account.banStatus === 2 ? (
						<span>
							{t("account_info_ban_expire")} {account.banEndDate}
						</span>
					) : (
						t("account_info_none")
					)}
				</div>
				<div className="subTitle">
					<FontAwesomeIcon icon={faVolumeMute} /> {t("account_info_chat")}
					{account.banStatus === 1 ? (
						<span>
							{t("account_info_chat_expire")} {account.banEndDate}
						</span>
					) : (
						t("account_info_none")
					)}
				</div>

				<div className="subTitle">
					<FontAwesomeIcon icon={faCoins} /> Cash Shop: {` ${account.cashShop}`}
				</div>
			</div>
			<div className="currentStatus ">
				<div className="subTitle">
					<FontAwesomeIcon icon={faInfoCircle} /> {t("account_info_status")}
					{accountOnlineStatus}
				</div>
			</div>
		</>
	);
}
