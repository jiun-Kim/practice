// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const header = document.querySelector("header");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");

function paintValueNumber(n) {
  const yourNumber = document.querySelector(".yourNumber");

  div1.appendChild(yourNumber);

  yourNumber.innerText = `Your Number is ${n}`;
  setInterval(timer, 1000);
}

function timer() {
  const placeBet = document.querySelector(".placeBet");
  header.appendChild(placeBet);
  const date = new Date();
  const seconds = date.getSeconds();
  const maxSeconds = 30;
  const setTimer = maxSeconds - seconds;
  if (setTimer < 0) {
    placeBet.innerText = "No more bet";
  } else {
    placeBet.innerText = `Place your bet ${setTimer}s`;
  }
}

function winningNumbers() {
  const winningNumber = document.querySelector(".winningNumber");
  header.appendChild(winningNumber);
  const winNumber = Math.floor(Math.random() * 37);
  winningNumber.innerText = `The Winning Number is ${winNumber}`;
}

function handleValue(n) {
  paintValueNumber(n);
}
function init(n) {
  handleValue(n);
}
init("");
