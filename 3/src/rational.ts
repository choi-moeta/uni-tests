
/**
 * @class Rational number
 */
export class Rational {
  #dividend: number
  #divisor: number
  /**
   * Create a Rational number.
   * @param {number} dividend - The top of fraction.
   * @param {number} divisor - The bottom of fraction.
   */
  constructor(dividend: number, divisor: number) {
    this.#dividend = dividend
    this.#divisor = divisor
  }

  /**
   * @return {number} dividend.
   */
  get dividend() {
    return this.#dividend
  }

  /**
   * @return {number} divisor.
   */
  get divisor() {
    return this.#divisor
  }

  /**
   * Get the string "a/b"
   * @return {number} divisor.
   */
  static parse(line: string): Rational | null {
    const result = line.match(/^(?:([+-]?)(\d+(?:\.\d*)?|\.\d+)(?:\s*\/\s*([+-]?)(\d+(?:\.\d*)?|\.\d+))?)$/i)

    if (result) {
      const [, dividendSign, dividendNum, divisorSign, divisorNum] = result
      const dividend = parseFloat(dividendSign + dividendNum)
      const divisor = parseFloat(divisorSign + divisorNum)
      return new Rational(dividend, divisor)
    }

    return null
  }

  /**
   * Get the string "a/b"
   * @return {number} divisor.
   */
  toString(): string {
    return `${this.dividend}/${this.divisor}`
  }

  /**
   * Compare with other Rational
   * @param {Rational} other Rational
   * @return {boolean} result of comparison.
   */
  equals(other: Rational): boolean {
    return this.dividend * other.divisor === this.divisor * other.dividend
  }

  /**
   * Compare with other Rational
   * @param {Rational} other Rational
   * @return {Rational} bigger Rational.
   */
  compare(other: Rational): Rational {
    return this.dividend * other.divisor < this.divisor * other.dividend ? other : this
  }

  /**
   * Add to other Rational
   * @param {Rational} other Rational
   * @return {Rational} Result of addition.
   */
  add(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor + this.divisor * other.dividend, this.divisor * other.divisor)
  }

  /**
   * Subtract other Rational
   * @param {Rational} other Rational
   * @return {Rational} Result of subtraction
   */
  subtract(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor - this.divisor * other.dividend, this.divisor * other.divisor)
  }

  /**
   * Multiply with other Rational
   * @param {Rational} other Rational
   * @return {Rational} Result of multiplication
   */
  multiply(other: Rational): Rational {
    return new Rational(this.dividend * other.dividend, this.divisor * other.divisor)
  }

  /**
   * Divide by other Rational
   * @param {Rational} other Rational
   * @return {Rational} Result of division
   */
  divide(other: Rational): Rational {
    return new Rational(this.dividend * other.divisor, this.divisor * other.dividend)
  }
}
