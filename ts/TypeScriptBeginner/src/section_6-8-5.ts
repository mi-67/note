function mapOption<T, U> (obj: Option<T>, callback: (value: T) => U): Option<U> {
  if (obj.tag === 'none') {
    return obj
  } else {
    return {
      tag: 'someVal',
      value: callback(obj.value)
    }
  }
}

function doubleOption (obj: Option<number>): Option<number> {
  return mapOption(obj, x => x * 2)
}

const four: Option<number> = {
  tag: 'someVal',
  value: 4
}

const nothing: Option<number> = {
  tag: 'none'
}

console.log(doubleOption(four))
console.log(doubleOption(nothing))
