function get<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key]
}

interface Human643 {
  name: string
  age: number
}

const uhyo643: Human643 = {
  name: 'uhyo',
  age: 26
}

// uhyoName は string 型
const uhyoName = get(uhyo643, 'name')

// uhyoAge は number 型
const uhyoAge = get(uhyo643, 'age')
