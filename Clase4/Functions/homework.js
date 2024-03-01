// 1

function giveName (name) {
  if (!name) return console.log('Hola amigo como estas!!')
  console.log(`Hola ${name} como estas!!`)
}

giveName('Ricardo')
giveName()

// 2

let num = 0

function value () {
  if (num >= 5) {
    return
  }
  num = num + 1
  console.log(num)
  value()
}

value()

// 3

function numberTrue (a) {
  if (a != NaN) return 'No es un numero'
  if (a % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(`Tu numero 2 es par?  ${numberTrue(2)}`)
console.log(`Tu numero 3 es par? ${numberTrue(3)}`)
console.log(`Tu numero 3 es par? ${numberTrue('s')}`)
console.log(!!0)
console.log(!!1)
