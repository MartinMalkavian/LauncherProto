import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "components/ui/LoadingData";
import "./rootPage.scss";

const AccountsPage = lazy(() => import("components/AccountsList"));
const AppSystemBtns = lazy(() => import("components/SystemButtons"));
const Tabs = lazy(() => import("components/Tabs"));

export default function RootPage() {
	return (
		<>
			<section id="Left">
				<AccountsPage />
			</section>
			<section id="SysBtns">
				<AppSystemBtns />
			</section>
			<section id="MenuTabs">
				<Tabs />
			</section>
			<section id="Outlet">
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</section>
		</>
	);
}
