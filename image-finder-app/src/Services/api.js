/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

impimport axios from 'axios';

const API_KEY = "22506390-5f30c2369c48e6ce339972ea6";
const URL = "https://pixabay.com/api/"

export const getImages = (text, count) => {
	try {
		const data = axios.get(`${URL}?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
		return data;
	} catch (error) {

	}
}
