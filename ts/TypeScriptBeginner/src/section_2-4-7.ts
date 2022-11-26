import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('数値を入力してください:', (line) => {
  const num = Number(line)
  const message = num >= 0 && num < 100 ? `${num} は0以上100未満です` : `${num} は0以上100未満ではありません`
  console.log(message)
  rl.close()
})
