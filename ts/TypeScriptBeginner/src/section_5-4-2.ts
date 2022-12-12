class User542 {
  name: string
  #age: number

  constructor (name: string, age: number) {
    this.name = name
    this.#age = age
  }

  public isAdult (): boolean {
    return this.#age >= 20
  }

  public filterOlder (users: readonly User542[]): User542[] {
    /*
    users.filter を呼び出す際にコールバック関数としてアロー関数を渡している
    アロー関数の中で u.#age と this.#age を比較（ここで this を利用）
    this.#age の this は filterOlder 内の this と同じものを指す（アロー関数内の this は外側の関数の this を受け継いでいるため）

    今回は uhyo542.filterOlder として呼び出されているので，filterOlder 内の this = uhyo であり，
    u.#age > this.#age は u.#age > uhyo.#age と同義，つまり uhyo.#age(= 25) より年上である bob のみが返される
    */
    return users.filter(u => u.#age > this.#age)
  }
}

const uhyo542 = new User542('uhyo', 25)
const john = new User542('John Smith', 15)
const bob = new User542('Bob', 40)
const older = uhyo542.filterOlder([john, bob])
console.log(older)
