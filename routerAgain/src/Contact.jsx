import React, { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { Link } from "react-router-dom";

export const Contact = () => {
	const { data } = useContext(ContactContext);

	return (
		<div>
			{data.map((item) => (
				<p key={item.id}>
					<Link to={"/contact/" + item.id}>{item.name}</Link>
				</p>
			))}
		</div>
	);
};

/* export const contactLoader = async () => {
	const data = await fetch("http://localhost:4000/data");
	return data.json();
};
 */
