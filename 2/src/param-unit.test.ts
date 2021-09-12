import each from 'jest-each'
import { Rational } from '.'

describe('parametrized unit tests', () => {
  describe('Addition', () => {
    each([
      [new Rational(1, 2), new Rational(-3, -3), new Rational(9, 6)],
      [new Rational(7, 4), new Rational(-1, 5), new Rational(31, 20)],
      [new Rational(11, 12), new Rational(13, 14), new Rational(310, 168)],
    ]).test('add', (a: Rational, b: Rational, c: Rational) => {
      expect(a.add(b).equals(c)).toBeTruthy()
    })
  })
})
