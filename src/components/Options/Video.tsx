import { useTranslation } from "react-i18next";
import Select from "components/ui/Select";
import ServerSelect from "components/ui/SelectServer";
import { useState } from "react";

const videoCardList = [
	{ id: 0, title: "NVIDIA GeForce RTX 4090 24GR Гнездо #1" },
	{ id: 1, title: "NVIDIA GeForce 3050 8GR Гнездо #2" },
];

const resolutionList = [
	{ id: 0, title: "640х480" },
	{ id: 1, title: "720х480" },
	{ id: 2, title: "720х576" },
	{ id: 3, title: "800х600" },
	{ id: 4, title: "640х480" },
	{ id: 5, title: "720х480" },
	{ id: 6, title: "720х576" },
	{ id: 7, title: "800х600" },
	{ id: 8, title: "640х480" },
	{ id: 9, title: "720х480" },
	{ id: 10, title: "720х576" },
	{ id: 11, title: "800х600" },
	{ id: 12, title: "640х480" },
	{ id: 13, title: "720х480" },
	{ id: 14, title: "720х576" },
	{ id: 15, title: "800х600" },
];

const serversList = [
	{ id: 0, title: "Cerberus x4", status: "Online", slots: [1, 7] },
	{ id: 1, title: "Cerberus x1", status: "Offline", slots: [1, 5] },
	{ id: 2, title: "Cerberus test", status: "Offline", slots: [100, 100] },
];

const gatewaysList = [
	{ id: 0, title: "AUTO" },
	{ id: 1, title: "Шлюз №1. Задержка ~58ms" },
	{ id: 2, title: "Шлюз №1. Задержка ~58ms" },
	{ id: 3, title: "Шлюз №1. Задержка ~58ms" },
];

export default function Video() {
	const { t } = useTranslation();
	const [selectId, setSelectId] = useState("");

	const selectOpenHandler = (value: string) => {
		if (selectId === value) {
			setSelectId("");
		} else {
			setSelectId(value);
		}
	};

	return (
		<div className="VideoBlock">
			<div className="video">
				<div className="content text">{t("options_video_block_content")}</div>
				<Select
					data={videoCardList}
					style={{ zIndex: 60 }}
					id="card"
					isOpen={selectId === "card" ? true : false}
					onClick={selectOpenHandler}
				/>
				<Select
					data={resolutionList}
					id="resolution"
					isOpen={selectId === "resolution" ? true : false}
					style={{ zIndex: 59 }}
					onClick={selectOpenHandler}
				/>
			</div>

			<div className="video">
				<div className="content text">{t("options_server_block_content")}</div>
				<ServerSelect
					data={serversList}
					id="servers"
					isOpen={selectId === "servers" ? true : false}
					style={{ zIndex: 58, top: 42 }}
					onClick={selectOpenHandler}
				/>
				<Select
					data={gatewaysList}
					id="gateway"
					isOpen={selectId === "gateway" ? true : false}
					style={{ zIndex: 57 }}
					onClick={selectOpenHandler}
				/>
			</div>
		</div>
	);
}
