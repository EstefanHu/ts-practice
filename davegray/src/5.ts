console.log('five')
type one = string
type two = string | number
type three = 'hello'
let a: one = 'hello'
let b = a as two
let c = a as three
let d = <one>'world'
let e = <string>'world'
let f = <string | number>'world'
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
	if (c === 'add') return a + b
	return '' + a + b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string
let numVal: number = addOrConcat(2, 2, 'add') as number
let numVal2: number = addOrConcat(2, 2, 'concat') as number

(10 as unknown) as string

// the DOM

