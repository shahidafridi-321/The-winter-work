import React from "react";
import { Link, useParams } from "react-router-dom";
import { Popeye } from "./Popeye";
import { Spinach } from "./Spinach";

export const Profile = () => {
	const { name } = useParams();
	return (
		<div>
			<h1>This is profile</h1>
			<p>The following thing is rendered here</p>
			<Link to="/profile/popeye">Go to Popeye</Link>
			<hr />
			{name === "popeye" ? (
				<Popeye />
			) : name === "spinach" ? (
				<Spinach />
			) : (
				<p>Not Found</p>
			)}
		</div>
	);
};
