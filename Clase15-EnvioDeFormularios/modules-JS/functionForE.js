export const busquedaArray = async (fn) => {
  const datosPost = await fn()
  // console.log('🚀 ~ datosPost:', datosPost)
  datosPost.forEach((datos) => {
    const ulFirst = document.createElement('ul')
    const ulSecond = document.createElement('ul')
    const liFirst = document.createElement('li')
    const liSecond = document.createElement('li')
    const liThird = document.createElement('li')
    const liForth = document.createElement('li')
    const mainContainer = document.querySelector('body')
    const divContainer = document.createElement('div')
    mainContainer.append(divContainer)
    liFirst.textContent = datos.title
    liSecond.textContent = datos.body
    ulFirst.append(liFirst, liSecond)

    liThird.textContent = datos.userId
    liForth.textContent = datos.id

    ulFirst.append(ulSecond)
    ulSecond.append(liThird, liForth)
    divContainer.append(ulFirst)
  })
}
