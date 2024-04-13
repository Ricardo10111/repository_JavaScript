document.addEventListener("DOMContentLoaded", () => {
    const pass = document.querySelector('[name="contraseña"]')
    const toggle = document.querySelector('#show-password')

    toggle.addEventListener('click', (event) => {
        const btnSpan = event.target
        if(btnSpan.innerHTML === '🙈') {
            pass.setAttribute('type', 'text')
            btnSpan.innerHTML = '🐵'
        }
        else{
            pass.setAttribute('type', 'password')
            btnSpan.innerHTML = '🙈'
        }

    })
});
// 🐵🙈