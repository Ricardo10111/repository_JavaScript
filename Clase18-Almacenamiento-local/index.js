document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#crud')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) ?? []
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const id = formData.get('id')
        // console.log("🚀 ~ form.addEventListener ~ id:", id)
        // return


        data.languages = formData.getAll('languages')
        data.id = users.length + 1
        data.nuevoMensaje = 'Hola como estas '
        users.push(data)
    
        const jsonString = JSON.stringify(users)
       localStorage.setItem('users', jsonString)
    })
})