document.addEventListener('DOMContentLoaded', () => {
  //   const container = document.querySelector('body')
  //   const btn = document.createElement('a')

  //   btn.textContent = 'Iniciar sesion'
  //   btn.style.background = 'purple'
  //   btn.style.color = 'white'
  //   btn.style.border = 'dashed 2px cyan'
  //   btn.style.borderRadius = '10px'
  //   btn.style.display = 'block'
  //   btn.style.width = '200px'
  //   btn.style.textAlign = 'center'
  //   btn.style.padding = '10px'

  //   btn.setAttribute('href', '/iniciar-secion')
  //   container.prepend(btn)

  const container = document.querySelector('body')
  const nav = document.createElement('div')
  nav.classList = 'contenedor-de-botones'
  container.append(nav)
  /** */

  const createBtn = (
    { background = 'purple', color = 'white', url = '#', text = '...' },
    box
  ) => {
    const btn = document.createElement('a')
    btn.textContent = text
    btn.style.background = background
    btn.style.color = color
    btn.style.border = 'solid 2px white'
    btn.style.borderRadius = '10px'
    btn.style.display = 'inline-block'
    btn.style.minWidth = '200px'
    btn.style.textAlign = 'center'
    btn.style.padding = '10px'
    btn.setAttribute('href', url)
    box.append(btn)
  }

  createBtn({ background: 'white' }, nav)
  createBtn({}, nav)
  createBtn({}, nav)
  createBtn({}, nav)
  createBtn({}, nav)
  createBtn(
    {
      background: 'green',
      color: 'yellow',
      url: '/nueva-pagina.html',
      text: 'boton de santiago'
    },
    nav
  )
})
