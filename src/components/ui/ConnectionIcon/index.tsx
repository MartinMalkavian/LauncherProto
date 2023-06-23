import { memo } from "react";
import "./connection.scss";

export default memo(function ConnectionIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="connectionIcon"></div>
			</div>
		</div>
	);
});
