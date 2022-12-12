class User543 {
  name: string
  #age: number

  constructor (name: string, age: number) {
    this.name = name
    this.#age = age
  }

  public isAdult (): boolean {
    return this.#age >= 20
  }
}

const uhyo543 = new User543('uhyo', 25)
const john543 = new User543('John Smith', 15)

console.log(uhyo543.isAdult())

// john を this として，uhyo543.isAdult() を呼び出す
console.log(uhyo543.isAdult.apply(john543, []))

// 上と同義
console.log(Reflect.apply(uhyo543.isAdult, john543, []))
