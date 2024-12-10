import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
	return (
		<div>
			<h1>This is the Home page</h1>
			<Link to="/">Go Back</Link>
		</div>
	);
};
