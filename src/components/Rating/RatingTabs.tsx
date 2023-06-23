import { RatingTabsType } from "interface/ratingTypes";

export default function RatingTabs({
	children,
	type,
	isActive,
	onClick,
}: {
	children: string;
	type: RatingTabsType;
	isActive: boolean;
	onClick: (value: RatingTabsType) => void;
}) {
	return (
		<div
			className={`ratingTab ${isActive && "active"}`}
			onClick={() => onClick(type)}
		>
			{children}
		</div>
	);
}
