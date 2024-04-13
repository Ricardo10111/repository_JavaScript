export const suma = (a, b) => a + b
export const resta = (a, b) => a - b
export const multiplicar = (a, b) => a * b
export const division = (a, b) => a / b

export default (a, b, operation) => {
  let result = 0
  if (operation === '+') result = suma(a, b)
  if (operation === '-') result = resta(a, b)
  if (operation === '*') result = multiplicar(a, b)
  if (operation === '/') result = division(a, b)

  return result
}
