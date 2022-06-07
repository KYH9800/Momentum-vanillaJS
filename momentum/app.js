// querySelector
const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('#login-form input');
const $loginButton = document.querySelector('#login-form button');
const $helloUser = document.querySelector('#hello-user h2');
const $logoutBtn = document.querySelector('#hello-user button');

function handleLoginBtnClick() {
  let userName = $loginInput.value;
  if (userName === '') {
    alert('Please write your name.');
  } else if (userName.length >= 10) {
    alert('your name is too long');
  } else {
    $loginForm.classList.add('nonDisplay'); // CSS Class 추가(기존 CSS 유지)
    $logoutBtn.classList.add('logoutBtnBlock');
    $helloUser.textContent = 'Hello, ' + userName;
  }
}

function handleClickLogout() {
  $loginForm.classList.remove('nonDisplay');
  $logoutBtn.classList.remove('logoutBtnBlock');
  $helloUser.textContent = '';
}

// addEventListener
$loginButton.addEventListener('click', handleLoginBtnClick);
$logoutBtn.addEventListener('click', handleClickLogout);
