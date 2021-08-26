import {
  signIn,
  signInWithGoogle,
  signInFb,
  resetPasword,
} from '../views-controllers/signin-control.js';

export default () => {
  const sectionSignIn = document.createElement('section');
  const template = `
  <section id="contenedorSignIn" class="contenedorSignIn">
  <section class="side">
    <p class="text-welcome">Bienvenidos</p>
    <img class="ibook-img" src="img/ibook-img.png" width="300px" alt="imagen relacionado a ibook"/>
    <p class="text-text">"Si quieres aventura, lanzate a la lectura"</p>
  </section>
    <!-- Seccion donde esta el formulario de SignIn -->
    <form class="data-container">
        <img class="logo-ibook" value="Correo Electronico" src="img/logo-ibook.png" width="200px" alt="logo de iBook"/>
          <section>
            <i class="fas fa-user"></i>
            <input type="email" class="registro" id="username" placeholder="E-mail" required>
          </section>
          <section class="i">
            <i class="fas fa-lock"></i>
            <input type="password" class="registro" id="password" placeholder="Password" required>
          </section>
          <input type="button" class="registro-signin" href="#/home" id="sign-in" value="Sign-In">
          <p class="error-message" id="error-message"></p>
          <a href="#" class="btn-forget" id="btnForget">¿Olvidaste tu contraseña?</a>
          <p class="text-login">Ingresar por</p>
          <!-- Seccion donde estan los botones -->
          <section class="btn-fb-google">
            <button id="btn-fb" class="button"><img class="fb-logo" src="img/fb-logo.svg" width="55px"></button>
            <button id="btn-gg" class="button"><img class="fb-gg" src="img/gg-logo.png" width="40px"></button>
          </section>
          <label class="registrate">¿No tienes una cuenta?&nbsp;<a class="btn-register" href="#/signup" id="registrate">Regístrate.</a></label>
    </form>
  </section>

    `;

  sectionSignIn.innerHTML = template;
  sectionSignIn.setAttribute('class', 'contenedorSign-In');

  const btnSignIn = sectionSignIn.querySelector('#sign-in');
  const btnSignGog = sectionSignIn.querySelector('#btn-gg');
  const btnSignFb = sectionSignIn.querySelector('#btn-fb');
  const btnForget = sectionSignIn.querySelector('#btnForget');

  btnSignIn.addEventListener('click', signIn);
  btnSignGog.addEventListener('click', signInWithGoogle);
  btnSignFb.addEventListener('click', signInFb);
  btnForget.addEventListener('click', resetPasword);

  return sectionSignIn;
};
