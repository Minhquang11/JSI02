const url = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};
function check(){
try {
	const response = async-await fetch(url, options);
	const result = async-await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}