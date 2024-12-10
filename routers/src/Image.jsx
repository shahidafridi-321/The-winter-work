import { useState, useEffect } from "react";

import React from "react";

const useImageUrl = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("Server Error");
				}
				return response.json();
			})
			.then((response) => setImageUrl((prev) => response[2].url))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return {
		imageUrl,
		error,
		loading,
	};
};

export const Image = () => {
	const {imageUrl, error, loading} = useImageUrl();
	if (loading) return <p>Loading....</p>;
	if (error) return <p>A network error was encountered</p>;

	return (
		<>
			<h1>An image</h1>
			<img src={imageUrl} alt="image" />
		</>
	);
};
