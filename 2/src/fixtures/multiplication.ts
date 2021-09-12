import { Rational } from '..'

const a = new Rational(11, 8)
const b = new Rational(6, 11)
const c = new Rational(66, 88)

const result = a.multiply(b)
const expected = c

export { result, expected }
