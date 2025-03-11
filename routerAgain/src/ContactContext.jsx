import { createContext, useEffect, useState } from "react";
export const ContactContext = createContext({});

export const ContactContextProvider = ({ children }) => {
	const [data, setdata] = useState([]);

	const fetchData = async () => {
		const response = await fetch("http://localhost:4000/data");
		return response.json();
	};

	useEffect(() => {
		const getData = async () => {
			const result = await fetchData();
			setdata(result);
		};
		getData();
	}, []);
	console.log(data);

	return (
		<ContactContext.Provider value={{ data }}>
			{children}
		</ContactContext.Provider>
	);
};
