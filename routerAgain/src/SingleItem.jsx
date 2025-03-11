import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const SingleItem = () => {
	const item = useLoaderData();
	return (
		<div>
			<p>{item.name}</p>
			<p>{item.email}</p>
			<p>{item.phone}</p>
		</div>
	);
};

export const getSingleItemDetails = async ({ params }) => {
	const { id } = params;
	const singleItem = await fetch(`http://localhost:4000/data/${id}`);
	return singleItem.json();
};
