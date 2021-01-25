export function addPlanets(dispath) {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
	fetch(url, { method: 'get' })
	  .then((resp) => resp.json())
	  .then((result) => dispath({type: 'addPlanets', data: result.results}))
}
