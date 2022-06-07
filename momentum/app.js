// querySelector
const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('.userNameInput');

const $helloUser = document.querySelector('#login-form span');
const $userName = document.querySelector('#userName');

const $todoInput = document.querySelector('.todo-input');
$todoInput.style.display = 'none';

// listener
function onLoginSubmit(e) {
  e.preventDefault();
  let userName = $loginInput.value;
  if (userName === '') {
    alert('Please write your name.');
  } else if (userName.length >= 10) {
    alert('your name is too long');
  } else {
    $helloUser.textContent = 'Good afternoon, ';
    $userName.textContent = userName;
    $loginInput.value = '';
    $loginInput.classList.add('loginInputNone');
    $todoInput.style.display = 'block';
    console.dir($loginInput);
  }
}

function onTodoSubmit(e) {
  e.preventDefault();
}

// addEventListener
$loginForm.addEventListener('submit', onLoginSubmit);
$todoInput.addEventListener('submit', onTodoSubmit);
