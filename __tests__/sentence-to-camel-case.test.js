const { sentenceToCamelCase, camelToEnglish } = require('../sentence-to-camel-case/sentence-to-camel-case')

describe('sentenceToCamelCase()', () => {
    test('should not mutate the passed in string', () => {
        const str = 'a'
        sentenceToCamelCase(str)
        expect(str).toEqual('a')
    });
    test('should return a capital char if passed a char and true', () => {
        expect(sentenceToCamelCase('a', true)).toEqual('A')
        expect(sentenceToCamelCase('A', true)).toEqual('A')
    });
    test('should return a lowercase char if passed a char and false', () => {
        expect(sentenceToCamelCase('b', false)).toEqual('b')
        expect(sentenceToCamelCase('B', false)).toEqual('b')
    });
    test('should return correct case for single word', () => {
        expect(sentenceToCamelCase('bear', false)).toEqual('bear')
        expect(sentenceToCamelCase('Bear', false)).toEqual('bear')
        expect(sentenceToCamelCase('bear', true)).toEqual('Bear')
        expect(sentenceToCamelCase('Bear', true)).toEqual('Bear')
    });
    test('should return correct case for two words', () => {
        const input = 'party bear'
        const outputTrue = 'PartyBear'
        const outputFalse = 'partyBear'

        expect(sentenceToCamelCase(input, false)).toEqual(outputFalse)
        expect(sentenceToCamelCase(input, true)).toEqual(outputTrue)
    });
    test('should return correct case for many words', () => {
        const input = 'bears and Pigs and hamsters'
        const outputTrue = 'BearsAndPigsAndHamsters'
        const outputFalse = 'bearsAndPigsAndHamsters'

        expect(sentenceToCamelCase(input, false)).toEqual(outputFalse)
        expect(sentenceToCamelCase(input, true)).toEqual(outputTrue)
    });
})

describe.only('camelToEnglish()', () => {
    test('should not mutate the passed in string', () => {
        const str = 'a'
        camelToEnglish(str)
        expect(str).toEqual('a')
    });
    test('should return a string ending in a full stop', () => {
        expect(camelToEnglish('a')).toEqual('A.')
    });
    test('should capitalise the first word returned', () => {
        expect(camelToEnglish('jellycat')).toEqual('Jellycat.')
    });
    test('should create sentence with following words uncapitalised', () => {
        expect(camelToEnglish('beansOnToast')).toEqual('Beans on toast.')
        expect(camelToEnglish('milkAndTwoSugars')).toEqual('Milk and two sugars.')
        expect(camelToEnglish('aBCDEFGH')).toEqual('A b c d e f g h.')
    });
})