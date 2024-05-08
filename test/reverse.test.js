import { reverseString } from "../src/reverse.js";

const tests = [
  { input: "hello", output: "olleh" },
  { input: "world", output: "dlrow" },
  { input: "Hello World!", output: "!dlroW olleH" },
  { input: "", output: "" },
  { input: undefined, output: undefined },
  { input: null, output: null },
];

tests.forEach((unit) => {
  test(`Reverse ${JSON.stringify(unit.input)}`, () => {
    expect(reverseString(unit.input)).toBe(unit.output);
  });
});
