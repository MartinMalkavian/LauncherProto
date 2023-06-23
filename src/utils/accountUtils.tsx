import { TFunction } from "i18next";
import { accountsSliceType } from "interface/accountSliceTypes";
import { MessageModalType } from "interface/messageModalTypes";

export const checkAccountStatusUtil = (
	account: accountsSliceType,
	t: TFunction<"translation", undefined, "translation">
) => {
	let message = undefined;

	if (account.banStatus === 2) {
		message = banMsg(t, account.title);
		return message;
	}

	if (account.status === 0) {
		if (Math.random() < 0.3) {
			message = queueMsg(t, 30);
			return message;
		}

		if (Math.random() < 0.3) {
			message = maintenanceMsg(t);
			return message;
		}

		if (Math.random() < 0.3) {
			message = connectionErrorMsg(t);
			return message;
		}
	}

	return message;
};

export const appUpdateMsg = (
	language: TFunction<"translation", undefined, "translation">
): MessageModalType => {
	return {
		icon: "UpdateIcon",
		title: language("error_update_title"),
		description: language("error_update_description"),
		buttons: [],
	};
};

export const disconnectMsg = (
	language: TFunction<"translation", undefined, "translation">,
	onSubmit: (account: accountsSliceType) => void,
	account: accountsSliceType
): MessageModalType => {
	return {
		icon: "OfflineIcon",
		title: language("error_disconnect_title"),
		description: `${language("error_disconnect_description_1")} ${
			account.title
		}${language("error_disconnect_description_2")}`,
		buttons: [
			{
				title: language("error_disconnect_submit"),
				onClickHandler: onSubmit,
				params: account,
			},
		],
	};
};

const banMsg = (
	language: TFunction<"translation", undefined, "translation">,
	account: string
): MessageModalType => {
	return {
		icon: "BannedIcon",
		title:
			language("error_ban_title_1") +
			` ${account} ` +
			language("error_ban_title_2"),
		description: (
			<span>
				{language("error_ban_description_1")}{" "}
				<a
					href="https://cerberus-games.com/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					{language("error_ban_description_2")}
				</a>
			</span>
		),
		buttons: [],
	};
};

const queueMsg = (
	language: TFunction<"translation", undefined, "translation">,
	placeInQueue: number
): MessageModalType => {
	return {
		icon: "QueueIcon",
		title: language("error_queue_title"),
		description: language("error_queue_description") + ` ${placeInQueue}`,
		buttons: [],
	};
};

const maintenanceMsg = (
	language: TFunction<"translation", undefined, "translation">
): MessageModalType => {
	return {
		icon: "MaintenanceIcon",
		title: language("error_maintenance_title"),
		description: (
			<span>
				{language("error_maintenance_description_1")}{" "}
				<a
					href="https://cerberus-games.com/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					{language("error_maintenance_description_2")}
				</a>
			</span>
		),
		buttons: [],
	};
};

const connectionErrorMsg = (
	language: TFunction<"translation", undefined, "translation">
): MessageModalType => {
	return {
		icon: "ConnectionIcon",
		title: language("error_connection_title"),
		description: (
			<span>
				{language("error_connection_description_1")}{" "}
				<a
					href="https://cerberus-games.com/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					{language("error_connection_description_2")}
				</a>
			</span>
		),
		buttons: [],
	};
};
