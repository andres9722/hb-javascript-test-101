import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './script.js'

test('should have "r", "g" and "b" as properties with numbers as values', () => {
    expect(generateRandomColor()).toMatchObject(expect.objectContaining({
        r: expect.any(Number),
        g: expect.any(Number),
        b: expect.any(Number)
    }))
})

test('the numbers should not have decimal numbers', () => {
    const values = generateRandomColor()

    for (let prop in values) {
        expect(values[prop] % 1 === 0).toBeTruthy()
    }
})

test('the numbers should be less than 255 and greater than 0', () => {
    const values = generateRandomColor()
    
    for (let prop in values) {
        expect(values[prop]).toBeGreaterThanOrEqual(0)
        expect(values[prop]).toBeLessThanOrEqual(255)
    }
})

test('should return a new array without negative numbers', () => {
    const arr = [-4, -5, -56, -12, -6, 7, 8, -5, 3, 9, 0]
    expect(filterNegativeNumbers(arr)).toEqual([7, 8, 3, 9, 0])
    expect(filterNegativeNumbers([0])).toEqual([0])
    expect(functionalFilterNegativeNumbers([0])).toEqual([0])
})

test('should return an empty array if all the values are negative', () => {
    expect(filterNegativeNumbers([-5])).toEqual([])
    expect(functionalFilterNegativeNumbers([-5])).toEqual([])
})

test('should return an empty array if the original array is empty', () => {
    expect(filterNegativeNumbers([])).toEqual([])
    expect(functionalFilterNegativeNumbers([])).toEqual([])
})

test('should not modify the original array', () => {
    const arr = [-5, 7, 5]
    const arrCopy = arr
    console.log(arrCopy)
    filterNegativeNumbers(arr)
    expect(arr).toEqual(arrCopy)
})

test('should return a new array with strings', () => {
    const arr = [-5, 7, 5]
    expect(mapNumbersIntoStrings(arr)).toEqual(['-5', '7', '5'])
    expect(functionalMapNumbersIntoStrings(arr)).toEqual(['-5', '7', '5'])
})

test('should return an empty array if the original array is empty', () => {
    expect(mapNumbersIntoStrings([])).toEqual([]);
    expect(functionalMapNumbersIntoStrings([])).toEqual([]);
})

test('should not modify the original array', () => {
    const arr = [-5, 7, 5]
    const arrCopy = arr
    mapNumbersIntoStrings(arr)
    expect(arr).toEqual(arrCopy)
})

beforeEach(() => {
    global.console = {
        log: jest.fn()
    }
})

test('should print in console the type', () => {
    printType(1);
    expect(global.console.log).toHaveBeenCalledWith('number')

    printType('hi');
    expect(global.console.log).toHaveBeenCalledWith('string')
})

test('should return true with a palindrome word', () => {
    expect(isPalindrome('ana')).toBeTruthy()
    expect(isPalindrome('oso')).toBeTruthy()
    expect(isPalindrome('%AniTA LAVa& LA tiNA')).toBeTruthy()
})

let personInstance

beforeAll(() => {
    personInstance = new Person('Andres', 19)

    global.console = {
        log: jest.fn()
    }
})

test('should return an instance with the correct values when calling it as a constructor', () => {
    expect(personInstance).toMatchObject({
        name: 'Andres',
        age: 19
    })
})

test('should print in console the age of the given instance', () => {
    printOutPersonAge(new Person('Andres', 19))
    expect(global.console.log).toHaveBeenCalledWith(19)
})

/*describe('generateRandomColor', () => {
    it('should have "r", "g" and "b" as properties with numbers as values', () => {
        expect(generateRandomColor()).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }))
    })

    it('the numbers should be less than 255 and greater than 0', () => {
        const values = generateRandomColor()

        for (let prop in values) {
            expect(values[prop]).toBeGreaterThanOrEqual(0)
            expect(values[prop]).toBeLessThanOrEqual(255)
        }
    })

    it('the numbers should not have decimal numbers', () => {
        const values = generateRandomColor()

        expect(values.r % 1 == 0).toBeTruthy()
        expect(values.g % 1 == 0).toBeTruthy()
        expect(values.b % 1 == 0).toBeTruthy()
    })
})*/

/*describe('filterNegativeNumbers', () => {
    it('should return a new array without negative numbers', () => {
        const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
        expect(filterNegativeNumbers(arr)).toEqual([0, 1, 2, 3, 4, 5])
        expect(filterNegativeNumbers([0])).toEqual([0])
        expect(functionalFilterNegativeNumbers([0])).toEqual([0])
    })

    it('should return an empty array if all the values are negative', () => {
        expect(filterNegativeNumbers([-1])).toEqual([])
        expect(functionalFilterNegativeNumbers([-1])).toEqual([])
    })

    it('should return an empty array if the original array is empty', () => {
        expect(filterNegativeNumbers([])).toEqual([])
        expect(functionalFilterNegativeNumbers([])).toEqual([])
    })

    it('should not modify the original array', () => {
        const arr = [-1, 0, 1]
        const arrCopy = JSON.parse(JSON.stringify(arr))
        filterNegativeNumbers(arr)
        expect(arr).toEqual(arrCopy)
    })
})*/

/*describe('mapNumbersIntoStrings', () => {
    it('should return a new array with strings', () => {
        const arr = [-1, 0, 1]
        expect(mapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1'])
        expect(functionalMapNumbersIntoStrings(arr)).toEqual(['-1', '0', '1'])
    })

    it('should return an empty array if the original array is empty', () => {
        expect(mapNumbersIntoStrings([])).toEqual([]);
        expect(functionalMapNumbersIntoStrings([])).toEqual([]);
    });

    it('should not modify the original array', () => {
        const arr = [-1, 0, 1]
        const arrCopy = JSON.parse(JSON.stringify(arr))
        mapNumbersIntoStrings(arr)
        expect(arr).toEqual(arrCopy)
    })
})*/

/*describe('printType', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        }
    })

    it('should print in console the type', () => {
        printType(1);
        expect(global.console.log).toHaveBeenCalledWith('number')
    })

})*/

/*describe('isPalindrome', () => {
    it('should return true with a palindrome word', () => {
        expect(isPalindrome('madam')).toBeTruthy()
    })

    it('should return true with a palindrome phrase', () => {
        expect(isPalindrome("A man, a plan, a canal. Panama")).toBeTruthy()
    })

    it('should return true with a palindrome phrase', () => {
        expect(isPalindrome("%AniTA LAVa& LA tiNA")).toBeTruthy()
    })
});*/

/*describe('Person', () => {
    let personInstance

    beforeAll(() => {
        personInstance = new Person('John', 100)

        global.console = {
            log: jest.fn()
        }
    })

    it('should return an instance with the correct values when calling it as a constructor', () => {
        expect(personInstance).toMatchObject({
            name: 'John',
            age: 100
        })
    })

    it('should print the Person instance name in the console', () => {
        personInstance.printName()
        expect(global.console.log).toHaveBeenCalledWith('John')
    })
});*/

/*describe('printOutPersonAge', () => {
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        }
    })

    it('should print in console the age of the given instance', () => {
        printOutPersonAge(new Person('John', 100))
        expect(global.console.log).toHaveBeenCalledWith(100)
    })
})*/