import axios from "axios";
import { data } from "react-router-dom";

const baseURL = "http://localhost:3002/notes";

const getAll = async () => {
	const response = await axios.get(baseURL);
	const nonExistingObject = {
		id: 1289412,
		content: "this object is not found",
		important: true,
	};
	return [...response.data, nonExistingObject];
};

const create = async (newObject) => {
	const response = await axios.post(baseURL, newObject);
	return response.data;
};

const update = async (id, newObject) => {
	try {
		const response = await axios.put(`${baseURL}/${id}`, newObject);
		return response.data;
	} catch (error) {
		return error;
	}
};

export default {
	getAll,
	create,
	update,
};
