import axios from "axios";

const baseUrl = "http://localhost:3003/persons";

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const create = async (newObject) => {
	const response = axios.post(baseUrl, newObject);
	return response.data;
};

const update = async (id, updatedObject) => {
	const response = await axios.put(`${baseUrl}/${id}`, updatedObject);
	return response.data;
};

const deleteEntry = async (id) => {
	await axios.delete(`${baseUrl}/${id}`);
};

export default {
	getAll,
	create,
	update,
	deleteEntry,
};
