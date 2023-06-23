import BannedIcon from "components/ui/BannedIcon";
import ConnectionIcon from "components/ui/ConnectionIcon";
import MaintenanceIcon from "components/ui/MaintenanceIcon";
import OfflineIcon from "components/ui/OfflineIcon";
import QueueIcon from "components/ui/QueueIcon";
import UpdateIcon from "components/ui/UpdateIcon";
import { IconType } from "interface/messageModalTypes";

type PropsType = {
	icon?: IconType;
};

export default function CustomIcons({ icon }: PropsType) {
	let element = <></>;
	switch (icon) {
		case "BannedIcon":
			element = <BannedIcon />;
			break;
		case "ConnectionIcon":
			element = <ConnectionIcon />;
			break;
		case "MaintenanceIcon":
			element = <MaintenanceIcon />;
			break;
		case "OfflineIcon":
			element = <OfflineIcon />;
			break;
		case "QueueIcon":
			element = <QueueIcon />;
			break;
		case "UpdateIcon":
			element = <UpdateIcon />;
			break;

		default:
			break;
	}

	return element;
}
