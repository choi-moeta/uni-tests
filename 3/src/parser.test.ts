import each from "jest-each"
import { Parser, Token } from "./parser"

describe("Parse.processLine", () => {
  test("Plus", () => {
    expect(Parser.processLine("+")).toBe(Token.Plus)
  })

  test("Minus", () => {
    expect(Parser.processLine("-")).toBe(Token.Minus)
  })

  test("Mult", () => {
    expect(Parser.processLine("*")).toBe(Token.Mult)
  })

  test("Div", () => {
    expect(Parser.processLine("/")).toBe(Token.Div)
  })

  test("EmptyString", () => {
    expect(Parser.processLine("")).toBe(Token.EmptyString)
  })

  test("Number", () => {
    expect(Parser.processLine("1/3")).toBe(Token.Number)
  })

  test("Error", () => {
    expect(Parser.processLine("error")).toBe(Token.Error)
  })
})

describe("Parse.tripleAnd", () => {
  const params = [
    [false, false, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [false, true, true, false],
    [true, false, false, false],
    [true, false, true, false],
    [true, true, false, false],
    [true, true, true, true],
  ]
  each(params).test("tripleAnd variant",
    (a: boolean, b: boolean, c: boolean, expected: boolean) => {
      expect(Parser.tripleAnd(a, b, c)).toBe(expected)
    })
})
