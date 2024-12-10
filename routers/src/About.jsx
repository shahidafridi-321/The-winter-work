import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
	return (
		<div>
			<h1>This is About page</h1>
			<Link to="/">Go back</Link>
		</div>
	);
};
