import { reverseString } from "./reverseString.js";

test("Reverse the words", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("123")).toBe("321");
    expect(reverseString("!@#")).toBe("#@!");
});

test("Handles empty and single characters", () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
});

test("Handles palindromes", () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test("Handles spaces correctly", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
    expect(reverseString("  abc")).toBe("cba  ");
    expect(reverseString("abc  ")).toBe("  cba");
});

test("Handles mixed case", () => {
    expect(reverseString("AbC")).toBe("CbA");
});

test("Handles emojis and unicode", () => {
    expect(reverseString("🙂🙃")).toBe("🙃🙂");
    expect(reverseString("👍🏽🔥")).toBe("🔥👍🏽");
});

test("Handles combined alphanumeric punctuation", () => {
    expect(reverseString("a1!b2?")).toBe("?2b!1a");
});

test("Handles long strings", () => {
    expect(reverseString("a".repeat(1000))).toBe("a".repeat(1000));
});