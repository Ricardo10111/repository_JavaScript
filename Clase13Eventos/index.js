// sintaxis
// nodo.addEventListener('sale de la casa con el novio osea evento', (parametro que le pasa addEventListener como cualquier callback y es opcional) => {})
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn-event')
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    alert('Hola')
  })
})
