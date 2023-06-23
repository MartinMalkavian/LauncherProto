import { CSSProperties, memo, useRef, useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./select.scss";

type DataType = {
	id: number;
	title: string;
};

type PropsType = {
	data: DataType[];
	id: string;
	isOpen: boolean;
	onClick: (value: string) => void;
	maxElements?: number;
	style?: CSSProperties;
};

export default memo(function Select({
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
		const heigt = listElements * 30 > maxHeight ? maxHeight : listElements * 30;
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
			<div className="title smallText" key={`${item.title}_${index}`}>
				{item.title}
			</div>
		);
	};

	return (
		<div className="SelectElement">
			<div className="block selectBlock smallText" onClick={expandHandler}>
				{data
					.filter((item) => item.id === selectedId)
					.map((item, index) => selectBlock(item, index))}
				<div className="expandBtn">
					<FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} size="xl" />
				</div>
			</div>
			<div className={`list close`} ref={selectList} style={style}>
				{data.map((item, index) => (
					<div
						className="listRow smallText"
						key={`${index}_${item.title}`}
						onClick={() => selectHandler(item.id)}
					>
						{item.title}
					</div>
				))}
			</div>
		</div>
	);
});
