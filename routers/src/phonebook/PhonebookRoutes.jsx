import { Phonebook } from "./Phonebook";
import { createBrowserRouter } from "react-router-dom";
import { getAll } from "./phonebookMethods";
export const phonebookRouter = createBrowserRouter([
	{
		index: true,
		path: "/",
		element: <Phonebook />,
		loader: getAll,
	},
]);
