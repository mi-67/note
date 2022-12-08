const xRepeat = (num: number): string => 'x'.repeat(num)

type F = (repeatNum: number) => string
const xRepeat2: F = (num: number): string => 'x'.repeat(num)

xRepeat2(4)
