import axios from "axios";

export const createGETRequest = async (url) => {
	const response = await axios.get(url);
	return response.data[0];
};
