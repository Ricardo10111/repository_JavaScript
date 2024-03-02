const colores = ['verde', 'blanco', 'rojo', 'azul', 'negro', 'lila', 'plata']
// for (let i = 0; i < 4; i++) {
//   console.log(colores[i])
// }
// for (let i = 0; i < colores.length; i++) {
//   console.log(colores[i])
// }

// console.log(colores.length)
// console.log('Hola '.length)

// let i = 0
// while (i < colores.length) {
//   console.log(colores[i])
//   if (colores[i] === 'azul') break
//   i++
// }

let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(`${cuentaAtras} segundos`)
  cuentaAtras--
}
console.log('Despegue🚀')

// while (i < colores.length) {
//   if (colores[i] === 'azul') {
//     i++
//     continue
//   }
//   console.log(colores[i])
//   i++
// }

for (let i = 0; i < colores.length; i++) {
  if (colores[i] === 'rojo') continue
  console.log(colores[i])
}

// investiga el for if y el for of