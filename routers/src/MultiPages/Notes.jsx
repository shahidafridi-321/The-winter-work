import React from "react";
import { notes } from "../notes";
import { useParams } from "react-router-dom";
export const Notes = () => {
	const { name } = useParams();
	const note = notes.find((note) => note.id == name);

	return (
		<div>
			<ul>
				<li>{note.content}</li>
			</ul>
		</div>
	);
};
