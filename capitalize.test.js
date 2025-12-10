import { capitalize } from "./capitalize.js";

test('capitalize first word', () => {
    expect(capitalize("string")).toBe("string");
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });