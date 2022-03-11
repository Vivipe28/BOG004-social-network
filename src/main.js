import { changeView } from './View-Controller/index.js'

const init = () => {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', init)

/*
import { saveLogin } from './lib/index.js'
const login = document.getElementById('login')

login.addEventListener('submit', (e) => {
    e.preventDefault()

    const nickname = login['nickname']
    const email = login['email']
    const password = login['password']

    saveLogin(nickname.value, email.value, password.value)

    saveLogin.reset();

})
*/