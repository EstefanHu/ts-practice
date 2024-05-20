type stringOrNumber = string | number

type stringOrNumberArray = stringOrNumber[]

type Guitarist3 = {
	name?: string,
	active: boolean,
	albums: stringOrNumberArray
}

type UserId = stringOrNumber

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions
type mathFunction = (a: number, b: number) => number
const add = (a: number, b: number): number => {
	return a + b
}

const logMessage = (str: any): void => {
	console.log(str)
}

logMessage('Hello<S-F1')
logMessage(add(2, 3))

let subtract = function(c: number, d: number): number {
	return c - d
}

let multiply: mathFunction = function(c, d) {
	return c * d
}

logMessage(multiply(2, 2))

interface mathFunction2 {
	(a: number, b: number): number
}

// optional params
const addAll = (a: number, b: number, c?: number): number => {
	if (c !== undefined) return a + b + c;
	return a + b
}

const sumAll = (a: number, b: number, c: number = 2): number => {
	return a + b + c
}

const total = (...nums: number[]): number => {
	return nums.reduce((prev, curr) => prev + curr)
}

logMessage(total(1, 2, 3, 4))

const createError = (errMsg: string): never => {
	throw new Error(errMsg)
}

const isNumber = (value: any): boolean => {
	return typeof value === 'number' ? true : false
}

const numberOrString = (value: number | string): string => {
	if (typeof value === 'string') return 'string'
	if (isNumber(value)) return 'number'
	return createError('This should never happen')
}
