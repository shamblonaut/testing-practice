import { reverseString } from "../src/reverse.js";

test("Reverse 'hello'", () => expect(reverseString("hello")).toBe("olleh"));
test("Reverse 'world'", () => expect(reverseString("world")).toBe("dlrow"));
test("Reverse 'Hello World!'", () =>
  expect(reverseString("Hello World!")).toBe("!dlroW olleH"));
test("Reverse ''", () => expect(reverseString("")).toBe(""));
test("Reverse undefined", () =>
  expect(reverseString(undefined)).toBeUndefined());
test("Reverse null", () => expect(reverseString(null)).toBeNull());
