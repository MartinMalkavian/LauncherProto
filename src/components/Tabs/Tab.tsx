import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabType } from "interface/tabsTypes";

type propsType = {
	children: string;
	tab: TabType;
	active: boolean;
};

export default memo(function Tab({ children, tab, active }: propsType) {
	return (
		<div className={`tab ${active ? "active" : ""}`}>
			<div className="tabText title">{children}</div>
			<div className="tabIcon">
				<FontAwesomeIcon icon={tab.icon} size="2xl" />
			</div>
		</div>
	);
});
