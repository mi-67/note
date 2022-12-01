interface User {
  name: string
  age: number
  premiumUser: boolean
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`

const splitData = data.split('\n').slice(1, 4)
const users: User[] = []
for (const userData of splitData) {
  const [name, age, premiumUser] = userData.split(',')
  let isPremiumUser = false
  if (premiumUser === '1') {
    isPremiumUser = true
  }
  users.push({ name, age: Number(age), premiumUser: isPremiumUser })
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです`)
  } else {
    console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`)
  }
}
