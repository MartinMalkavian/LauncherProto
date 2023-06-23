import { TFunction } from "i18next";
import { MessageModalType } from "interface/messageModalTypes";

export const disconnectMsg = (
	language: TFunction<"translation", undefined, "translation">,
	onSubmit: () => void,
	account: string
): MessageModalType => {
	return {
		icon: "OfflineIcon",
		title: language("error_disconnect_title"),
		description: `${language(
			"error_disconnect_description_1"
		)} ${account}${language("error_disconnect_description_2")}`,
		buttons: [
			{ title: language("error_disconnect_submit"), onClickHandler: onSubmit },
		],
	};
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

export const queueMsg = (
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

export const banMsg = (
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

export const maintenanceMsg = (
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

export const connectionErrorMsg = (
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
