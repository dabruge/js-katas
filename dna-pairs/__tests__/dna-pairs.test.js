const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('should return an empty array when passed empty string', () => {
    expect(dnaPairs("")).toEqual([])
  });
  test('should return array containing one pair array when passed single character', () => {
    expect(dnaPairs("G")).toEqual([ ["G", "C"] ])
  });
  test('should return nested array of correct pairs when passed string of 2 or more length', () => {
    expect(dnaPairs("AG")).toEqual([ ["A", "T"], ["G", "C"] ])
    expect(dnaPairs("ACGT")).toEqual([ ["A", "T"], ["C", "G"], ["G", "C"], ["T", "A"] ])
  });
});
