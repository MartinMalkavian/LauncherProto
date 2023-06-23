import { memo } from "react";
import "./update.scss";

export default memo(function UpdateIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="updateIcon"></div>
			</div>
		</div>
	);
});
