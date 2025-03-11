import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "./MultiPages/Mainlayout";
import { Home } from "./MultiPages/Home";
import { About } from "./MultiPages/About";
import { Notes } from "./MultiPages/Notes";
import { Errorpage } from "./MultiPages/Errorpage";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout />,
		errorElement: <Errorpage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/notes",
				element: <Notes />,
				children: [
					{
						path: "/notes/:name",
						element: <Notes />,
					},
				],
			},
		],
	},
]);
