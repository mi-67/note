type Option<T> = {
  tag: 'someVal'
  value: T
} | {
  tag: 'none'
}

function useOptionT (option: Option<number>): void {
  if (option.tag === 'someVal') {
    console.log(option.value)
  }
}

const obj100: Option<number> = {
  tag: 'someVal',
  value: 100
}
const nonVal: Option<number> = {
  tag: 'none'
}

useOptionT(obj100)
useOptionT(nonVal)
