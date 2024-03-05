// 1. Crear una función que reciba un arreglo y lo regrese en orden invertido.

const arrayInvert = () => {
  const colors = ['red', 'green', 'black', 'white', 'blue'].reverse()
  return colors
}

console.log(`El array invertido es: ${arrayInvert()}`)

// 2. Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo.

const arrayNumers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const max = Math.max(...numbers)
  return max
}
console.log(`El valor mas grande es: ${arrayNumers()}`)

// 3. Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y
// false si no se encuentra

const arrayString = (sport) => {
  const sports = ['football', 'basquetball', 'voleyball', 'beisball']
  if (sports.includes(sport)) {
    return true
  } else {
    return false
  }
}

console.log(`El elmento existe? ${arrayString('football')}`)
console.log(`El elmento existe? ${arrayString('basquetball')}`)
console.log(`El elmento existe? ${arrayString('game')}`)

// 4. Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros.

const findElement = (parametro) => {
  const comida = [
    'papas',
    'jamon',
    'huevo',
    'papas',
    'zanahoria',
    'huevo',
    'papas'
  ]
  const resultado = comida.filter((word) => word === parametro)
  return resultado.length
}
console.log(`El elemento se encuentra ${findElement('papas')} veces`)

// 5. Crear una Función que suma 2 números y regrese el resultado

const sumaNumero = (x, b) => x + b

console.log(`La suma de los dos numero es ${sumaNumero(5, 6)}`)
