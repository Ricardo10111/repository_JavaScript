document.addEventListener('DOMContentLoaded', () => {
  const nuevaPublicacion = async () => {
    const response = fetch('https://api.restful-api.dev/objects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Iphone 32js',
        data: {
          year: 2024,
          price: 9893871.99,
          'CPU model': 'i7',
          'Hard disk size': '45 TB'
        }
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        alert('No pudimos guardar tu post :( intenta más tarde')
      })
    return response
  }
  const actualizarPublicacion = async (id) => {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Danie Cruz',
        body: 'Este es un nuevo post creado por POST',
        userId: 1
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        alert('No pudimos guardar tu post :( intenta más tarde')
      })
    return response
  }
  const borrar = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        alert('No pudimos borrar tu post :( intenta más tarde')
      })
  }
  const solicitarDatos = async () => {
    // const response = await fetch('./datos.json').then((res) => res.json())
    // GET |
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts?id=56')
    const response = fetch('https://api.restful-api.dev/objects')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        alert('No pudimos encontrar publicaciones :( intenta más tarde')
      })
    return response
  }
  // actualizarPublicacion(1)
  // borrar()
  // nuevaPublicacion()
  // solicitarDatos()
})

// then
// catch
