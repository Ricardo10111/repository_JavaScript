const moneda = ['cara', 'cruz']
const lanzarMoneda = (array) => Math.floor(Math.random() * array.length)
console.log(moneda[lanzarMoneda(moneda)])
