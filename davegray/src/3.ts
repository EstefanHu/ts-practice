console.log('Dave Grey')
// Tuple
let myTuple: [string, number, boolean] = ['dave', 32, true]
type Guitarist = {
	name: string,
	active: boolean,
	albums: (string | number)[]
}

let evh: Guitarist = {
	name: 'eddie',
	active: false,
	albums: [1984, 5150, 'OU812']
}

const greetGuitarist = (gutarist: Guitarist): string => {
	return `Hello ${gutarist.name}`;
}

console.log(greetGuitarist(evh))

interface Guitarist2 {
	name: string,
	active?: boolean,
	albums: (string | number)[]
}

enum Grade {
	U = 1, D, C, B, A
}

