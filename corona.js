const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


async function getData() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(JSON.parse(result));
		console.log(JSON.parse(result).main.temp);
		console.log(typeof(result));
	} catch (error) {
		console.error(error);
	}
}
getData()
