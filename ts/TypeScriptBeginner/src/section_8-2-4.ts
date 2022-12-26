import { performance } from 'perf_hooks'

setTimeout(() => {
  console.log('タイマーが呼び出されました')
}, 100)

const startTime824 = performance.now()
let count = 0
while (performance.now() - startTime824 < 1000) {
  count++
}
console.log(count)
