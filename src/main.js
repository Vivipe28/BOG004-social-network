import { saveLogin } from './lib/index.js'
import { Router } from './Routes/router.js'
import { PATHS } from './Routes/routes.js'

const login = document.getElementById('login')

login.addEventListener('submit', (e) => {
    e.preventDefault()

    const nickname = login['nickname']
    const email = login['email']
    const password = login['password']

    saveLogin(nickname.value, email.value, password.value)

    saveLogin.reset();

})

const signUp = document.getElementById('signUp')
signUp.addEventListener('click', (e) =>
    Router.load('signUp')
)

const continueWithGoogle = document.getElementById('continueWithGoogle')
continueWithGoogle.addEventListener('click', (e) =>
    Router.load('continueWithGoogle')
)

const signIn = document.getElementById('SignIn')
signIn.addEventListener('click', (e) =>
    Router.load('signIn')
)