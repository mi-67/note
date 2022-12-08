function map (array: number[], callback: (value: number) => number): number[] {
  const result = []
  for (const num of array) {
    result.push(callback(num))
  }
  return result
}

function map2<T, U> (array: T[], callback: (value: T) => U): U[] {
  const result = []
  for (const val of array) {
    result.push(callback(val))
  }
  return result
}

const data = [1, 1, 2, 3, 5, 8, 13]
const result = map(data, (x) => x * 10)
const result2 = map2(data, (x) => x * 10)

console.log(result)
console.log(result2)
