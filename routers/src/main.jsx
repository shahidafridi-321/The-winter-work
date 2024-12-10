import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Display } from "./Display";
import Phonebook from "./PhoneBook";
import { Image } from "./Image";
import Profile from "./Profle";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Profile  delay={1000}/>
	</StrictMode>
);
