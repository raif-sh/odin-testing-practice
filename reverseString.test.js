import { reverseString } from "./reverseString.js";

test('Reverse the words', () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("123")).toBe("321");
    expect(reverseString("!@#")).toBe("#@!");
});