export type MessageButtonType = {
	title: string;
	onClickHandler: (params?: any) => void;
	params?: any;
};

export type IconType =
	| "BannedIcon"
	| "ConnectionIcon"
	| "MaintenanceIcon"
	| "OfflineIcon"
	| "QueueIcon"
	| "UpdateIcon";

export type MessageModalType = {
	icon?: IconType;
	title: string;
	description: string | JSX.Element | null;
	buttons: MessageButtonType[];
};
