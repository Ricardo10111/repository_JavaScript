const myArray = [
  'Omar',
  'Dnise',
  'Miguel',
  'Mario',
  'Eduardo',
  'Miguel',
  'Miguel'
]
const cosa = 'Miguel'
const search = (thing) => thing === cosa

const myFunction = (array, callBack) => {
  const newArray = []
  array.forEach((element) => {
    const exist = callBack(element)
    if (exist) newArray.push(element)
  })
  return newArray.length
}

console.log(myFunction(myArray, search))
console.log(myFunction(myArray, (thing) => thing === cosa))
