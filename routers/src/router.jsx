import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "./MultiPages/Mainlayout";
import { Home } from "./MultiPages/Home";
import { About } from "./MultiPages/About";
import { Notes } from "./MultiPages/Notes";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout />,
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
				path: "/notes/:name",
				element: <Notes />,
			},
		],
	},
]);
