import { CSSProperties, memo, useState } from "react";
import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type PropsType = {
	children: string;
	onClick?: () => void;
	icon?: IconDefinition;
	style?: CSSProperties;
	hoverStyle?: CSSProperties;
	hoverColor?: string;
};

export default memo(function Button({
	children,
	onClick,
	icon,
	style = {},
	hoverStyle,
	hoverColor = "#dea309",
}: PropsType) {
	const [isHovered, setIsHovered] = useState(false);

	const onClickHandler = () => {
		onClick && onClick();
	};

	const hoverHandler = () => {
		setIsHovered((prev) => !prev);
	};

	let mainBgColor: string | number = "";

	mainBgColor = !style.background ? "#ffffff" : style.background;

	if (isHovered) {
		mainBgColor = `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), ${hoverColor}`;
	}

	const hover = hoverStyle && isHovered ? hoverStyle : {};

	const background = mainBgColor;

	const styles = {
		minWidth: 165,
		height: 30,
		fontSize: 17,
		padding: `0 15px`,
		...style,
		background,
		...hover,
	};

	return (
		<div
			onClick={onClickHandler}
			className="button"
			style={styles}
			onMouseOver={hoverHandler}
			onMouseOut={hoverHandler}
			role="button"
		>
			{icon && (
				<div className="icon">
					<FontAwesomeIcon icon={icon} />
				</div>
			)}
			{children}
		</div>
	);
});
