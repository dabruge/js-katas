const updateRemoteStudents = require("../update-remote-students")

describe('updateRemoteStudents()', () => {
    test('should return an array', () => {
        expect(updateRemoteStudents([])).toEqual([])
    });
    test('should return a NEW array with different reference', () => {
        let input = []
        expect(updateRemoteStudents(input)).not.toBe(input)
    });
    test('should return same single object in array if passed one already with location key', () => {
        let input = [{ name: 'Dave', age: 30, location: 'manchester' }]
        let expected = [{ name: 'Dave', age: 30, location: 'manchester' }]
        expect(updateRemoteStudents(input)).toEqual(expected)
    });
    test('should return same array if all locations are already present', () => {
        let input = [{ name: 'Dave', age: 30, location: 'manchester' },
                     { name: 'Mike', age: 20, location: 'leeds' },
                     { name: 'Sally', age: 35, location: 'leeds' },
                     { name: 'George', age: 28, location: 'manchester' }
                    ]

        let expected = [{ name: 'Dave', age: 30, location: 'manchester' },
                        { name: 'Mike', age: 20, location: 'leeds' },
                        { name: 'Sally', age: 35, location: 'leeds' },
                        { name: 'George', age: 28, location: 'manchester' }
                    ]
        expect(updateRemoteStudents(input)).toEqual(expected)
    });
    test('should return array with locations populated with remote where missing', () => {
        let input = [{ name: 'Dave', age: 30, location: 'manchester' },
                     { name: 'Mike', age: 20 },
                     { name: 'Sally', age: 35, location: 'leeds' },
                     { name: 'George', age: 28}
                    ]

        let expected = [{ name: 'Dave', age: 30, location: 'manchester' },
                        { name: 'Mike', age: 20, location: 'remote' },
                        { name: 'Sally', age: 35, location: 'leeds' },
                        { name: 'George', age: 28, location: 'remote' }
                    ]
        expect(updateRemoteStudents(input)).toEqual(expected)
    });
})