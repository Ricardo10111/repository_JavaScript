const colores = ['verde', 'blanco', 'rojo', 'azul', 'negro', 'lila', 'plata']

console.log(colores)
colores.pop()
console.log(colores)
colores.shift()
console.log(colores)
colores.unshift('Conejo')
console.log(colores)
console.log('Hola-como-estas'.split('-'))
console.log(typeof colores.join(', '))

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// numbers.push(8)
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// console.log(numbers.length)
// numbers.shift()
// console.log(numbers)
// console.log(numbers.length)

const comida = ['frijol', 'arroz', 'pollo', 'carne', 'spag', 'sand', 'platano']

console.log(comida.slice(1, 3))
console.log(comida)

comida.splice(1, 0, 'papa')
console.log(comida)
comida.splice(5, 1, 'Pepino')
console.log(comida)
