import { createSlice } from "@reduxjs/toolkit";
import { NewsType } from "interface/newsTypes";

const initialState: NewsType[] = [];

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		newsAdd: (_, { payload }) => {
			return payload;
		},
	},
});

const { reducer, actions } = newsSlice;
export const { newsAdd } = actions;
export default reducer;
