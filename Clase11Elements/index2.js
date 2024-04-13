// document.addEventListener('DOMContentLoaded', () => {
//   const parrafos = document.querySelectorAll('p')

//   parrafos.forEach((p, index) => {
//     const content = p.innerHTML
//     if (!content.includes('.')) p.innerHTML = '$' + content
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  const titulo = document.querySelector('h1')
  //   titulo.style.fontSize = '100px'
  titulo.classList = 'LOL otra clase'
  titulo.id = 'esteEsSuId'
  titulo.setAttribute('atributo', 'valor10pts')
  //   console.log(titulo.getAttribute('atributo'))
  console.log(titulo.offsetTop)
  console.log(titulo.offsetLeft)
  console.log(titulo.getClientRects())
})
