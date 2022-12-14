interface Human641 {
  type: 'human'
  name: string
  age: number
}

function setAge (human: Human641, age: Human641['age']): Human641 {
  return {
    ...human,
    age
  }
}

const uhyo641: Human641 = {
  type: 'human',
  name: 'uhyo',
  age: 26
}
const uhyo641No2 = setAge(uhyo641, 27)
console.log(uhyo641No2) // {"type":"human", "name":"uhyo", "age":27}
