import React from "react";
import { Link } from "react-router-dom";
const styles = {
	background: "black",
	color: "red",
	textAlign: "center",
	paddingTop: "20px",
	paddingBottom: "20px",
	paddingLeft: "20px",
	paddingRight: "20px",
	display: "flex",
	justifyContent: "space-between",
};

const navigations = ["Home", "About", "Contact"];
export const Navbar = () => {
	return (
		<div>
			<ul style={styles}>
				{navigations.map((nav) => (
					<li key={nav}>
						<Link to={nav}>{nav}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
