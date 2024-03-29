var timerEl = document.getElementById("timer");
var timeLeft = 75;
timerEl.textContent = "Time: " + timeLeft;

var scoreContainerEl = document.querySelector(".score-container");
var firstPageEl = document.querySelector(".firstPage");
var questionsContainerEl = document.querySelector(".questions-container");
var questionTitle = document.querySelector(".question-title");
var answerChoice = document.querySelector(".answer-choices");
var correctUserChoice = document.querySelector(".correct");
var wrongUserChoice = document.querySelector(".wrong");

var allDoneContainerEl = document.querySelector(".all-done-container");
var finalScore = document.querySelector(".final-score");
var userNameInput = document.querySelector(".name-input");
var submitBtn = document.querySelector(".submit-button");

var userHighScoresEl = document.querySelector(".view-highscore-container");
var userInitialsInput = document.querySelector("h5");
var goBackBtn = document.querySelector(".goback-button");
var clearHighScoreBtn = document.querySelector(".clearhighscore-button");

var highScoresH2 = document.querySelector("#highScores")


var startQuizBtn = document = document.getElementById("startbtn");


var questions = [
  {
    title: ("Commonly used data types DO Not include: "),
    choices: [
      { answer: "1. Strings", correct: false },

      { answer: "2. Booleans", correct: false },

      { answer: "3.Alerts", correct: true },

      { answer: "4.Numbers", correct: false },

    ]

  },

  {
    title: ("The condition in an if / else statementis enclosed within ____: "),
    choices: [
      { answer: "1.Quotes", correct: false },

      { answer: "2.Curly Brackets", correct: false },

      { answer: "3.Parentheses", correct: true },

      { answer: "4.Square Brackets", correct: false },
    ]
  },

  {
    title: ("Arrays in JavaScript can be used to store: "),
    choices: [
      { answer: "1.Numbers and Strings", correct: false },

      { answer: "2.Other arrays", correct: false },

      { answer: "3.Booleans", correct: false },

      { answer: "All of the above", correct: true },
    ]
  },
  {
    title: ("String values must be enclosed within ____ when being assigned to variable: "),
    choices: [
      { answer: "1.Commas", correct: false },

      { answer: "2.Curly Brackets", correct: false },

      { answer: "3.Parentheses", correct: false },

      { answer: "4.Quotes", correct: true },
    ]
  },
]

// timer starts counting down from 75 seconds
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0 || questionIndex === 4) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      allDoneContainerEl.removeAttribute("class", "hide"); //timer hits 0 remove hide from alldone container
      questionsContainerEl.setAttribute("class", "hide")
    }
  }, 1000);
}

var questionIndex = 0;

function questionsDisplayed() {
  if (questionIndex <= 3) {
  displayCurrentQuestion = questions[questionIndex];
  questionTitle.textContent = displayCurrentQuestion.title;


  displayCurrentQuestion.choices.forEach(userChoice => {
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = userChoice.answer
    choiceBtn.setAttribute("value", userChoice.correct)
    choiceBtn.onclick = checkAnswer
    answerChoice.append(choiceBtn)
  });
}
}

function checkAnswer() {
  if (this.value === "true") {
    correctUserChoice.removeAttribute("class", "hide")
    setTimeout(function () {
      correctUserChoice.setAttribute("class", "hide")
    }, 1000)
  }
  else {
    //subtract 10 seconds from timer
    timeLeft -= 10;
    wrongUserChoice.removeAttribute("class", "hide")
    setTimeout(function () {
      wrongUserChoice.setAttribute("class", "hide")
    }, 1000)
  }
  answerChoice.innerHTML = ""
  questionIndex++
  allDoneDisplayed()
  questionsDisplayed()
}

//remove hide from alldone container when user answers final question 
function allDoneDisplayed() {
  if (questionIndex === 4) {
    allDoneContainerEl.removeAttribute("class", "hide")
    questionsContainerEl.setAttribute("class", "hide")
    // grab timeleft and add that number to final score
    finalScore.textContent= timeLeft; 
  }
}

function highScoreDisplayed(){
  allDoneContainerEl.setAttribute("class", "hide");
  userHighScoresEl.removeAttribute("class", "hide");
  userInitialsInput.innerHTML = localStorage.getItem('value') + " - " + finalScore.textContent;
}

function userInitials () {
  localStorage.setItem('value', userNameInput.value);
}

function userScore (){
  localStorage.setItem("score", finalScore.textContent)
}

function clearUserInput (){
  localStorage.clear('value');
  localStorage.clear('score');
  userInitialsInput.innerHTML = "";
}


function startQuiz() {
  firstPageEl.setAttribute("class", "hide")
  questionsContainerEl.removeAttribute("class", "hide")
  countdown();
  questionsDisplayed();
}

function restartQuiz () {
  location.reload();
}

startQuizBtn.addEventListener("click", startQuiz);

userNameInput.addEventListener("keyup",function(){
  userInitials ()
  userScore ()
});

submitBtn.addEventListener("click",highScoreDisplayed);

goBackBtn.addEventListener("click", restartQuiz);

clearHighScoreBtn.addEventListener("click", clearUserInput)

highScoresH2.addEventListener('click', function (){
  userHighScoresEl.removeAttribute("class", "hide");
  document.querySelector('#whole-thing').classList.add('hide');
  userInitialsInput.innerHTML = localStorage.getItem('value') + " - " + localStorage.getItem("score");
})




