import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type TabType = {
	tabId: string;
	icon: IconDefinition;
	url: string;
};

export type TabsType = {
	activeTab: string;
	tabsList: TabType[];
};
