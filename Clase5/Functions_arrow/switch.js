const sentimiento = 'tristeza'

switch (sentimiento) {
  case 'enojo':
    console.log('estoy enojado')
    break

  case 'felicidad':
    console.log('estoy feliz')
    break

  case 'tristeza':
    console.log('estoy triste')
    break

  case 'ansiedad':
    console.log('estoy ansioso')
    break

  default:
    console.log('estoy meh')
    break
}

// esto de arriba es como esto con if

if (sentimiento === 'enojo') console.log('if -estoy enojado ')
else if (sentimiento === 'tristeza') console.log('if -estoy triste ')
else if (sentimiento === 'felicidad') console.log('if -estoy feliz ')
else if (sentimiento === 'ansiedad') console.log('if -estoy ansiedad ')
else console.log('if -estoy meh...')

function imprimir (name) {
  if (name) {
    console.log(name)
    return
  }
  console.log('te falta poner el nombre')

  return
}

imprimir('Ricardo')
