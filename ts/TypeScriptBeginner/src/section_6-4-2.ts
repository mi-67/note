interface Human642 {
  name: string
  age: number
}

type HumanKeys = keyof Human642

let key: HumanKeys = 'name'
key = 'age'

// 型 '"hoge"' を型 'keyof Human642' に割り当てることはできません。
// key = 'hoge'

const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6
}

// typeof mmConversionTable -> {mm:number; m:number; km:number}
// keyof typeof mmConversionTable -> mm | m | km
function convertUnits (value: number, unit: keyof typeof mmConversionTable): typeof mmConversionTable {
  const mmValue = value * mmConversionTable[unit]
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6
  }
}

console.log(convertUnits(5600, 'm')) // {"mm":5600000, "m":5600, "km":5.6}
