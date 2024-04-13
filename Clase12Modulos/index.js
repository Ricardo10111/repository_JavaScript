// asi se importan por default
import buttons from './buttons.js'
// import calcular from "./calculator.js"
// asi se importan por nombre con {}
// import { multiplicar } from './calculator.js'
import calcular, { multiplicar, resta, suma } from './calculator.js'
// asi se resueve si tines un documento js que tiene los mismo que otro
import calcular2, { resta as resta2, suma as suma2 } from './calculator2.js'
// importando un json si lo voy a importat tengo que agregar que es un json no un module
import datos from './datos.json' assert { type: 'json' }
// esto de nuevo es por default 
import datosAlumnos from './datos-normales.js'
import {datosNormalesPorNombre} from './datos-normales.js'
document.addEventListener('DOMContentLoaded', () => {
    buttons()
    console.log(calcular(5, 2, '+'))
    console.log(calcular2(7, 2, '+'))
    console.log(resta(2, 6))
    console.log(resta2(7, 2))
    console.log(multiplicar(2, 6))
    console.log(suma(2, 6))
    console.log(suma2(2, 4))
    console.log('🚀 ~ datos:', datos)
    console.log("🚀 ~ datosAlumnos:", datosAlumnos)
    datosAlumnos.forEach((dato) => console.log('aquiiiiii', dato))
    console.log("🚀 ~ datosNormalesPorNombre:", datosNormalesPorNombre)
})
