var container = document.querySelector(".container");
var timerEl = document.querySelector("#timer")

// step 2 - timer starts counting down from 75 seconds
function countdown() {
  var timeLeft = 75;

  //setInterval(function)

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      timerEl.textContent = displayMessage();
      clearsetInterval(timeInterval);
    }

    timeLeft--

    timerEl.textContent = "Time: " + timeLeft ;
  }, 75000);
}

