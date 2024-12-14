import axios from "axios";

export const getAll = async () => {
	const response = await axios.get("http://localhost:3000/persons");
	return response.data;
};
