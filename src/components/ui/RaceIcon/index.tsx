import { memo } from "react";
import "./icons.scss";

type PropsType = {
	race: number;
};

export default memo(function RaceIcon({ race }: PropsType) {
	let raceName = "bellato";

	switch (race) {
		case 0:
			raceName = "bellato";
			break;
		case 1:
			raceName = "cora";
			break;
		case 2:
			raceName = "acretia";
			break;
	}

	return <div className={raceName}></div>;
});
