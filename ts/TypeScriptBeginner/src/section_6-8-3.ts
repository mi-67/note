type Option683<T> = {
  tag: 'someVal'
  value: T
} | {
  tag: 'none'
}
function isSome<T> (obj: Option683<T>): boolean {
  return obj.tag === 'someVal'
}
function showNumberIfExists (obj: Option683<number>): void {
  if (isSome(obj)) {
    console.log(obj.value)
  }
}

const obj101: Option683<number> = {
  tag: 'someVal',
  value: 100
}
const nonVal101: Option683<number> = {
  tag: 'none'
}

showNumberIfExists(obj101)
showNumberIfExists(nonVal101)
