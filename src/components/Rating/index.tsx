import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RatingTabsType } from "interface/ratingTypes";
import { useRating } from "hooks/useRating";
import RatingTable from "components/Rating/RatingTable";
import RatingTabs from "./RatingTabs";
import Loading from "components/ui/LoadingData";
import Error from "components/ui/ErrorData";
import NoData from "components/ui/NoData";
import "./rating.scss";

export default function Ratings() {
	const [tab, setTab] = useState<RatingTabsType>("level");
	const { t } = useTranslation();

	const { data, isLoading, error } = useRating(tab);

	const tabHandler = (id: RatingTabsType) => {
		setTab(id);
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <Error error={error} />;
	}

	return (
		<div className="RatingBlock">
			<div className="RatingTabsBlock subTitle">
				<RatingTabs
					isActive={tab === "level"}
					onClick={tabHandler}
					type="level"
				>
					{t("rating_tab_level")}
				</RatingTabs>
				<RatingTabs
					isActive={tab === "status"}
					onClick={tabHandler}
					type="status"
				>
					{t("rating_tab_status")}
				</RatingTabs>
				<RatingTabs isActive={tab === "pvp"} onClick={tabHandler} type="pvp">
					{t("rating_tab_pvp")}
				</RatingTabs>
			</div>
			<div className="RatingTableBlock text">
				<div className="ratingHeader">
					<div>{t("rating_table_place")}</div>
					<div>{t("rating_table_name")}</div>
					<div>{t("rating_table_race")}</div>
					<div>{t(`rating_table_${tab}`)}</div>
					<div>{t("rating_table_time")}</div>
					<div>{t("rating_table_date")}</div>
				</div>
				{!data ? (
					<NoData />
				) : (
					data.map((row, index) => (
						<RatingTable
							row={row}
							place={index}
							sort={tab}
							key={`${row.name}_${index}`}
						/>
					))
				)}
			</div>
		</div>
	);
}
