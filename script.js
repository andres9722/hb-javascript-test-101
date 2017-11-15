'use strict'

export function generateRandomColor() {
    let r = Math.trunc(Math.random() * 255),
        g = Math.trunc(Math.random() * 255),
        b = Math.trunc(Math.random() * 255),
        json =  {
            r, g, b
        }
        return json
}

export function functionalFilterNegativeNumbers(vec){
    let n = vec.filter(num => num >= 0)
    return n
}

export function filterNegativeNumbers(vec) {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        if(vec[i] >= 0) {
            elements.push(vec[i]);
        }
    }
    return elements
}

export function functionalMapNumbersIntoStrings(vec) {
    let n = vec.map(num => num.toString())
    return n
}

export function mapNumbersIntoStrings(vec) {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        elements.push(vec[i].toString());
    }
    return elements
}

export function printType(data) {
    console.log(typeof data)
}

export function isPalindrome(str) {
    let pal = str.replace(/\s/g,'').toLowerCase()
    let cleanString = pal.replace(/[\|&;\$%@"<>\(\)\+,*.]/g, "")
    return cleanString === cleanString.split('').reverse().join('')
}

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printName() {
        console.log(this.name)
    }
}

export function printOutPersonAge(person) {
    console.log(person.age)
}


