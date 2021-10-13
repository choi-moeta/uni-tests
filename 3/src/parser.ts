import { Rational } from "./rational"

export enum Token {
  Number,
  Plus,
  Minus,
  Mult,
  Div,
  EmptyString,
  Error,
}

export class Parser {
  static processLine(line: string): Token {
  // remove all whitespaces from the input string
    line.replace("\\s+", "")

    switch (line) {
      case "+":
        return Token.Plus
      case "-":
        return Token.Minus
      case "*":
        return Token.Mult
      case "/":
        return Token.Div
      case "":
        return Token.EmptyString
    }

    const val = Rational.parse(line)
    if (val) {
      return Token.Number
    }

    return Token.Error
  }

  static tripleAnd(a: boolean, b: boolean, c: boolean): boolean {
    return a && b && c
  }
}
