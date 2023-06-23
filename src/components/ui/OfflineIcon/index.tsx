import { memo } from "react";
import "./offlineIcon.scss";

export default memo(function OfflineIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="blow"></div>
				<div className="leftFork"></div>
				<div className="rightFork"></div>
			</div>
		</div>
	);
});
