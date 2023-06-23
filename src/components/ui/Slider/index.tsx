import { CSSProperties, memo } from "react";
import { ChangeEvent, useState } from "react";
import "./sliders.scss";

type PropsType = {
	children: string;
	pointsNumber: number;
	current: number;
	onChange: (value: number) => void;
	style?: CSSProperties;
	className?: string;
};

type BgLimitsType = {
	[key: number]: number[];
};

const bgLimits: BgLimitsType = {
	3: [0, 50, 100],
	4: [0, 34, 66, 100],
	6: [0, 22, 40, 60, 79, 100],
};

export default memo(function Slider({
	children,
	pointsNumber,
	current,
	onChange,
	style,
	className,
}: PropsType) {
	const [params, setParams] = useState({
		sliderValue: current,
		bgLength: bgLimits[pointsNumber][current],
	});

	const sliderChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setParams({
			sliderValue: +e.target.value,
			bgLength: bgLimits[pointsNumber][+e.target.value],
		});
		onChange(+e.target.value);
	};

	const points = [];
	for (let i = 0; i < pointsNumber; i++) {
		points.push(<div className="point" key={i}></div>);
	}

	return (
		<div className="slider">
			<div className={className ? `label ${className}` : "label"} style={style}>
				{children}
			</div>
			<div className="inputSlider">
				<div className="rangeBg" style={{ width: `${params.bgLength}%` }}></div>
				<input
					type="range"
					min={0}
					max={pointsNumber - 1}
					className="inputRange"
					value={params.sliderValue}
					onChange={(e) => sliderChangeHandler(e)}
				/>
				<div className="sliderPoints">{points}</div>
			</div>
		</div>
	);
});
