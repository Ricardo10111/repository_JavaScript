const today = new Date()
console.log(today.getDay())
console.log(today.getDate() + 7)
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getTime())
console.log(today.toDateString())
console.log(today.toTimeString())

// const diaSemana = ['d', 'l', 'm', 'mi', 'ju', 'v', 's', 'd']
// console.log(diaSemana.toString(', ').split(''))

const birthday = new Date('1989-09-15 17:43:12')
const date = birthday.getDay()
const month = birthday.toLocaleString('es-MX', { month: 'short' })
const year = birthday.getFullYear()

console.log(`La fecha es ${date}/${month}/${year}`)

// console.log(nameMonthS)
