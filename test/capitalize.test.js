import { capitalize } from "../src/capitalize.js";

test("Capitalize 'hello'", () => expect(capitalize("hello")).toBe("Hello"));
test("Capitalize 'world'", () => expect(capitalize("world")).toBe("World"));
test("Capitalize 'hello world!'", () =>
  expect(capitalize("hello world!")).toBe("Hello world!"));
