let timer;

function startTimer() {
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  const timerEl = document.getElementById("timer");
  const progressBar = document.getElementById("progress-bar");

  if (minutes < 0 || seconds < 0 || seconds > 59) {
    alert("Invalid input. Please enter valid minutes and seconds.");
    return;
  }
  const totalSecondsAtStart = minutes * 60 + seconds;
  const barWidth = 280;
  let totalSeconds = minutes * 60 + seconds;

  clearInterval(timer);

  timer = setInterval(() => {
    const width = ((totalSeconds / totalSecondsAtStart) * barWidth).toFixed(0);
    progressBar.style.width = width + "px";
    if (totalSeconds <= 0) {
      clearInterval(timer);
      timerEl.innerText = "00:00";
    } else {
      const displayMinutes = Math.floor(totalSeconds / 60);
      const displaySeconds = totalSeconds % 60;

      const formattedMinutes =
        displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes;
      const formattedSeconds =
        displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds;

      timerEl.innerText = `${formattedMinutes}:${formattedSeconds}`;
      totalSeconds--;
    }
  }, 1000);
}
