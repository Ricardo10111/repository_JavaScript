function sayHi (name = 'amigo') {
  const greeting = `Hola ${name}, mucho guto`

  return greeting
}

console.log(sayHi())
console.log(sayHi('Ricardo'))

let count = 0

function alterar () {
  count = count + 1
}

alterar()
alterar()
alterar()
alterar()
console.log(count)

function evenOdd (number) {
  if (typeof number !== 'number') {
    return 'no es un numero'
  }

  if (!!number % 2) {
    return true
  } else {
    return false
  }
}
console.log(`Tu numero es par? ${evenOdd(5)} `)
console.log(`Tu numero es par? ${evenOdd('dsf')} `)
