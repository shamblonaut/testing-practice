import { add, subtract, multiply, divide } from "../src/calculator.js";

describe("Addition", () => {
  const tests = [
    { description: "Add 1 + 1", input: [1, 1], output: 2 },
    { description: "Add 20 + 0", input: [20, 0], output: 20 },
    { description: "Negative sum", input: [1000, -1500], output: -500 },

    { description: "Add '1' + '1'", input: ["1", "1"], output: 2 },
    { description: "Add '1000' + '0'", input: ["1000", "0"], output: 1000 },
    {
      description: "Add '-1000' + '-1500'",
      input: ["-1000", "-1500"],
      output: -2500,
    },

    {
      description: "Add 10 numbers",
      input: [10, 54, 23, 231, 922929, 1221, -981, -734526, 10292831, 69],
      output: 10481861,
    },
    {
      description: "Add 10 mixed values",
      input: [10, 54, "23", 231, "922929", 1221, -981, "-734526", 10292831, 69],
      output: 10481861,
    },

    {
      description: "No arguments",
      input: [],
      output: NaN,
    },
    {
      description: "With undefined operand",
      input: [1000, undefined],
      output: NaN,
    },
    {
      description: "Add '1000' + 'Hello World!'",
      input: ["1000", "Hello World!"],
      output: NaN,
    },
    {
      description: "Multiple invalid options",
      input: [1000, "Hello!", null, undefined],
      output: NaN,
    },
  ];

  tests.forEach((unit) => {
    test(unit.description, () => {
      expect(add(...unit.input)).toBe(unit.output);
    });
  });
});

describe("Subtraction", () => {
  const tests = [
    { description: "Subtract 4 - 2", input: [4, 2], output: 2 },
    { description: "Subtract 20 - 0", input: [20, 0], output: 20 },
    {
      description: "Subtracting negative numbers",
      input: [-1000, -1500],
      output: 500,
    },

    { description: "Subtract '4' - '2'", input: ["4", "2"], output: 2 },
    { description: "Subtract '20' - '0'", input: ["20", "0"], output: 20 },
    {
      description: "Subtract '-1000' + '-1500'",
      input: ["-1000", "-1500"],
      output: 500,
    },

    {
      description: "Subtract 10 numbers",
      input: [650, 487, -865, 63, 489, -882, 661, 358, 480, -4],
      output: -137,
    },
    {
      description: "Subtract 10 mixed values",
      input: [650, "487", -865, "63", 489, "-882", 661, 358, "480", -4],
      output: -137,
    },

    {
      description: "No arguments",
      input: [],
      output: NaN,
    },
    {
      description: "With undefined operand",
      input: [1000, undefined],
      output: NaN,
    },
    {
      description: "Subtract '1000' - 'Hello World!'",
      input: ["1000", "Hello World!"],
      output: NaN,
    },
    {
      description: "Multiple invalid options",
      input: [1000, "Hello!", null, undefined],
      output: NaN,
    },
  ];

  tests.forEach((unit) => {
    test(unit.description, () => {
      expect(subtract(...unit.input)).toBe(unit.output);
    });
  });
});

describe("Multiplication", () => {
  const tests = [
    { description: "Multiply 4 * 4", input: [4, 4], output: 16 },
    { description: "Multiply 4 * 1", input: [4, 1], output: 4 },
    { description: "Multiply with 0", input: [4, 0], output: 0 },
    { description: "Negative product", input: [24, -16], output: -384 },

    { description: "Multiply '4' * '4'", input: ["4", "4"], output: 16 },
    { description: "Multiply '1000' * '0'", input: ["1000", "0"], output: 0 },
    {
      description: "Multiply '24' * '-16'",
      input: ["24", "-16"],
      output: -384,
    },

    {
      description: "Multiply 10 numbers",
      input: [770, 848, -581, 334, -738, 144, 524, -868, 194, -91],
      output: 1.081240152124888e26,
      approximate: true,
    },
    {
      description: "Multiply 10 mixed values",
      input: [770, 848, "-581", 334, -738, "144", 524, "-868", "194", -91],
      output: 1.081240152124888e26,
      approximate: true,
    },

    {
      description: "With undefined operand",
      input: [1000, undefined],
      output: NaN,
    },
    {
      description: "Multiply '1000' + 'Hello World!'",
      input: ["1000", "Hello World!"],
      output: NaN,
    },
    {
      description: "Multiple invalid options",
      input: [1000, "Hello!", null, undefined],
      output: NaN,
    },
  ];

  tests.forEach((unit) => {
    test(unit.description, () => {
      if (unit.approximate) {
        expect(multiply(...unit.input)).toBeCloseTo(unit.output);
      } else expect(multiply(...unit.input)).toBe(unit.output);
    });
  });
});

describe("Division", () => {
  const tests = [
    { description: "Divide 16 / 4", input: [16, 4], output: 4 },
    { description: "Divide 4 / 1", input: [4, 1], output: 4 },
    { description: "Divide by 0", input: [4, 0], output: undefined },
    { description: "Negative division", input: [32, -16], output: -2 },

    { description: "Divide '16' / '4'", input: ["16", "4"], output: 4 },
    {
      description: "Divide '1000' / '0'",
      input: ["1000", "0"],
      output: undefined,
    },
    {
      description: "Divide '32' / '-16'",
      input: ["32", "-16"],
      output: -2,
    },

    {
      description: "Divide 10 numbers",
      input: [438528, 8, 3, 5, 3, 4, 2, 10, 4],
      output: 3.8066,
      approximate: true,
    },
    {
      description: "Divide 10 mixed values",
      input: ["438528", 8, 3, "5", 3, "4", 2, "10", 4],
      output: 3.8066,
      approximate: true,
    },

    {
      description: "With undefined operand",
      input: [1000, undefined],
      output: NaN,
    },
    {
      description: "Divide '1000' + 'Hello World!'",
      input: ["1000", "Hello World!"],
      output: NaN,
    },
    {
      description: "Multiple invalid options",
      input: [1000, "Hello!", null, undefined],
      output: NaN,
    },
  ];

  tests.forEach((unit) => {
    test(unit.description, () => {
      if (unit.approximate) {
        expect(divide(...unit.input)).toBeCloseTo(unit.output);
      } else expect(divide(...unit.input)).toBe(unit.output);
    });
  });
});
