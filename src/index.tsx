import ReactDOM from "react-dom/client";
import ReduxStore from "store";
import locales from "locales";
import App from "./app/App";
import "assets/css/index.scss";
import { Suspense } from "react";
import Loading from "components/ui/LoadingData";

locales();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<ReduxStore>
		<Suspense fallback={<Loading />}>
			<App />
		</Suspense>
	</ReduxStore>
);
