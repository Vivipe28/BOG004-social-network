// eslint-disable-next-line import/no-cycle
import { SignUpUser } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';

export default () => {
  const viewSignUp = ` <form class="signUpForm" id="signUpForm">
  
    <figure>
      <img class='Icono' src='images/iPhone 13/Logo.png' alt='Icono'><br>
    </figure>
    <h1>SIGN UP</h1>
    <input type="text" class="nickname" id="nickname" placeholder="nickname" autocomplete = 'off'><br>
    <input type="email" class="email" id="email" placeholder="email" required minlength="8"> <br>
    <input type="password" class="password" id="password" placeholder="password"><br>
    <span id="verificationError"></span>
    <h6>  By clicking Agree & Join, you agree to the  User Agreement, <br>
          Privacy Policy, and Cookie Policy. 
    </h6>
    <input type="submit" class="submitSignUp" value="Sign Up">

    </form>`;

  const signUpContainer = document.createElement('div');
  signUpContainer.innerHTML = viewSignUp;

  const formSignUp = signUpContainer.querySelector('#signUpForm');
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const verificationError = document.getElementById('verificationError');
    const regexDominio = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (regexDominio.test(email)) {
      SignUpUser(email, password)
        .then(() => { changeView('#/post'); })
        .catch((error) => {
        // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          if (errorCode) {
            verificationError.innerHTML = 'Usuario ya está registrado';
          }
        });
    } else {
      verificationError.innerHTML = 'Correo inválido';
    }
  });
  return signUpContainer;
};
