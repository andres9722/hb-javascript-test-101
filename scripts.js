'use strict'

export function generateRandomColor() {
    let r = Math.trunc(Math.random() * 100),
        g = Math.trunc(Math.random() * 100),
        b = Math.trunc(Math.random() * 100),
        json =  {
            r, g, b
        }
        return json
}

/////////////////////////////////////////////////////////

export function functionalFilterNegativeNumbers(vec){
    let n = vec.filter(num => num >= 0)
    return n
}

/////////////////////////////////////////////////////////

export function filterNegativeNumbers(vec) {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        if(vec[i] >= 0) {
            elements[i] = vec[i];
        }
    }
    return elements
}

/////////////////////////////////////////////////////////

export function functionalMapNumbersIntoStrings(vec) {
    let n = vec.map(num => num.toString())
    return n
}

/////////////////////////////////////////////////////////

export function mapNumbersIntoStrings(vec) {
    let elements = []
    for (let i = 0; i < vec.length; i++) {
        elements[i] = vec[i].toString();
    }
    return elements
}

/////////////////////////////////////////////////////////

export function printType(data) {
    return typeof data
}

/////////////////////////////////////////////////////////

export function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

/////////////////////////////////////////////////////////

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printName() {
        console.log(this.name)
    }
}

let person = new Person('Jhon', 25)

export function personAge(person) {
    console.log(person.age)
}


