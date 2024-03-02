// function nombreDeLaFuncion (prametros si importa el orden en los parametros) {}
function print (name, lastName) {
  console.log(name, lastName)
}
// print('Ricardo', 'Lopez')

// function printGive () {
//   const giveMeYourName = prompt('Por favor ingresa tu nombre')
//   const giveMeYourLastName = prompt('Por favor dame tu apellido')
//   console.log('Tu nombre es: ', giveMeYourName, giveMeYourLastName)
// }

// console.log(printGive())

function print2({ name, lastname }) {
  console.log(name, lastname)
}
// print2({ name: 'lopez', lastname: 'Ricardo' })

function print3 ({ name, lastname, age, gender, heigth }) {

  console.log(name, lastname, age, gender, heigth)
  
}
// print3({ 
//   name: 'Ricardo', 
//   lastname: 'Lopez', 
//   age: '30', 
//   gender: 'male', 
//   heigth: 1.80,
//   weight: '30Kg'
// })

function print4 (props) {
  // const {name, age} = props /* Con esto puedo extraer las propiedades que necesito */
  const { user, password, ...rest } = props /* todos menos los que no quiero en este caso props guarda todo el objeto y con los ...rest copio todo lo que esta en props excluyendo todo lo que esta afuera de ...rest*/
  console.log(rest)

}
// print4({ 
//   name: 'Ricardo', 
//   lastname: 'Lopez', 
//   age: '30', 
//   gender: 'male',
//   user: 'sadasd',
//   password: 'contraseñasegura', 
//   heigth: 1.80,
//   weight: '30Kg'
// })

function print5 ({ user, password, ...rest }) { /* es lo mismo que el de arriba sin meterlo en un props  */
  console.log(rest)
}
print5({ 
  name: 'Ricardo', 
  lastname: 'Lopez', 
  age: '30', 
  gender: 'male',
  user: 'sadasd',
  password: 'contraseñasegura', 
  heigth: 1.80,
  weight: '30Kg'
})

// function sumNumbers () {
//   const giveMeFirstNumber = parseFloat(prompt('Please give me the first number: '))
//   const giveMeSecondNumber = parseFloat(prompt('Please give me the second number: '))
//   const result = giveMeFirstNumber + giveMeSecondNumber
//   console.log('The sum of the two numbers is: ', result)
// }
// console.log(sumNumbers())

// function infoNew ({name, lastName, age, gender, userName, password}) {

//   const rest = { name, lastName, age, gender, userName, password } /* todos menos los que no quiero en este caso props guarda todo el objeto y con los ...rest copio todo lo que esta en props excluyendo todo lo que esta afuera de ...rest*/
//   console.log(rest)
  
// }

// const giveMeYourName = prompt('Please give me your name')
// const giveMeYourLastName = prompt('Please give me your lastname')
// const giveMeYourAge = prompt('Plesae give your age')
// const giveMeYourGender = prompt('Please give your gende')
// const giveMeYourUserName = prompt('Please give your UserName')
// const giveMeYourPassword = prompt('Please give your Password')
// console.log(infoNew(giveMeYourName, giveMeYourLastName, giveMeYourAge, giveMeYourGender, giveMeYourUserName, giveMeYourPassword ))

// Esto es un scope existe el global y el local, y es importante 
const x = 'Hola Mundo' /* esta varable la puede usar todo el codigo por que esta fuera de la function */
function scope () {
  const b = 'Saludos' /* esta variable es local eso quiere decir que sirve dentro de la funcion */
  console.log(b)
}

console.log(x)
scope()

// Otra Forma de funciones

const a = function() {
  console.log('Hola')

}
a()

const sum = function(a, b){
  const result = a + b

  return result
}

console.log(sum(4, 6))



let num = 0

function counter () {
  if (num >= 10) {
    return
  }

  num = num +1
  console.log(num)

  // Ejecutar dentro (recursividad)
  counter()
}

// Ejecutar fuera
counter()

const person = 'Ricardo'

console.log(`Hola Mundo ${person} mucho gusto`)/* con el acento invertido puedo ingresar JS dentro del string se le llama template string */


