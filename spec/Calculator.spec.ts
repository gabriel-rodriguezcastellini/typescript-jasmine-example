import { Calculator } from "../src/Calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should add two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  it("should divide two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrowError(
      "Cannot divide by zero"
    );
  });
});