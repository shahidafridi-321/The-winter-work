import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile } from "./Profile";
import { Popeye } from "./Popeye";
import { Spinach } from "./Spinach";
const router = createBrowserRouter([
	{
		path: "profile",
		element: <Profile />,
	},
	{
		path: "profile/:name",
		element: <Profile />,
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
