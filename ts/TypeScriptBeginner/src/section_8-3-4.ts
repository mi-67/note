/**
 * 3秒後に成功する Promise を自作する
 */
const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100)
  }, 3000)
})

p.then((num) => {
  console.log(`結果は${num}`)
}).catch((error) => console.log(error))
