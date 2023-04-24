var timerEl = document.querySelector("#timer");
var timeLeft= 0;
timerEl.textContent = "Time: " + timeLeft ;

var startQuizBtn=document.querySelector("#startbutton");
var firstPageEl=document.querySelector(".firstPage");
var secondPageEl=document.querySelector(".secondPage");

var wrong=document.querySelector(".wrong")
var correct=document.querySelector(".correct")

var wrongAnswer1 = document.querySelector(".wrongAnswer1")
var correctAnswer = document.getElementById("correctAnswer")
// step 2 - timer starts counting down from 75 seconds
function countdown() {
  var timeLeft = 75;
  //setInterval(function)
  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft ;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearsetInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayWrong () {
  wrong.classList.remove('hide');
}
function displayCorrect () {
  correct.classList.remove('hide');
}

function showQuestion1(){
  firstPageEl.classList.add('hide');
  secondPageEl.classList.remove('hide')
}

function startQuiz () {
  countdown();
  showQuestion1();
}

startQuizBtn.addEventListener("click", startQuiz)

