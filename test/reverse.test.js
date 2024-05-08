import { reverseString } from "../src/reverse.js";

test("Reverse 'hello'", () => expect(reverseString("hello")).toBe("olleh"));
test("Reverse 'world'", () => expect(reverseString("world")).toBe("dlrow"));
test("Reverse 'Hello World!'", () =>
  expect(reverseString("Hello World!")).toBe("!dlroW olleH"));
