var startQuizBtn=document.querySelector("#startbutton")
var timerEl = document.querySelector("#timer");
var firstPage=document.querySelector(".firstPage")
var secondPage=document.querySelector(".secondPage");




// step 2 - timer starts counting down from 75 seconds
function countdown() {
  var timeLeft = 75;

  //setInterval(function)
  var timeInterval = setInterval(function () {
    if (timeLeft === 0) {
      //timerEl.textContent = displayMessage();
      clearsetInterval(timeInterval);
    }

    timeLeft--;

    timerEl.textContent = "Time: " + timeLeft ;
  }, 75000);
}


startQuizBtn.addEventListener("click", function (event) {
// when button is clicked //firstPage.style.display="none"//
//then show secondPage
//how to connect the start quiz button to start the timer when clicked


//how to connect click of start quiz to the first question promp & answers

}
)

