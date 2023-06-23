import { memo, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsType = {
	children: string;
	onClick?: (state: boolean) => void;
	currentState?: boolean;
	className?: string;
};

export default memo(function Checkbox({
	children,
	onClick,
	currentState = false,
	className,
}: PropsType) {
	const [checkbox, setCheckbox] = useState(currentState);

	let c = `checkbox`;

	if (checkbox) {
		c += " checked";
	}

	if (className) {
		c += " " + className;
	}

	const checkboxHandler = () => {
		setCheckbox((prev) => !prev);

		if (onClick) {
			onClick(checkbox);
		}
	};

	return (
		<div className="checkboxBlock" onClick={checkboxHandler}>
			<div className={c}>
				{checkbox && <FontAwesomeIcon icon={faCheck} size="xs" />}
			</div>
			<div className="label">{children}</div>
		</div>
	);
});
