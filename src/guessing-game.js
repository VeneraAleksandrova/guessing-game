class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return (this.currentIndex = Math.ceil((this.min + this.max) / 2));
  }

  lower() {
    return (this.max = this.currentIndex);
  }

  greater() {
    return (this.min = this.currentIndex);
  }
}

module.exports = GuessingGame;
