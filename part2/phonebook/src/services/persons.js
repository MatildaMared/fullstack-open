import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	const response = axios.get(baseUrl);
	return response.then((response) => response.data);
};

const createPerson = (newPerson) => {
	const response = axios.post(baseUrl, newPerson);
	return response.then((response) => response.data);
};

const updatePerson = (id, newPerson) => {
	const response = axios.put(`${baseUrl}/${id}`, newPerson);
	return response.then((response) => response.data);
};

const deletePerson = (id, newPerson) => {
	const response = axios.delete(`${baseUrl}/${id}`, newPerson);
	return response.then((response) => response.data);
};

export default {
	getAll,
	createPerson,
	updatePerson,
	deletePerson,
};
