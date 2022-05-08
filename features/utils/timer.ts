export default class Timer {
  constructor(public seconds = 10, onDone: Function) {

    let intervalId = setInterval(() => {
      this.seconds = this.seconds - 1;
      console.log(this.seconds);
      if (this.seconds === 0) {
        clearInterval(intervalId);
        onDone("done");
      }
    }, 1000);
  }
}
