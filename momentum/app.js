const $title = document.querySelector('#test h1');
const $input = document.querySelector('#test input');
const $buttonBlue = document.querySelector('#test .blue');
const $buttonBlack = document.querySelector('#test .black');
$buttonBlue.style.color = 'blue';

// console.dir($title); // 태그에 쓰일수 있는 아밴트와 값 들을 확인 할 수 있다.

function onChangeTilteInput(e) {
  console.log('e.target.value:', e.target.value);
}

function handleButtonBlueClick(e) {
  console.log('Click!!', e.target.innerText);
  console.dir($title);
  $title.style.color = 'blue';
}

function handleButtonBlackClick() {
  $title.style.color = 'black';
}

function onMouseenter() {
  console.log('mouse is here!!');
  $title.innerText = 'Enter';
}

function onMouseleave() {
  console.log('mouse is out!!');
  $title.innerText = 'Leave';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('copier!!');
}

function handleWindowOffline() {
  alert('SOS No Wifi!!');
}

function handleWindowOnline() {
  alert('Success Connected Your Wifi!!');
}

$title.addEventListener('mouseleave', onMouseleave);
$title.addEventListener('mouseenter', onMouseenter);
$input.addEventListener('input', onChangeTilteInput);
$buttonBlue.addEventListener('click', handleButtonBlueClick);
$buttonBlack.addEventListener('click', handleButtonBlackClick);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
