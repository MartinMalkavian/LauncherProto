import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import optionsSlice from "./slices/optionsSlice";
import accountsSlice from "./slices/accountsSlice";
import tabsSlice from "./slices/tabsSlice";
import appSlice from "./slices/appSlice";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
	reducer: {
		options: optionsSlice,
		accounts: accountsSlice,
		tabs: tabsSlice,
		app: appSlice,
		news: newsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function ReduxStore({ children }: { children: JSX.Element }) {
	return <Provider store={store}>{children}</Provider>;
}
