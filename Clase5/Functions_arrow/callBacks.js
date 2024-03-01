// Función que simula una operación asincrónica
// function operacionAsincronica(callback) {
//   console.log('Iniciando operación asincrónica...')
//   setTimeout(function () {
//     console.log('Operación asincrónica completada.')
//     callback() // Llamada al callback
//   }, 2000)
// }

// Función de callback
// function miCallback () {
//   console.log('¡El callback ha sido ejecutado!')
// }

// Llamada a la función que realiza la operación asincrónica
// operacionAsincronica(miCallback)

// Forma 1
// Estas no pueden ser anonimas
function imprimir () {
  console.log('imprimiendo....')
}

imprimir()

// function nombre (parametros){/*cuerpo de la funcion*/}
//                 (parametros) => {/*cuerpo de la funcion*/}
// arrow function
// pueden ser anonimas
const imprimir2 = () => {
  console.log('imprimiendo2....')
}
imprimir2()

// console.log(() => { console.log('Hola') })
const arroW = () => { console.log('Hola') }
arroW()

// ['laura', 'aldo', 'manuel'].foreach(function algo () {console.log('algo')})
// ['laura', 'aldo', 'manuel'].foreach(() => {console.log('algo')})

// funcion == metodo == callback

const saludar = (name= 'amigo') => console.log(`Hola ${name}!`); /**return implicito */
saludar('Carlos')
saludar()

// nuevo

const saludar3 = (name) => {
  const message = `Hola ${name}`

  return message
}

console.log(saludar3('Ricardo'))

// funcion == metodo == callback
/* arrow functions
  1. anonimas
  2. usan flecha
  3. return implicito
*/
function saludar (name) {
  const message = `Hola ${name}!`
  /* mandar un correo a la persona y saludarla por email */
  return message /* explicito */
}
const saludar2 = (name) => `Hola ${name}!`
const saludar3 = (name) => {
  const message = `Hola ${name}!`
  /* mandar un correo a la persona y saludarla por email */
  return message /* explicito */
}
Contraer




