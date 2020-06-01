const myQuestions = [
    {
        question: "Question 1 Sample",
        answers: ["f1","f2",'f3','f4'],
        correctAnswer: "f1"
    },
    {
        question: "Question 2 Sample",
        answers: ["A1","A2","A3","A4"],
        correctAnswer: "A2"
    }
]
let currentNumber  = 0;
let correctGuess = 0;
let myButtons = [document.getElementById("a1"), document.getElementById("a2"), document.getElementById("a3"), document.getElementById("a4")];
let myTitle = document.getElementById("question");
let answerGrid = document.getElementById("answer-grid");
let quizCont = document.getElementById("quiz-container");
function setUnanswered(curElement){
    curElement.classList.remove("wrong");
    curElement.classList.remove("correct");
    curElement.classList.add("unanswered");
}

function displayResults() {
    myTitle.innerText = "Results";
    answerGrid.parentNode.removeChild(answerGrid);
    let resultPanel = document.createElement("h2");
    resultPanel.innerText = "You got " + correctGuess + " out of " + myQuestions.length + " right";
    quizCont.appendChild(resultPanel);
}
function nextQuestion(whichButton) {
    for (let i = 0; i < 4; i++){
        myButtons[i].classList.remove("unanswered");
        if (myQuestions[currentNumber].answers[i] === myQuestions[currentNumber].correctAnswer){
            myButtons[i].classList.add("correct");
            if (whichButton === myButtons[i]){
                correctGuess++;
            }
        }
        else{
            myButtons[i].classList.add("wrong");
        }
    }
    currentNumber++;

    setTimeout(() => {
        if (currentNumber === myQuestions.length){
            displayResults();
        }
        for (let i = 0; i < 4; i++) {
            setUnanswered(myButtons[i]);
        }
        myTitle.innerText = myQuestions[currentNumber].question;
        for (let i = 0; i < myButtons.length; i++){
            myButtons[i].innerText = myQuestions[currentNumber].answers[i];
        }
    }, 1000);

}

function setup(){
    myButtons.forEach(setUnanswered);
    for (let i = 0; i < 4; i++){
        myButtons[i].addEventListener("click", () => nextQuestion(myButtons[i]));
    }
    myTitle.innerText = myQuestions[currentNumber].question;
    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].innerText = myQuestions[currentNumber].answers[i];
    }
}
setup();