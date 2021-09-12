import { Rational } from '..'

const a = new Rational(1, 2)
const b = new Rational(3, 2)
const c = new Rational(8, 4)

const result = a.add(b)
const expected = c

export { result, expected }
