const sweter = new Object({
  color: 'rojo',
  material: 'algodon',
  gorrito: false,
  estampado: true
})

Object.prototype.cubrirDelFrio = function () {
  console.log('cubro del frio')
}
const Ricardo = Object(sweter)
console.log(Ricardo)
Ricardo.cubrirDelFrio()
// instanciar es crear un nuevo objeto

// 'Hola mundo' > String
// {} > Object
// [] > Array

// const Persona = new Object
