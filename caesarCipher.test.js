import { caesarCipher } from "./caesarCipher"

test("ciphering xyz to abc with key 3", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test("test case preservation", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("punctuation, space and other non-alphanetical characters should remain unchanged", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})
