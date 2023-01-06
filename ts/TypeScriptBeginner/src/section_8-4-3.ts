const sleep = async (duration: number): Promise<void> => {
  return await new Promise<void>((resolve) => {
    setTimeout(resolve, duration)
  })
}

async function get3 (): Promise<number> {
  await sleep(1000)
  return 3
}

async function main (): Promise<number> {
  const num1 = await get3()
  const num2 = await get3()
  const num3 = await get3()
  return num1 + num2 + num3
}

main().then(result => {
  console.log(`result is ${result}`)
}).catch(error => {
  console.log(error)
})
