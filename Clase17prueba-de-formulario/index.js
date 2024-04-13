document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#crud')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        console.log("🚀 ~ form.addEventListener ~ formData:", formData)

        // let obj = {}

        // for (item of entries) {
        //     obj[item[0]] = item[1]
        // }
        const data = Object.fromEntries(formData.entries())
        data.languages = formData.getAll('languages')
        data.nuevoMensaje = 'Hola como estas '
        console.log (data)
    })
})