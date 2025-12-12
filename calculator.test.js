import { calculator } from "./calculator"

test("adding 1 + 1", () => {
    expect(calculator.add(1, 1)).toBe(2);
})

test("subtract 1 - 1", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
})

test("divide 10 / 2", () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

test("multiply 10 * 2", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
})