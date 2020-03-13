const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
  isActive: false,
  intervalId: 0,
  startColorChange() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(e => {
      const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      this.body.style.backgroundColor = color;
    }, 1000);
  },
  stopColorChange() {
    clearInterval(refs.intervalId);
    this.isActive = false;
  }
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", refs.startColorChange.bind(refs));
refs.stopBtn.addEventListener("click", refs.stopColorChange.bind(refs));
