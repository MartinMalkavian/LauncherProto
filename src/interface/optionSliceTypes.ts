export type graphicsType = {
	videoCardId: number;
	resolutionId: number;
	textureSlider: number;
	gammaSlider: number;
	glowSlider: number;
	radiusSlider: number;
	shadowsSlider: number;
};

export type serverType = {
	serverId: number;
	gatewayId: number;
};

export type otherType = {
	window: boolean;
	mouse: boolean;
	textures: boolean;
	music: boolean;
	sound: boolean;
	update: boolean;
};

export type OptionsType = {
	graphics: graphicsType;
	server: serverType;
	other: otherType;
	files: string[];
};
