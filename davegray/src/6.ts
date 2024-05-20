class Coder {
	secLang!: string

	constructor(
		public readonly name: string,
		public music: string,
		private age: number,
		protected lang: string = "typescript"
	) {
		this.name = name
		this.music = music
		this.age = age
		this.lang = lang
	}

	public getAge() {
		return `hello, im ${this.age}`
	}
}

const Dave = new Coder('dave', 'rock', 42, 'typescript')
console.log(Dave.getAge())
const Sam = new Coder('dave', 'rock', 42)

class WebDev extends Coder {
	constructor(
		public computer: string,
		name: string,
		music: string,
		age: number
	) {
		super(name, music, age)
		this.computer = computer
	}

	public getComputer() {
		return `I use ${this.computer}`
	}

	public getLang() {
		return `I write ${this.lang}`
	}
}

const sara = new WebDev('Mac', 'sara', 'lofi', 25)
console.log(sara.getComputer())
console.log(sara.getLang())

interface Musician {
	name: string,
	instrument: string,
	play(action: string): string
}

class Guitarists implements Musician {
	name: string
	instrument: string
	constructor(name: string, instrument: string) {
		this.name = name
		this.instrument = instrument
	}

	public play(action: string) {
		return `${this.name} ${action} the ${this.instrument}`
	}
}

const page = new Guitarists('Jimmy', 'guitar')
console.log(page.play('strums'))

class Peeps {
	static count: number = 0
	static getCount(): number {
		return Peeps.count
	}

	public id: number
	constructor(public name: string) {
		this.name = name
		this.id = ++Peeps.count
	}
}

const John = new Peeps('John')
const wohn = new Peeps('wohn')
const Lohn = new Peeps('Lohn')

console.log(Peeps.count)
console.log(wohn.id)

// GETTER SETTER
class bands {
	private dataState: string[]
	constructor() {
		this.dataState = []
	}

	public get data(): string[] {
		return this.dataState
	}

	public set data(value: string[]) {
		if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
			this.dataState = value
			return
		} else throw new Error('param is not an array of strings')
	}
}

const myBands = new bands()
myBands.data = ['Neil YOung', 'led sep']
console.log(myBands.data)
myBands.data = [...myBands.data, 'noodles']
console.log(myBands.data)






