import { userSignUp, verifyEmail } from '../firebase/autenticacion.js';
// import { createUser } from '../firebase/data-base.js';

export const signUpUser = (e) => {
  e.preventDefault(); // cancela el evento de reinicio del formulario
  const name = document.querySelector('#nombres').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // yo
  const msgerr = document.querySelector('#error-message');

  userSignUp(email, password)
    .then(() => {
      if (name === '' || email === '' || password === '') {
        console.log('errorrr');
      } else {
        verifyEmail();
        msgerr.textContent = 'Por favor revise su bandeja de entrada para verificar su cuenta';
      }
    }).catch((error) => {
      msgerr.classList.add('error-message');
      msgerr.textContent = error.message;
    // ..
    });
};
