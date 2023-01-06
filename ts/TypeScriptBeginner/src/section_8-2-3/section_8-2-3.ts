import { readFile } from 'fs'
import { performance } from 'perf_hooks'

const startTime = performance.now()
readFile('foo.txt', 'utf8', (err, _result) => {
  if (err !== null) {
    console.log('エラーが発生しました')
  } else {
    const endTime = performance.now()
    console.log(`${endTime - startTime}ミリ秒かかりました`)
  }
})
