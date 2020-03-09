/**
 * Variables
 */
const signupButton = document.getElementById('boton_registro');
const loginButton = document.getElementById('boton_login');
const userForms = document.getElementById('ambosFormularios');
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