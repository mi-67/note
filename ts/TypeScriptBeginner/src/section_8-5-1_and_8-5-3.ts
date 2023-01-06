import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const sleep = async (duration: number): Promise<void> => {
  return await new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, '../uhyo.txt')
sleep(1).then(() => {
  process.exit()
}).catch((error) => {
  console.log(error)
})
const data = await (readFile(dataFile, { encoding: 'utf8' }))

let count = 0
let currentIndex = 0

while (true) {
  const nextIndex = data.indexOf('uhyo', currentIndex)
  if (nextIndex >= 0) {
    count++
    currentIndex = nextIndex + 1
  } else {
    break
  }
}
console.log(count)
