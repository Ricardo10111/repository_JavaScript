// cuando mandas a llamar una promesa se resuleve en el mismo lugar donde esta si la quieres mandar a llamar fuera
export const solicitarDatos = async () => {
  const responce = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((resp) => resp.json())

  return responce
}

// console.log('🚀 ~ solicitarDatos ~ solicitarDatos:', solicitarDatos())
