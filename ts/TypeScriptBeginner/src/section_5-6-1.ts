// interface User561 {
//   name: string
//   age: number
// }

// function createUser (name: string, age: number): User561 {
//   if (name === '') {
//     throw new Error('名前を空にできません!')
//   }
//   return { name, age }
// }

// function getMessage (user: User561, message: string): string {
//   return `${user.name}(${user.age})「${message}」`
// }

// const uhyo561 = createUser('uhyo', 26)
// console.log(getMessage(uhyo561, 'こんにちは'))

class User561 {
  name: string
  age: number
  constructor (name: string, age: number) {
    if (name === '') {
      throw new Error('名前を空にできません!')
    }
    this.name = name
    this.age = age
  }

  getMessage (message: string): string {
    return `${this.name}(${this.age})「${message}」`
  }
}
const uhyo561 = new User561('uhyo', 26)
console.log(uhyo561.getMessage('こんにちは'))
