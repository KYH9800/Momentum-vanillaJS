// querySelector
const $loginForm = document.querySelector('#login-form');
const $loginInput = document.querySelector('.userNameInput');

const $helloUser = document.querySelector('#login-form span');
const $userName = document.querySelector('#userName');
const $todoInput = document.querySelector('.todoInput');
$todoInput.classList.add('listItem');

const $todoInputForm = document.querySelector('.todo-input');
$todoInputForm.style.display = 'none';
const $todoList = document.querySelector('.todo-list');

// localStorage
const storageUserName = localStorage.getItem('username');

if (storageUserName !== null) {
  $helloUser.textContent = 'Good afternoon, ';
  $userName.textContent = localStorage.getItem('username');
  $loginInput.style.display = 'none';
  $todoInputForm.style.display = 'block';
} else {
  $helloUser.textContent = `Hello, What's your name?`;
  $userName.textContent = '';
  $loginInput.style.display = 'block';
  $todoInputForm.style.display = 'none';
}

// listener
function onLoginSubmit(e) {
  e.preventDefault();
  let userName = $loginInput.value;
  if (userName === '') {
    alert('Please write your name.');
  } else if (userName.length >= 10) {
    alert('your name is too long');
  } else {
    localStorage.setItem('username', userName);
    $helloUser.textContent = 'Good afternoon, ';
    $userName.textContent = localStorage.getItem('username');
    $loginInput.value = '';
    $loginInput.style.display = 'none';
    $todoInputForm.style.display = 'block';
  }
}

function onUpdateClick(e) {
  const span = document.createElement('span');
  const newValue = '';
  console.dir('ㄴㅇㄹㄴㅇㄹㄴ', e);
  console.dir('line 50', e.target.parentElement.childNodes);
  span.textContent = 'test';
}

function updateTodo(e) {
  const prevValue = e.target.parentElement.childNodes[0].innerText; // 전 입력 값
  // 태그와 class 생성
  const input = document.createElement('input');
  input.classList.add('updateInput');
  const add = document.createElement('button');
  add.classList.add('updateBtn');
  add.type = 'button';
  add.textContent = '업로드';
  e.target.parentElement.childNodes[0].remove(); // 태그 삭제
  console.dir(e.target.parentElement.childNodes); // 자식 노드 리스트
  e.target.parentElement.appendChild(add); // button 추가
  e.target.parentElement.prepend(input); // input 노드 리스트 앞에 추가
  input.placeholder = prevValue; // placeholder는 과거 입력 값

  // 업록드 클릭 리스너
  add.addEventListener('click', onUpdateClick);
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  // const updateBtn = document.createElement('button');

  $todoList.appendChild(li); // console.log(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  // li.appendChild(updateBtn);

  deleteBtn.textContent = '완료';
  deleteBtn.type = 'button';
  // updateBtn.textContent = '수정';
  // updateBtn.type = 'button';

  span.innerText = newTodo;

  // updateBtn.addEventListener('click', updateTodo);
  deleteBtn.addEventListener('click', deleteTodo);
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
$userName.addEventListener('click', () => {
  if (confirm('Do you want logout?')) {
    localStorage.removeItem('username');
    history.go();
  }
});
