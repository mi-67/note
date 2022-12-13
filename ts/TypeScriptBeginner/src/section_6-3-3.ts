interface Animal633 {
  tag: 'animal'
  species: string
}

interface Human633 {
  tag: 'human'
  name: string
}

type User633 = Animal633 | Human633

function getUserName (user: User633): string {
  if (user.tag === 'human') {
    return user.name
  } else {
    return '名無し'
  }
}
const tama: User633 = {
  tag: 'animal',
  species: 'Felis silvestris catus'
}

const uhyo633: User633 = {
  tag: 'human',
  name: 'uhyo'
}

// これはエラー
/*
 const alien: User633 = {
  tag: 'alien',
  name: 'gray'
}
*/

console.log(getUserName(tama))
console.log(getUserName(uhyo633))
