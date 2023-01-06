async function main (): Promise<void> {
  const { readFile, writeFile } = await import('fs/promises')

  try {
    const fooContent = await readFile('src/section_8-4-4/foo.txt', 'utf8')
    await writeFile('src/section_8-4-4/bar.txt', fooContent + fooContent)
    console.log('書き込み完了しました')
  } catch {
    console.log('失敗しました')
  }
}

main().then(() => {
  console.log('main()が成功しました')
}).catch(() => {
  console.log('main()が失敗しました')
})
