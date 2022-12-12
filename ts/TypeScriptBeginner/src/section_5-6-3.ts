function createUser (name: string, age: number) {
  return (message: string) => {
    return `${name}(${age})「${message}」`
  }
}

const getMessage = createUser('uhyo', 26)
console.log(getMessage('こんにちは'))
