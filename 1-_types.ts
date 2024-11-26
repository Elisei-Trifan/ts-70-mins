const str: string = 'Hello'

let int: number = 42
int = 22

const myArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const myArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

myArray.push(15)
console.log(myArray)

// Tuple - кортеж
const contact: [string, number] = ['Elisei', 123456789]

// Any
let age: any = 29
age = '229'

//  ===
function sayName(name: string): void {
  console.log(name)
}

sayName('Elisei')

// Type
type ID = number

type User = {
  id: number
  name: string
}

type Status = 'success' | 'loading' | number
type UserStatus = User & Status
