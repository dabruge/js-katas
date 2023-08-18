const { foldString } = require('../fold-strings/fold-string')

describe('foldString()', () => {
    test('when passed empty string', () => {
        const str = ''
        expect(foldString(str)).toEqual('')
    });
    test('when passed words of three or less characters', () => {
        const str1 = 'a'
        const str2 = 'ab'
        const str3 = 'abc'
        expect(foldString(str1)).toEqual('a')
        expect(foldString(str2)).toEqual('ab')
        expect(foldString(str3)).toEqual('abc')
    });
    test('when passed a single word of even length', () => {
        const str1 = 'code'
        const str2 = 'javascript'
        expect(foldString(str1)).toEqual('oced')
        expect(foldString(str2)).toEqual('savajtpirc')
    });
    xtest('when passed a single word of odd length', () => {
        const str1 = 'cadet'
        const str2 = 'Northcoders'
        expect(foldString(str1)).toEqual('acdte')
        expect(foldString(str2)).toEqual('htroNcsredo')
    });
    xtest('when passed multiple words', () => {
        const str1 = 'javascript is cool'
        const str2 = 'Hippo watermelon cat python'
        expect(foldString(str1)).toEqual('savajtpirc is oclo')
        expect(foldString(str2)).toEqual('iHpop retawnolem cat typnoh')
    });
})