const changeCalculator = require('../change-calculator/change-calculator')

describe.only('changeCalculator()', () => {
    test('should return empty object if passed 0', () => {
        expect(changeCalculator(0)).toEqual({})
    });
    test('should return single coin if passed in num is a coin value', () => {
        expect(changeCalculator(20)).toEqual({ '20' : 1 })
        expect(changeCalculator(1)).toEqual({ '1' : 1 })
        expect(changeCalculator(100)).toEqual({ '100' : 1 })
    });
    test('should return correction combination of coins', () => {
        const expected468 = {
                            '200': 2,
                            '50' : 1,
                            '10' : 1,
                            '5'  : 1,
                            '2'  : 1,
                            '1'  : 1
                        }
        expect(changeCalculator(60)).toEqual({ '50' : 1, '10' : 1 })
        expect(changeCalculator(99)).toEqual({ '50' : 1, '20' : 2, '5' : 1, '2' : 2 })
        expect(changeCalculator(468)).toEqual(expected468)
    });
})