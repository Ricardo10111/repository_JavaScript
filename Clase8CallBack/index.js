// Un call back es un metodo que recibe una funcion interna
// const cosas = ['perro', 'gato', 'caballo', 'perro']

// const found = cosas.filter((cosa) => cosa === 'perro')
// console.log(found.length)

const convierteAArray = (str) => str.split('')
const invierteAArray = (array) => array.reverse('')
const convierteAString = (array) => array.join('')
const imprimir = (message) => console.log(message)

const formato = (str, callback1, callback2, callback3, callback4) => {
  const cA = callback1(str)
  const iA = callback2(cA)
  const cS = callback3(iA)
  callback4(cS)
  return
}

formato(
  'Hola Mundo',
  convierteAArray,
  invierteAArray,
  convierteAString,
  imprimir
)

// const formato = (str, callback) => {
//   const formated = str.split('').reverse().join(' ')
//   callback(formated)
//   return formated
// }

// formato('Hola mundo como estan', imprimir)
