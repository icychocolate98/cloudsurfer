/**
 * Variables
 */
const signupButton = document.getElementById('boton_registro'),
    loginButton = document.getElementById('boton_login'),
    userForms = document.getElementById('user_options-forms')
/**
* Efectos de rebote
*/
signupButton.addEventListener('click', () => {
  userForms.classList.remove('reboteDerecha')
  userForms.classList.add('reboteIzquierda')
}, false)

loginButton.addEventListener('click', () => {
  userForms.classList.remove('reboteIzquierda')
  userForms.classList.add('reboteDerecha')
}, false)