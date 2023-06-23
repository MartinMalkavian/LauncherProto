import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const RootPage = lazy(() => import("components/RootPage"));
const News = lazy(() => import("components/News"));
const Updates = lazy(() => import("components/Updates"));
const Ratings = lazy(() => import("components/Rating"));
const AboutAccount = lazy(() => import("components/AboutAccount"));
const Options = lazy(() => import("components/Options"));
const Exceptions = lazy(() => import("components/FilesExceptionList"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,

		children: [
			{
				path: "/",
				element: <News />,
			},
			{
				path: "updates",
				element: <Updates />,
			},
			{
				path: "ratings",
				element: <Ratings />,
			},
			{
				path: "about",
				element: <AboutAccount />,
			},
			{
				path: "about/:id",
				element: <AboutAccount />,
			},
			{
				path: "options",
				element: <Options />,
			},
			{
				path: "options/exceptions",
				element: <Exceptions />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
