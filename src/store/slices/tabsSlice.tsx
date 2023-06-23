import { createSlice } from "@reduxjs/toolkit";
import {
	faNewspaper,
	faDownload,
	faCrown,
	faUserCog,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { TabsType } from "interface/tabsTypes";

const initialState: TabsType = {
	activeTab: "tabs_news",
	tabsList: [
		{ tabId: "tabs_news", icon: faNewspaper, url: "/" },
		{ tabId: "tabs_updates", icon: faDownload, url: "/updates" },
		{ tabId: "tabs_rating", icon: faCrown, url: "/ratings" },
		{ tabId: "tabs_account", icon: faUserCog, url: "/about" },
		{ tabId: "tabs_options", icon: faCogs, url: "/options" },
	],
};

const tabsSlice = createSlice({
	name: "tabs",
	initialState,
	reducers: {
		updateTab: (state, { payload }) => {
			state.activeTab = payload;
		},
	},
});

const { reducer, actions } = tabsSlice;
export const { updateTab } = actions;
export default reducer;
