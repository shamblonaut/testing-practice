import { analyzeArray } from "../src/analyze.js";

const tests = [
  {
    description: "Standard array",
    input: [1, 8, 3, 4, 2, 6],
    output: {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    },
  },
  {
    description: "Mixed array",
    input: [1, -8, 3, -4, 2, -6],
    output: {
      average: -2,
      min: -8,
      max: 3,
      length: 6,
    },
  },
  {
    description: "Float array",
    input: [2, 12.14, -3.12, 12.145, 6.1, 8.0, 9.12345, -9.3],
    output: {
      average: 4.636056249999999,
      min: -9.3,
      max: 12.145,
      length: 8,
    },
  },
  {
    description: "Contains strings",
    input: [2, 3, "what in the world"],
    output: {
      length: 3,
    },
  },
  {
    description: "Invalid values",
    input: [1, 3, null, 6],
    output: {
      length: 4,
    },
  },
  {
    description: "Not array",
    input: "Hello World!",
    output: Error(
      "Why are you analyzing something that is not an array using me?",
    ),
  },
];

describe("Analyze Array", () => {
  tests.forEach((unit) => {
    test(unit.description, () =>
      expect(analyzeArray(unit.input)).toEqual(unit.output),
    );
  });
});
