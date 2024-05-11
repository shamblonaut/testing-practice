import { encrypt } from "../src/cipher.js";

const tests = [
  {
    description: "Checking original",
    input: { string: "Julius Caesar", shift: 3 },
    output: "Mxolxv Fdhvdu",
  },
  {
    description: "End of alphabet",
    input: { string: "Zara did it best", shift: 6 },
    output: "Fgxg joj oz hkyz",
  },
  {
    description: "Hello World!",
    input: { string: "Hello World!", shift: 8 },
    output: "Pmttw Ewztl!",
  },
  {
    description: "Extra-alphabetical shift",
    input: { string: "Julius Caesar", shift: 32 },
    output: "Paroay Igkygx",
  },
  {
    description: "Negative shift",
    input: { string: "Julius Caesar", shift: -16 },
    output: "Tevsec Mkockb",
  },
  {
    description: "Extra-negative shift",
    input: { string: "Julius Caesar", shift: -32 },
    output: "Dofcom Wuymul",
  },
  {
    description: "Numbers",
    input: { string: 123.456, shift: 3 },
    output: "123.456",
  },
  {
    description: "Null",
    input: { string: null, shift: 3 },
    output: null,
  },
];

describe("Caesar Cipher", () => {
  tests.forEach((unit) => {
    test(unit.description, () => {
      expect(encrypt(unit.input.string, unit.input.shift)).toBe(unit.output);
    });
  });
});
