type SignType = 'plus' | 'minus'

function signNumber (type: SignType): number {
  return type === 'plus' ? 1 : -1
}

function numberWithSign (num: number, type: SignType | 'none'): number {
  if (type === 'none') {
    return 0
  } else {
    return num * signNumber(type)
  }
}

function numberWithSign2 (num: number, type: SignType | 'none'): number {
  if (type === 'none') {
    return 0
  }
  return num * signNumber(type)
}
function numberWithSign3 (num: number, type: SignType | 'none'): number {
  return type === 'none' ? 0 : num * signNumber(type)
}

console.log(numberWithSign(5, 'plus'))
console.log(numberWithSign(5, 'minus'))
console.log(numberWithSign(5, 'none'))

console.log(numberWithSign2(5, 'minus'))
console.log(numberWithSign3(3, 'plus'))
