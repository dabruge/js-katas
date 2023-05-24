const getTweetData = require('../get-tweet-data')

describe('getTweetData()', () => {
    test('should return object with empty arrays and 0 values when passed empty string', () => {
        expect(getTweetData("")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 })
    });
    test('should return object with appropriate values when passed a one word string', () => {
        expect(getTweetData("Hamster")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 7 })
        expect(getTweetData("#coding")).toEqual({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 7 })
        expect(getTweetData("@northcoders")).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 12 })
    });
    test('should return object with appropriate values when passed a multi-word string', () => {
        expect(getTweetData("Hamster's are cute")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 18 })
        expect(getTweetData("I love #coding")).toEqual({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 14 })
        expect(getTweetData("@northcoders is my favourite place")).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 34 })
        expect(getTweetData("@Angus @Joe @Hannah are #lovinLife and #sitting across from @Lucy")).toEqual(
            { tags: ["#lovinLife", "#sitting"], mentions: ["@Angus", "@Joe", "@Hannah", "@Lucy"], tagCount: 2, mentionCount: 4, length: 65 }
        )
    });
    test('should return object with only unique hash tags and handles mentioned', () => {
        expect(getTweetData("Hamster")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 7 })
        expect(getTweetData("#coding and #coding all day")).toEqual({ tags: ["#coding"], mentions: [], tagCount: 1, mentionCount: 0, length: 27 })
        expect(getTweetData("@cat @cat @dog @hamster @dog @parrot")).toEqual(
            { tags: [], mentions: ["@cat", "@dog", "@hamster", "@parrot"], tagCount: 0, mentionCount: 4, length: 36 }
        )
    });
    test('should ignore common punctuation on tags and mentions', () => {
        expect(getTweetData("#hamsters, #hamsters, #hamsters!")).toEqual({ tags: ['#hamsters'], mentions: [], tagCount: 1, mentionCount: 0, length: 32 })
        expect(getTweetData("hello @coding! I love #coding.")).toEqual({ tags: ["#coding"], mentions: ["@coding"], tagCount: 1, mentionCount: 1, length: 30 })
        expect(getTweetData("How do I get to @northcoders?")).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 29 })
        expect(getTweetData("@northcoders: my #favePlace; they are lovely")).toEqual(
            { tags: ["#favePlace"], mentions: ["@northcoders"], tagCount: 1, mentionCount: 1, length: 44 }
        )  
    });
})