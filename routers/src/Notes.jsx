import React from "react";

export const Notes = ({ note, important, toggleImportance }) => {
	return (
		<li>
			{note}
			<button onClick={toggleImportance}>
				{important ? "Make Not important " : "Make Important"}
			</button>
		</li>
	);
};
