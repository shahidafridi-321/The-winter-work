import { Mainlayout } from "./Mainlayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout />,
	},
]);
