import { CSSProperties, memo, useRef, useState } from "react";
import {
	faCaretDown,
	faCaretUp,
	faServer,
	faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./selectServer.scss";

type DataType = {
	id: number;
	title: string;
	status: string;
	slots: number[];
};

type PropsType = {
	data: DataType[];
	id: string;
	isOpen: boolean;
	onClick: (value: string) => void;
	maxElements?: number;
	style?: CSSProperties;
};

export default memo(function ServerSelect({
	data,
	id,
	isOpen,
	maxElements = 3,
	style,
	onClick,
}: PropsType) {
	const [selectedId, setSelectedId] = useState(0);
	const selectList = useRef<HTMLDivElement>(null);

	if (selectList.current) {
		const maxHeight = maxElements * 42;
		const listElements = data.length >= maxElements ? maxElements : data.length;
		const heigt = listElements * 42 > maxHeight ? maxHeight : listElements * 42;
		const element = selectList.current;
		if (!isOpen) {
			element.style.height = `0px`;
			element.classList.replace("open", "close");
		} else {
			element.style.height = `${heigt}px`;
			element.classList.replace("close", "open");
		}
	}

	const expandHandler = () => {
		onClick(id);
	};

	const selectHandler = (id: number) => {
		setSelectedId(id);
		expandHandler();
	};

	const selectBlock = (item: DataType, index: number) => {
		return (
			<div
				className="serverDescription smallText"
				key={`server${`${item.title}_${index}`}`}
				onClick={() => selectHandler(item.id)}
			>
				<div className="server">
					<div className="icon">
						<FontAwesomeIcon icon={faServer} size="1x" />
					</div>
					<div className="description">
						{`${item.title}: `}
						<span
							style={{
								color: `${item.status === "Online" ? "#35964D" : "#e62e4c"}`,
								marginLeft: 5,
							}}
						>
							{item.status}
						</span>
					</div>
				</div>
				<div className="slots">
					<div className="icon">
						<FontAwesomeIcon icon={faUserFriends} size="1x" />
					</div>
					<div className="description">
						Slots: {item.slots[0]} Free | {item.slots[1]} Premium
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="SelectElement">
			<div className="block selectServerBlock" onClick={expandHandler}>
				{data
					.filter((item) => item.id === selectedId)
					.map((item, index) => selectBlock(item, index))}
				<div className="expandBtn">
					<FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} size="xl" />
				</div>
			</div>
			<div className={`list close`} ref={selectList} style={style}>
				{data.map((item, index) => selectBlock(item, index))}
			</div>
		</div>
	);
});
