// elements
const $date = document.querySelector('#date');
const $clock = document.querySelector('#clock');

// listener
function Timer() {
  let today = new Date(); // 전체 날짜
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 일
  let dayNum = today.getDay(); // 요일
  let day = '';
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초

  if (dayNum === 0) {
    day = '일';
  } else if (dayNum === 1) {
    day = '월';
  } else if (dayNum === 2) {
    day = '화';
  } else if (dayNum === 3) {
    day = '수';
  } else if (dayNum === 4) {
    day = '목';
  } else if (dayNum === 5) {
    day = '금';
  } else if (dayNum === 6) {
    day = '토';
  }
  $date.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
  $clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
  // console.log(today);
}

setInterval(Timer, 1000);
clearInterval(Timer, 1000);
