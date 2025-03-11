import { Section } from "lucide-react";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const MyApp = () => {
	const [theme, setTheme] = useState("light");
	return (
		<ThemeContext.Provider value={theme}>
			<Form />
			<label>
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
				/>
			</label>
		</ThemeContext.Provider>
	);
};

const Form = ({ children }) => {
	return (
		<Panel title="welcome">
			<Button>Log in</Button>
			<Button>Sign up</Button>
		</Panel>
	);
};

const Panel = ({ title, children }) => {
	const theme = useContext(ThemeContext);
	const className = "panel-" + theme;
	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	);
};

const Button = ({ children }) => {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme;
	return <button className={className}>{children}</button>;
};
