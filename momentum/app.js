// querySelector
const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('.userNameInput');

const $helloUser = document.querySelector('#login-form span');
const $userName = document.querySelector('#userName');

const $todoInputForm = document.querySelector('.todo-input');
$todoInputForm.style.display = 'none';
const $todoInput = document.querySelector('.todoInput');

const $todoList = document.querySelector('.todo-list');
$todoList.style.display = 'none';

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
    $todoInputForm.style.display = 'block';
    $todoList.style.display = 'block';
  }
}

let todoArr = [];
function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const updateBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  $todoList.appendChild(li); // console.log(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);

  deleteBtn.textContent = '삭제';
  updateBtn.textContent = '수정';

  todoArr.push(newTodo);
  todoArr.map((v, i) => {
    span.innerText = `${i + 1}. ${v} `;
  });
  console.log(todoArr);
}

function onTodoSubmit(e) {
  e.preventDefault();
  let newTodo = $todoInput.value; // 작성한 할 일 목록
  $todoInput.value = '';
  if (newTodo === '') {
    alert('please write your todos');
  } else {
    paintToDo(newTodo);
  }
}

// addEventListener
$loginForm.addEventListener('submit', onLoginSubmit);
$todoInputForm.addEventListener('submit', onTodoSubmit);
