interface Obj {
  0: string
  1: number
}

const obj644: Obj = {
  0: 'uhyo',
  1: 26
}

obj644['0'] = 'john'
obj644[1] = 15

type ObjKeys = keyof Obj
