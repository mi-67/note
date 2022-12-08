for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i)
  console.log(message)
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i)
  console.log(message)
}

function getFizzBuzzString (i: number): string {
  let message = ''
  if (i % 3 === 0 && i % 5 === 0) {
    message = 'FizzBuzz'
  } else if (i % 3 === 0) {
    message = 'Fizz'
  } else if (i % 5 === 0) {
    message = 'Buzz'
  } else {
    message = `${i}`
  }
  return message
}

function sequence (start: number, end: number): number[] {
  const result: number[] = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
