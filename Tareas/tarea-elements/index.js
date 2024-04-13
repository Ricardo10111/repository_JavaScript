document.addEventListener('DOMContentLoaded', () => {
  // 1 Crear un `H1` con el texto *Hola mundo, agregarlo al DOM*

  const container = document.querySelector('body')
  const title = document.createElement('h1')
  title.textContent = 'Hola Mundo'
  container.append(title)
  //   2 Crear un `ul` y dado un arreglo de nombres insertar nodos `li` por cada elemento en el arreglo

  const names = ['Ricardo', 'Juan', 'Angelica', 'Pedro', 'Pancha']
  const insertNames = (array) => {
    const ulInside = document.createElement('ul')
    array.forEach((element) => {
      const lista = document.createElement('li')
      lista.innerHTML = element
      ulInside.append(lista)
    })
    return ulInside
  }
  container.append(insertNames(names))

  // 3 Crear un elemento `p` y después eliminarlo a traves de su nodo padre
  // console.log('ejer 3')
  const container2 = document.createElement('div')
  container2.classList.add('divClass')
  // console.log('appendear', container2)
  container.append(container2)
  const parr = document.createElement('p')
  parr.textContent = 'Hola ya me voy en 4 segundos'
  container2.append(parr)
  setTimeout(() => {
    container2.removeChild(parr)
  }, 4000)
})
