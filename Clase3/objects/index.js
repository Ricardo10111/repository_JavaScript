// IMPORTANTE!!!!!!!!!!! LOS OBJETOS NO SON ITERABLES
const persona = {
  name: '',
  age: 30,
  height: '1.80',
  gender: 'male',
  foodType: ['frutas', 'verduras', 'semillas', 'etc'],
  eyes: {
    color: 'brown',
    shape: 'big'
  },
  //   una funcion es lo mismo que un metodo
  dormir: function () {
    console.log('estoy durmiendo')
  },
  comer: function () {
    console.log('estoy comiendo...')
  },
  saludar: function () {
    console.log('¡Hola!')
  },
  propiedadInventada: 'Todo bien',
  '45-propiedadInventada-$ftfgt': 'todo MAL!!'
}

const dynamic = 'height'
// Forma #1 de acceder a un objeto
console.log(persona.eyes.color)
console.log(persona.age)

// Forma #2 de acceder a un objeto

// console.log(persona['eyes']['color'])
console.log(persona['45-propiedadInventada-$ftfgt'])
console.log(persona[dynamic])

persona.comer()
persona.dormir()
