import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Homepage } from "./components/Homepage";
import { Exchanges } from "./components/Exchanges";
import { Cryptocurrencies } from "./components/Cryptocurrencies";
import { CryptoDetails } from "./components/CryptoDetails";
import { News } from "./components/News";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/exchanges",
		element: <Exchanges />,
	},
	{
		path: "/cryptocurrencies",
		element: <Cryptocurrencies />,
	},

	{
		path: "/crpto/:coinId",
		element: <CryptoDetails />,
	},
	{
		path: "/news",
		element: <News />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<App />
	</StrictMode>
);
