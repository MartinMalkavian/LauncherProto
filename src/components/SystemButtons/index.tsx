import "./appSystemBtns.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AppSystemBtns() {
	const minimizeBtnHandler = () => {};
	const closeBtnHandler = () => {};

	return (
		<div className="SystemBtnsBlock">
			<div className="closeBtn" onClick={closeBtnHandler}>
				<FontAwesomeIcon icon={faXmark} size="2xl" />
			</div>
			<div className="minimizeBtn" onClick={minimizeBtnHandler}>
				<FontAwesomeIcon icon={faMinus} size="2xl" />
			</div>
		</div>
	);
}
