import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "store";
import { updateTab } from "store/slices/tabsSlice";

export default function useTabMenu() {
	const dispatch = useDispatch();
	const { activeTab, tabsList } = useSelector((state: RootState) => state.tabs);
	const { t: lang } = useTranslation();
	let path = useLocation().pathname.replace("/", "");

	useEffect(() => {
		if (path !== activeTab) {
			dispatch(updateTab(path.split("/")[0]));
		}
	}, [path, activeTab, dispatch]);

	return { lang, activeTab, tabsList };
}
