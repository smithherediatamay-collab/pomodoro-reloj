let timer;
let remainingTime = 2700; // 45 min en segundos
let isPaused = false;

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

function startPomodoro() {
  resetTimer();
  remainingTime = 2700;
  startTimer();
}

function startCustom() {
  resetTimer();
  let minutes = document.getElementById("customMinutes").value;
  if (minutes > 0) {
    remainingTime = minutes * 60;
    document.getElementById("progressBar").max = remainingTime;
    startTimer();
  }
}

function startTimer() {
  isPaused = false;
  timer = setInterval(() => {
    if (!isPaused) {
      remainingTime--;
      updateDisplay();
      if (remainingTime <= 0) {
        clearInterval(timer);
        document.getElementById("alarmSound").play();
        alert("⏰ ¡Tiempo terminado!");
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timer").textContent = "45:00";
  document.getElementById("progressBar").value = 0;
  remainingTime = 2700;
}

function updateDisplay() {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  document.getElementById("progressBar").value =
    document.getElementById("progressBar").max - remainingTime;
}
