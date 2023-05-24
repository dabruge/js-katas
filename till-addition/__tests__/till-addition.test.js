const tillAddition = require('../till-addition')

describe('tillAddition()', () => {
    test('should return a string', () => {
        expect(tillAddition({})).toEqual('£0.00')
    });
    test('should return correct sum for single key object', () => {
        expect(tillAddition({"1p": 1})).toEqual('£0.01')
        expect(tillAddition({"50p": 1})).toEqual('£0.50')
        expect(tillAddition({"20p": 6})).toEqual('£1.20')
        expect(tillAddition({"£10": 1})).toEqual('£10.00')
        expect(tillAddition({"£20": 1})).toEqual('£20.00')
    });
    test('should return correct sum for total under 10p', () => {
        const input = {"1p": 2, "2p": 1, "5p": 1}
        const expected = '£0.09'
        expect(tillAddition(input)).toEqual(expected)
    });
    test('should return correct sum for total greater than 9p, less than £1', () => {
        const input = {"1p": 2, "2p": 1, "5p": 1, "10p": 4, "20p": 0, "50p": 1}
        const expected = '£0.99'
        expect(tillAddition(input)).toEqual(expected)
    });
    test('should return correct sum for total greater than £1, less than £10', () => {
        const input = {"1p": 2, "2p": 1, "5p": 1, "10p": 4, "20p": 0, "50p": 1, "£1": 1, "£2": 1, "£5": 1}
        const expected = '£8.99'
        expect(tillAddition(input)).toEqual(expected)
    });
    test('should return correct sum for total greater than £10', () => {
        const input = {"1p": 2, "2p": 1, "5p": 1, "10p": 4, "20p": 0, "50p": 1, "£1": 1, "£2": 1, "£5": 1, "£10": 1, "£20": 1, "£50": 1}
        const expected = '£88.99'
        expect(tillAddition(input)).toEqual(expected)
    });
    test('should return correct sum for total greater than £100', () => {
        const input = {"1p": 2, "2p": 1, "5p": 1, "10p": 4, "20p": 0, "50p": 1, "£1": 1, "£2": 1, "£5": 1, "£10": 1, "£20": 1, "£50": 2}
        const expected = '£138.99'
        expect(tillAddition(input)).toEqual(expected)
    });
    test('should return correct sum for total greater than £1000', () => {
        const input = {"1p": 2, "2p": 1, "5p": 0, "10p": 3, "20p": 10, "50p": 1, "£1": 1, "£2": 1, "£5": 1, "£10": 11, "£20": 13, "£50": 14}
        const expected = '£1080.84'
        expect(tillAddition(input)).toEqual(expected)
    });
})