// 1. Dado un arreglo [1,2,3,4,5,6], retornar un nuevo arreglo que contenga como elementos, arreglos con la cantidad de elementos que indica el numero: ejemplo: [[1],[2,2],[3,3,3], ...]
const numbers = [1, 2, 3, 4, 5, 6]

const addNumberArray = (arrayN) => arrayN.map((elemento, index) => Array(index + 1).fill(index + 1))

console.log(addNumberArray(numbers))

// 2. Crear una función que dado una array y un string devuelva los elementos del arreglo que contengan al string ejemplo: f('ma',['manzana','perro','marmota']) devuelve ['manzana','marmota']
const things = [
  'silla',
  'mesa',
  'tele',
  'sillon',
  'maleta',
  'telescopio',
  'silbato'
]
const searching = 'te'
const functionBuscar = (array, str) => {
  const result = array.filter((word) => word.includes(str))
  return result
}

console.log(functionBuscar(things, searching))

// 3. Dado un arreglo de calificaciones de un grupo, devolver el promedio de cada alumno

const alumnos = [
  {
    name: 'Ricardo',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Francisco',
    grades: [9, 5, 8, 7]
  },
  {
    name: 'Pancho',
    grades: [8, 9, 8, 7]
  },
  {
    name: 'Pedro',
    grades: [2, 9, 8, 7]
  },
  {
    name: 'Sanuel',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Samanta',
    grades: [9, 10, 8, 7]
  },
  {
    name: 'Adriana',
    grades: [2, 10, 8, 7]
  },
  {
    name: 'Angelica',
    grades: [9, 6, 9, 7]
  },
  {
    name: 'Rebeca',
    grades: [4, 9, 8, 7]
  },
  {
    name: 'Raul',
    grades: [9, 9, 8, 7]
  },
  {
    name: 'Paola',
    grades: [5, 6, 10, 7]
  },
  {
    name: 'Juan',
    grades: [8, 7, 6, 9]
  }
]
const functionAverage = (array) => {
  const promedioAlumno = array.map((alumno) => {
    const sumaDeCalificaciones = alumno.grades.reduce((total, calificacion) => total + calificacion, 0)
    const promedio = sumaDeCalificaciones / alumno.grades.length
    return {
      name: alumno.name,
      average: promedio
    }
  })

  return promedioAlumno
}

console.log(functionAverage(alumnos))
