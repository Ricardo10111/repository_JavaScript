// const array1 = ['a', 'b', 'c']
// array1.forEach((element) => console.log(element.toUpperCase()))

// const found = (element) => element === cosa
// const forEachMine = (thing, callback) => {
//   const newArray = []
//   for (let i = 0; i < thing.lenght; i++) {
//     const exist = callback(thing[i])
//     if (exist) newArray.push(exist)
//   }
//   return newArray
// }
// console.log(forEachMine(array1))
// const colores = ['verde', 'blanco', 'rojo', 'azul', 'negro', 'lila', 'plata']

// const found = colores.find((color) => color.length > 5)
// if (found === String) console.log(found)
// else {
//   console.log('No hay nada')
// }

// const cosa = 'rojo'
// const result = colores.includes(cosa)
// if (result === true) console.log(`el elemto ${cosa} SI esta`)
// else {
//   console.log(`el elemto ${cosa} NO esta`)
// }

// const numeros = [2, 4, 1, 8, 9, 5, 10, 22, 11]

// console.log(numeros)
// ESTA FUNCION ES IMPORTANTE (a, b) => a - b)!!!!!!!!
// console.log(numeros.sort())
// console.log(numeros.sort((a, b) => a - b))
// console.log(numeros.sort((a, b) => b - a))

// 6 marzo metodo filter

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numeros.filter((numero) => numero % 2 === 0)
const result2 = numeros.filter((numero) => numero % 2 !== 0)
if (result) console.log(`Los numeros pares dentro del array son: ${result}`)
if (result2) console.log(`Los numeros impares dentro del array son: ${result2}`)

// 6 marzo metodo map
const result3 = numeros.map((numero) => numero * 2 + 4)
console.log(`Este es el array original ${numeros}`)
console.log(`Este es el array modificado por map ${result3} `)
const result4 = numeros.map((numero) => Math.sqrt(numero))
console.log(result4)

const numeros2 = Array(100)
  .fill()
  .map((numero, index) => index + (index + 1))
console.log(numeros2)
// const numeros3 = Array(100).fill().map((numero, index) => {
//     console.log(numero)

//     index + (index + 1))
// }

// 6 marzo metodo map
const cosasNew = ['casa', 'perro', 'pelota']

const result5 = cosasNew.reduce((accumulator, current) => {
  // cuerpo de la funcion
  accumulator.push(current + ' nuevo')
  return accumulator
}, [])

console.log(result5)
