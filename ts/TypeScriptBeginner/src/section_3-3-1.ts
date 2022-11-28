interface FooBar {
  foo: string
  bar: number
}

interface FooBarBuz {
  foo: string
  bar: number
  baz: boolean
}

const obj1: FooBarBuz = {
  foo: 'hi',
  bar: 1,
  baz: false
}

const obj2: FooBar = obj
