export function login(dispath, name) {
	dispath({type: 'login', payload: name })
}
