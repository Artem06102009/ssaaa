document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  });

  let timerInterval;
  let timeLeft = 60;
  
  const timeDisplay = document.getElementById('time');
  const startButton = document.getElementById('startButton');
  
  function updateDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  
  function startTimer() {
      if (timerInterval) return;
      timeLeft = 60;
      updateDisplay();
      timerInterval = setInterval(() => {
          if (timeLeft > 0) {
              timeLeft--;
              updateDisplay();
          } else {
              clearInterval(timerInterval);
              timerInterval = null;
              alert("Время вышло!");
          }
      }, 1000);
  }
  

  startButton.addEventListener('click', startTimer);

  updateDisplay();

