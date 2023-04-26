var timerEl = document.getElementById("timer");
var timeLeft= 75;
timerEl.textContent = "Time: " + timeLeft ;

var scoreContainerEl=document.querySelector(".score-container");
var firstPageEl=document.querySelector(".firstPage");
var questionsContainerEl=document.querySelector(".questions-container");
var questionTitle=document.querySelector(".question-title");
var answerChoice=document.querySelector(".answer-choices");
var correctUserChoice=document.querySelector(".correct");
var wrongUserChoice=document.querySelector(".wrong");
var allDoneContainerEl=document.querySelector(".all-done-container");
var finalScore=document.querySelector(".final-score");
var userNameInput=document.querySelector(".name-input");
var submitBtn=document.querySelector(".submit-button");

var startQuizBtn=document=document.getElementById("startbtn");


var questions= [
  {
      title:("Commonly used data types DO Not include: "),
      choices: [
        {answer:"1. Strings",correct:false},

        {answer:"2. Booleans",correct:false},

        {answer:"3.Alerts",correct:true},

        {answer:"4.Numbers",correct:false},
      
      ]

},

{ 
      title: ("The condition in an if / else statementis enclosed within ____: "),
      choices: [ 
          {answer:"1.Quotes", correct:false},

          {answer:"2.Curly Brackets",correct:false},

          {answer:"3.Parentheses", correct:true},

          {answer:"4.Square Brackets", correct:false},
      ]
},

{       
      title: ("Arrays in JavaScript can be used to store: "),
      choices: [ 
          {answer:"1.Numbers and Strings", correct:false},

          {answer:"2.Other arrays",correct:false},

          {answer:"3.Booleans", correct:false},

          {answer:"All of the above", correct:true},
        ]
},
{       
  title: ("String values must be enclosed within ____ when being assigned to variable: "),
  choices: [ 
      {answer:"1.Commas", correct:false},

      {answer:"2.Curly Brackets",correct:false},

      {answer:"3.Parentheses", correct:false},

      {answer:"4.Quotes", correct:true},
    ]
},
]

// timer starts counting down from 75 seconds
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft ;

    if (timeLeft <= 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      allDoneContainerEl.removeAttribute("class","hide"); //timer hits 0 remove hide from alldone container
      questionsContainerEl.setAttribute("class","hide")
    }
  }, 1000);
}

var questionIndex=0;
function questionsDisplayed () {
  displayCurrentQuestion=questions[questionIndex]
  questionTitle.textContent=displayCurrentQuestion.title


  displayCurrentQuestion.choices.forEach(userChoice => {
    var choiceBtn=document.createElement("button")
    choiceBtn.textContent=userChoice.answer
    choiceBtn.setAttribute("value",userChoice.correct)
    choiceBtn.onclick = checkAnswer
    answerChoice.append(choiceBtn)
  });
}

function checkAnswer(){
  if(this.value === "true"){
    console.log("correct")
    correctUserChoice.removeAttribute("class", "hide")
    setTimeout(function (){
      correctUserChoice.setAttribute("class","hide")
    }, 1000)
  }
  else{
    console.log("nope")
    wrongUserChoice.removeAttribute("class", "hide")
    subtract
    setTimeout(function (){
      wrongUserChoice.setAttribute("class","hide")
    }, 1000)
    //subtract 10 seconds from timer
    
  }
  answerChoice.innerHTML = ""
  questionIndex++
  questionsDisplayed()
}

    //remove hide from alldone container 
function gameOver() {
  if(timeLeft===75 || questionIndex.length===3) {
    allDoneContainerEl.removeAttribute("class","hide")
  }
}

function startQuiz () {
  firstPageEl.setAttribute("class","hide")
  questionsContainerEl.removeAttribute("class","hide")
  countdown();
  questionsDisplayed();
}

startQuizBtn.addEventListener("click", startQuiz);





