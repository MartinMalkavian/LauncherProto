import { memo } from "react";
import "./maintenance.scss";

export default memo(function MaintenanceIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="serverMaintenanseIcon"></div>
			</div>
		</div>
	);
});
