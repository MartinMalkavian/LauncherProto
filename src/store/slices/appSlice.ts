import { createSlice } from "@reduxjs/toolkit";

type InitType = {
	status?: string;
};

const initialState: InitType = {
	status: undefined,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		updateAppStatus: (state, { payload }) => {
			state.status = payload;
		},
		clearAppStatus: (state) => {
			state.status = undefined;
		},
	},
});

const { reducer, actions } = appSlice;
export const { updateAppStatus, clearAppStatus } = actions;
export default reducer;
