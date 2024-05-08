import { capitalize } from "../src/capitalize.js";

const tests = [
  { input: "hello", output: "Hello" },
  { input: "world", output: "World" },
  { input: "hello world!", output: "Hello world!" },
  { input: "", output: "" },
  { input: undefined, output: undefined },
  { input: null, output: null },
];

tests.forEach((unit) => {
  test(`Capitalize ${JSON.stringify(unit.input)}`, () => {
    expect(capitalize(unit.input)).toBe(unit.output);
  });
});
