import { readFile } from 'fs/promises'

const p = readFile('src/section_8-3-1/foo.txt', 'utf8')

p.then((data) => { // 成功時
  console.log(data)
}).catch((error) => { // 失敗時
  console.log('error:', error)
})
