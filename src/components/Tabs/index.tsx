import { Link } from "react-router-dom";
import useTabMenu from "hooks/useTabMenu";
import Tab from "./Tab";
import "./tabs.scss";

export default function Tabs() {
	const { activeTab, tabsList, lang } = useTabMenu();

	return (
		<div className="TabsBlock">
			{tabsList.map((tab) => (
				<Link to={tab.url} className="navLink" key={tab.tabId}>
					<Tab tab={tab} active={`/${activeTab}` === tab.url}>
						{lang(tab.tabId)}
					</Tab>
				</Link>
			))}
		</div>
	);
}
