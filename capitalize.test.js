import { capitalize } from "./capitalize.js";

test('capitalize first word', () => {
    expect(capitalize("string")).toBe("String");
});