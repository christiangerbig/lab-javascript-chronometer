const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesStr = minutes.toString();
  minutesStr = minutesStr.padStart(2,0,0);
  const minDec = document.getElementById('minDec');
  minDec.innerText = minutesStr[0]
  const minUni = document.getElementById('minUni');
  minUni.innerText = minutesStr[1]
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsStr = seconds.toString();
  secondsStr = secondsStr.padStart(2,0,0);
  const secDec = document.getElementById('secDec');
  secDec.innerText = secondsStr[0]
  const secUni = document.getElementById('secUni');
  secUni.innerText = secondsStr[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splits = document.getElementById('splits');
  splits.appendChild("li");
  const liTag = document.querySelector('li');
  liTag.innerText = chronometer.splitClick();
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener(
  "click", 
  () => {
    if (chronometer.currentTime === 0) {
      chronometer.startClick();
      btnLeft.classList.remove("stop");
      btnLeft.classList.adds("start");
      btnLeft.innerText = "STOP";

      btnRight.classList.remove("reset");
      btnRight.classList.add("split");
      btnRight.innerText = "SPLIT";
    }
    else {
      chronometer.stopClick();
      btnLeft.classList.remove("start");
      btnLeft.classList.add("stop");  
      btnLeft.innerText = "START";  

      btnRight.classList.remove("split");
      btnRight.classList.add("reset");  
      btnRight.innerText = "RESET";   
    }
  }
);

// Reset/Split Button
btnRight.addEventListener(
  "click", 
  () => {
    if (chronometer.currentTime === 0) {
      chronometer.resetClick()

    }
    else {
      chronometer.splitClick()

    }
    
  }
);
