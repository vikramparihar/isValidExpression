/**
 * Author: Vikram Parihar
 * Date: 2023-10-30
 * Description: This file used for unit tesing for function isValidExpression
 */

// Import the function
const isValidExpression = require('./isValidExpression');

describe('isValidExpression', () => {
  // Prepairing the test cases
  const testCases = [
    { input: '', expected: true },
    { input: '[]', expected: true },
    { input: '(]', expected: false },
    { input: '()[]', expected: true },
    { input: '[({})]', expected: true },
    { input: '[()]{}', expected: true },
    { input: '[)](', expected: false },
    { input: '(', expected: false },
    { input: '[', expected: false },
    { input: '{', expected: false },
    { input: '{[)]}', expected: false },
  ];

 // Passes the test cases one by one
  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} for input "${input}"`, () => {
      expect(isValidExpression(input)).toBe(expected);
    });
  });
});
