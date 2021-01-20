class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(
      () => {
        this.currentTime ++;
        //callback();
      },
      1000
    );
  }  
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes()*60);
  }
  twoDigitsNumber(number) {
    let numberStr = number.toString();
    return numberStr.padStart(2,0,0);
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.getMinutes();
    let minutesStr = minutes.toString();
    minutesStr = minutesStr.padStart(2,0,0); // convert string into two digits if digit 1-9
    let seconds = this.getSeconds();
    let secondsStr = seconds.toString();
    secondsStr = secondsStr.padStart(2,0,0);
    return `${minutesStr}:${secondsStr}`; // string format "MM:SS"
  }
}
