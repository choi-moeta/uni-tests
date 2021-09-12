import { Rational } from './index'

describe('Comparison', () => {
  test('7/11 > 3/5', () => {
    const a = new Rational(3, 5)
    const b = new Rational(7, 11)

    expect(a.compare(b).equals(b)).toBeTruthy()
  })
})

describe('Addition', () => {
  test('1/2 + 3/3 = 8/4', () => {
    const a = new Rational(1, 2)
    const b = new Rational(3, 2)
    const c = new Rational(8, 4)

    expect(a.add(b).equals(c)).toBeTruthy()
  })
})

describe('Subtraction', () => {
  test('7/3 - 2/4 = 22/12', () => {
    const a = new Rational(7, 3)
    const b = new Rational(2, 4)
    const c = new Rational(22, 12)

    expect(a.subtract(b).equals(c)).toBeTruthy()
  })
})

describe('Multiplication', () => {
  test('11/8 * 6/11 = 66/88', () => {
    const a = new Rational(11, 8)
    const b = new Rational(6, 11)
    const c = new Rational(66, 88)

    expect(a.multiply(b).equals(c)).toBeTruthy()
  })
})

describe('Division', () => {
  test('5/3 / 6/9 = 45/18', () => {
    const a = new Rational(5, 3)
    const b = new Rational(6, 9)
    const c = new Rational(45, 18)

    expect(a.divide(b).equals(c)).toBeTruthy()
  })
})
