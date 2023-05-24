const fizzBuzz = require('../fizz-buzz')

describe('fizzBuzz()', () => {
    test('should return 0 if passed 0, 1, 2, 3', () => {
        expect(fizzBuzz(0)).toEqual(0)
        expect(fizzBuzz(1)).toEqual(0)
        expect(fizzBuzz(2)).toEqual(0)
        expect(fizzBuzz(3)).toEqual(0)
    });
    test('should only sum if BELOW number, not including it', () => {
        expect(fizzBuzz(3)).toEqual(0)
        expect(fizzBuzz(5)).toEqual(3)
        expect(fizzBuzz(10)).toEqual(23)
    });
    test('should do correct sum for any number', () => {
        expect(fizzBuzz(8)).toEqual(14)
        expect(fizzBuzz(12)).toEqual(33)
        expect(fizzBuzz(16)).toEqual(60)
        expect(fizzBuzz(26)).toEqual(168)
    });
})