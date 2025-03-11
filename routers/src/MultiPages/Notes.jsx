import React from "react";
import { notes } from "../notes";
import { useParams } from "react-router-dom";
export const Notes = () => {
	const { name } = useParams();

	const note = notes.find((note) => note.id == name);

	return (
		<div>
			<ul>
				{!name || name == "all" ? (
					notes.map((note) => (
						<li key={note.id}>
							{note.content}{" "}
							<button>{note.important ? "Important" : "Not Important"}</button>
						</li>
					))
				) : (
					<li>
						{note.content}{" "}
						<button>{note.important ? "Important" : "Not Important"}</button>
					</li>
				)}
			</ul>
		</div>
	);
};
