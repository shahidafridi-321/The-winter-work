import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
	RouterProvider,
	createBrowserRouter,
	Navigate,
} from "react-router-dom";
import { Home } from "./Home.jsx";
import { Contact } from "./Contact.jsx";
import { About } from "./About.jsx";
import { SingleItem } from "./SingleItem.jsx";
import { getSingleItemDetails } from "./SingleItem.jsx";
import { Auth } from "./Auth.jsx";
import { MyApp } from "./MyApp.jsx";
import { HeadingApp } from "./HeadingApp.jsx";
const isLoggedIn = true;

const routes = createBrowserRouter([
	{
		path: "/",
		element: isLoggedIn ? <App /> : <Navigate to="/auth" />,
		children: [
			{
				path: "/home",
				element: /* isLoggedIn ? <Home /> : <Navigate to="/auth" /> */ <Home />,
				index: true,
			},
			{
				path: "/about",
				element: (
					<About />
				) /* isLoggedIn ? <About /> : <Navigate to="/auth" /> */,
			},
			{
				path: "/contact",
				element: (
					<Contact />
				) /* isLoggedIn ? <Contact /> : <Navigate to="/auth" /> */,
			},
			{
				path: "/contact/:id",
				element: (
					<SingleItem />
				) /* isLoggedIn ? <SingleItem /> : <Navigate to="/auth" /> */,
				loader: getSingleItemDetails,
			},
		],
	},
	{
		path: "/auth",
		element: isLoggedIn ? <Navigate to="/" /> : <Auth />,
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HeadingApp />
	</StrictMode>
);
