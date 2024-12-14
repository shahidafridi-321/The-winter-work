import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { phonebookRouter } from "./phonebook/PhonebookRoutes";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={phonebookRouter} />
	</StrictMode>
);
