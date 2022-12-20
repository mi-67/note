import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filePath = fileURLToPath(import.meta.url)
const fileDir = path.dirname(filePath)
const dataFile = path.join(fileDir, 'uhyo.txt')
fs.readFile(dataFile, (err, data) => {
  if (data !== null) {
    const uhyoData = data.toString()
    const times = count(uhyoData, 'uhyo')
    console.log(times)
  } else {
    console.log(err)
  }
})

function count (data: string, str: string): number {
  const re = new RegExp(str, 'g')
  const count = data.match(re)?.length
  if (count === undefined) {
    return 0
  }
  return count
}
