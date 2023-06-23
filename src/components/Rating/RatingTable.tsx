import { memo } from "react";
import { RatingTabsType, RatingType } from "interface/ratingTypes";
import RaceIcon from "components/ui/RaceIcon";

type PropsType = {
	row: RatingType;
	place: number;
	sort: RatingTabsType;
};

export default memo(function RatingTable({ row, place, sort }: PropsType) {
	return (
		<div>
			<div>{place + 1}</div>
			<div>{row.name}</div>
			<div>
				<RaceIcon race={row.race} />
			</div>
			<div>{row[sort]}</div>
			<div>{row.minutes}</div>
			<div>{row.date}</div>
		</div>
	);
});
