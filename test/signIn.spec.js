// importamos la funcion que vamos a testear
import signIn from '../src/lib/signIn.js';
import signUp from '../src/lib/signUp.js';
import { SignUpUser } from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase-imports.js');
// Función signIn
describe('Sign In Function', () => {
  it('Debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('Deberia ejecutar el error', () => {
    const result = signIn();
    const email = result.querySelector('#email');
    email.value = 'viviana.perez28@gmail';

    const btn = result.querySelector('#signInForm');
    btn.dispatchEvent(new Event('submit'));

    const errorMessage = result.querySelector('.errorM');

    expect(errorMessage.textContent).toBe('Correo inválido');
  });
  it('Deberia ejecutar firebase', () => {
    const result = signIn();
    const email = result.querySelector('#email');
    email.value = 'viviana.perez28@gmail.com';
    window.alert = jest.fn();

    const btn = result.querySelector('#signInForm');
    btn.dispatchEvent(new Event('submit'));
  });
});

describe('Sign Up Function', () => {
  it('Debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('Deberia ejecutar el error', () => {
    const result2 = signUp();
    const email2 = result2.querySelector('#emailSignUp');
    email2.value = 'lolita.gmail.com';

    const btn = result2.querySelector('#signUpForm');
    btn.dispatchEvent(new Event('submit'));

    const errorMessage2 = result2.querySelector('.errorZ');

    expect(errorMessage2.textContent).toBe('Correo inválido');
  });
  it('Deberia ejecutar firebase', () => {
    const result2 = signUp();
    const email = result2.querySelector('#emailSignUp');
    email.value = 'viviana.perez28@gmail.com';

    const btn = result2.querySelector('#signUpForm');
    btn.dispatchEvent(new Event('submit'));

    const errorMessage = result2.querySelector('.errorZ');

    expect(errorMessage.textContent).toBe('');
  });
});

// User
describe('SignUpUser Function', () => {
  it('Debería ser una función', () => {
    expect(typeof SignUpUser).toBe('function');
  });
  it('Deberia ejecutar el alert', () => {
    const email = 'accs09@gmail.com';
    const password = '1234567';
    window.alert = jest.fn();

    return SignUpUser(email, password)
      .then(() => {
        expect(window.alert).toHaveBeenCalledWith(`Se ha enviado un correo de verificación a${email}`);
      });
  });
});
