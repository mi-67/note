interface Animal {
  species: string
  age: number
}

// この書き方もOK
/*
export interface Animal {
  species: string
  age: number
}
*/

const tama: Animal = {
  species: 'Felis silvestris catus',
  age: 1
}

export { Animal, tama }
