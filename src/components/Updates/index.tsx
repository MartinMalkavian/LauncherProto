import { useState } from "react";
import { UpdateType } from "interface/updatesTypes";
import Button from "components/ui/Button";
import { useTranslation } from "react-i18next";
import "./updates.scss";
import { useDispatch } from "react-redux";
import { clearAppStatus, updateAppStatus } from "store/slices/appSlice";

const initData: UpdateType[] = [
	{
		title: "Обновление 1.4.0",
		url: "/",
		date: "22.12.2022",
		fixList: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
		],
	},
	{
		title: "Обновление 1.3.7",
		url: "/",
		date: "14.12.2022",
		fixList: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
		],
	},
	{
		title: "Обновление 1.3.4",
		url: "/",
		date: "01.12.2022",
		fixList: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
		],
	},
	{
		title: "Обновление 1.3.1",
		url: "/",
		date: "25.11.2022",
		fixList: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos!",
		],
	},
];

export default function Updates() {
	const dispatch = useDispatch();
	const [progressStatus, setProgressStatus] = useState(-1);
	const { t } = useTranslation();

	const updateHandler = () => {
		if (progressStatus > -1) {
			return;
		}
		dispatch(updateAppStatus("update"));
		let status = 0;
		const timer = setInterval(() => {
			status++;
			setProgressStatus(status);
			if (status >= 100) {
				clearInterval(timer);
				setProgressStatus(-1);
				dispatch(clearAppStatus());
			}
		}, 100);
	};

	return (
		<div className="UpdatesBlock">
			<div className="FixClientBlock">
				<div className="CurrentVersionBlock">
					<div className="currentVersion title">
						{t("update_current_client_version")} 1.4.0{` `}
						<a href={initData[0].url} target="_blank" rel="noreferrer">
							{t("update_more")}
						</a>
					</div>
					<div className="currentDate subTitle">
						{t("update_date")} 22.12.2022
					</div>
				</div>
				<Button
					style={{ fontSize: 15, width: 187, height: 31 }}
					onClick={updateHandler}
				>
					{t("update_fix_client")}
				</Button>
			</div>

			<div
				className={`progressBar${
					progressStatus > -1 && progressStatus < 100 ? " active" : ""
				}`}
			>
				<div
					className="bar"
					style={{ width: progressStatus === -1 ? 0 : `${progressStatus}%` }}
				></div>
			</div>

			<div className="UpdatesNewsBlock">
				{initData.map((description, index) => (
					<div className="UpdateDescriptionBlock" key={`description_${index}`}>
						<div className="title">
							{description.title}{" "}
							<a href={description.url} target="_blank" rel="noreferrer">
								{t("update_more")}
							</a>
						</div>
						<div className="subTitle">
							{t("update_date")} {description.date}
						</div>
						<div className="fixList text">
							<ul>
								{description.fixList.map((fix, fixIndex) => (
									<li key={`fixList_${index}_${fixIndex}`}>{fix}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
