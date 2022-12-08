interface MyObj {
  foo: boolean
  bar: boolean
  baz?: number
}

const obj1: MyObj = { foo: false, bar: true }
const obj2: MyObj = { foo: true, bar: false, baz: 1234 }
console.log('obj1:', obj1)
console.log('obj1.baz:', obj1.baz)
console.log('obj2:', obj2)
console.log('obj2.baz:', obj2.baz)
