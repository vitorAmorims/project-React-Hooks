export function numberAdd2(dispath) {
	dispath({type: 'numberAdd2'})
}

export function multiplicar(dispath) {
	dispath({type: 'multiplicar'})
}

export function dividir(dispath) {
	dispath({type: 'dividir'})
}

export function arredondar(dispath) {
	dispath({type: 'arredondar'})
}

export function n(dispath, value) {
	dispath({type: 'n', payload: value})
}
