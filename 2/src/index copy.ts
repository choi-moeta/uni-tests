
export class Rational {
  #dividend: number
  #divisor: number

  constructor(dividend: number, divisor: number) {
    this.#dividend = dividend
    this.#divisor = divisor
  }

  get dividend() {
    return this.#dividend
  }

  get divisor() {
    return this.#divisor
  }

  toString(): string {
    return `${this.dividend}/${this.divisor}`
  }

  equals(other: Rational): boolean {
    return this.dividend * other.divisor === this.divisor * other.dividend
  }

  compare(other: Rational) {
    return this.dividend * other.divisor < this.divisor * other.dividend ? other : this
  }

  add(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor + this.divisor * other.dividend, this.divisor * other.divisor)
  }

  subtract(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor - this.divisor * other.dividend, this.divisor * other.divisor)
  }

  multiply(other: Rational): Rational {
    return new Rational(this.dividend * other.dividend, this.divisor * other.divisor)
  }

  divide(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor, this.divisor * other.dividend)
  }
}
