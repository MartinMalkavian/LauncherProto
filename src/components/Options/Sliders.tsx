import Slider from "components/ui/Slider";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Sliders() {
	const { t } = useTranslation();

	const textureHandler = useCallback((value: number) => {}, []);
	const gammaHandler = useCallback((value: number) => {}, []);
	const glowHandler = useCallback((value: number) => {}, []);
	const radiusHandler = useCallback((value: number) => {}, []);
	const shadowsHandler = useCallback((value: number) => {}, []);

	return (
		<div className="SlidersBlock">
			<Slider
				pointsNumber={4}
				current={0}
				onChange={textureHandler}
				className="text"
			>
				{t("options_slider_texture_details")}
			</Slider>
			<Slider
				pointsNumber={6}
				current={1}
				onChange={gammaHandler}
				className="text"
			>
				{t("options_slider_gamma")}
			</Slider>
			<Slider
				pointsNumber={3}
				current={1}
				onChange={glowHandler}
				className="text"
			>
				{t("options_slider_glow")}
			</Slider>
			<Slider
				pointsNumber={4}
				current={2}
				onChange={radiusHandler}
				className="text"
			>
				{t("options_slider_view_range")}
			</Slider>
			<Slider
				pointsNumber={4}
				current={3}
				onChange={shadowsHandler}
				className="text"
			>
				{t("options_slider_shadows")}
			</Slider>
		</div>
	);
}
