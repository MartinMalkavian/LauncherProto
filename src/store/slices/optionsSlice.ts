import { createSlice } from "@reduxjs/toolkit";
import {
	OptionsType,
	graphicsType,
	otherType,
	serverType,
} from "interface/optionSliceTypes";

const dummyFilesData = [
	"R3Engine.ini",
	"DataTableKeyMap.dat",
	"DataTableKeyMap_NKM.dat",
	"DataTableGameSetting.ini",
	"CharacterNpcBoneNEUTRALA_COINEXCHANGE_000.BBX",
	"Chef\\recallisisShield_04SHIELD.r3m",
	"Chef\\75LV_WeaponsRKNIFETHROW_136electricity_01MainMaterial.mst",
	"R3Engine.ini",
	"DataTableKeyMap.dat",
	"DataTableKeyMap_NKM.dat",
	"DataTableGameSetting.ini",
	"CharacterNpcBoneNEUTRALA_COINEXCHANGE_000.BBX",
	"Chef\\recallisisShield_04SHIELD.r3m",
	"Chef\\75LV_WeaponsRKNIFETHROW_136electricity_01MainMaterial.mst",
	"R3Engine.ini",
	"DataTableKeyMap.dat",
	"DataTableKeyMap_NKM.dat",
	"DataTableGameSetting.ini",
	"CharacterNpcBoneNEUTRALA_COINEXCHANGE_000.BBX",
	"Chef\\recallisisShield_04SHIELD.r3m",
	"Chef\\75LV_WeaponsRKNIFETHROW_136electricity_01MainMaterial.mst",
];

const initialState: OptionsType = {
	graphics: {
		videoCardId: 0,
		resolutionId: 0,
		textureSlider: 0,
		gammaSlider: 0,
		glowSlider: 0,
		radiusSlider: 0,
		shadowsSlider: 0,
	},
	server: {
		serverId: 0,
		gatewayId: 0,
	},
	other: {
		window: false,
		mouse: false,
		textures: false,
		music: false,
		sound: false,
		update: false,
	},
	files: dummyFilesData,
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		setGraphicsOptions: (
			state,
			{ payload }: { payload: { type: keyof graphicsType; value: number } }
		) => {
			state.graphics[payload.type] = payload.value;
		},
		setServerOptions: (
			state,
			{ payload }: { payload: { type: keyof serverType; value: number } }
		) => {
			state.server[payload.type] = payload.value;
		},
		setOtherOptions: (
			state,
			{ payload }: { payload: { type: keyof otherType } }
		) => {
			state.other[payload.type] = !state.other[payload.type];
		},
		addToFilesExceptions: (
			state,
			{ payload }: { payload: { filePath: string } }
		) => {
			state.files.push(payload.filePath);
		},
		removeFromFilesExceptions: (
			state,
			{ payload }: { payload: { fileId: number } }
		) => {
			state.files = state.files.filter((_, index) => index !== payload.fileId);
		},
	},
});

const { reducer, actions } = optionsSlice;
export const {
	setGraphicsOptions,
	setServerOptions,
	setOtherOptions,
	addToFilesExceptions,
	removeFromFilesExceptions,
} = actions;
export default reducer;
