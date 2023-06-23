import { memo } from "react";
import "./bannedAccount.scss";

export default memo(function BannedIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="bannedIcon"></div>
			</div>
		</div>
	);
});
