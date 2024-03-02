const numbers = [1, 2, 3, 4, 5]
const colors = ['green', 'white', 'red', 'blue']

const person = {
  name: 'Ricardo',
  age: 30
}

console.log(person.age)
console.log(person['name'])

console.log(colors.indexOf('red'))
console.log(colors[3])

// map
// forEach
// for
// while
// Investiga esto

const numeros = [1, 2, 3, 4, 5]

const duplicados = numeros.map((numero) => {
  return numero * 2
})

console.log(duplicados) // Salida: [2, 4, 6, 8, 10]

// const numeros = [1, 2, 3, 4, 5]

// numeros.forEach((numero, index) => {
//   console.log(`El elemento en el índice ${index} es ${numero}`)
// })

// Salida:
// El elemento en el índice 0 es 1
// El elemento en el índice 1 es 2
// El elemento en el índice 2 es 3
// El elemento en el índice 3 es 4
// El elemento en el índice 4 es 5
