import { memo } from "react";
import "./queue.scss";

export default memo(function QueueIcon() {
	return (
		<div className="iconBlock">
			<div className="ellipse"></div>
			<div className="iconCircle">
				<div className="clock"></div>
				<div className="loginQueueIcon"></div>
				<div className="loginQueueIcon2"></div>
			</div>
		</div>
	);
});
