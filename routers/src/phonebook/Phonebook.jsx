import React, { useEffect, useState } from "react";
import { getAll } from "./phonebookMethods";
import { useLoaderData } from "react-router-dom";

export const Phonebook = () => {
	/* const [data, setData] = useState(null);

	useEffect(() => {
		getAll().then((data) => setData(data));
	}, []); */

	const data = useLoaderData();
	return (
		<div>
			{data && (
				<ul>
					{data.map((data) => (
						<li key={data.id}>
							Name : {data.name} , Phone :  {data.number}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
