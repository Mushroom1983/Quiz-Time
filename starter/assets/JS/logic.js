// import { questions } from "./questions.js";

const time = document.getElementById("time");

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("start");

const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");

const endScreen = document.getElementById("endScreen");
const finalScore = document.getElementById("finalScore");
const initials = document.getElementById("initials");
const submit = document.getElementById("submit");

const feedback = document.getElementById("feedback");

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

const getRandomQuestions = (length, questions) => {
    const shuffledQuestions = shuffle(questions);
    return shuffledQuestions.slice(0, length);
};

const randomQuestions = getRandomQuestions(10, questions);

// check to see if questions is an array
console.log(randomQuestions);

let timeLeft = 0;

let score = 0;
let currentQuestionIndex = 0;
let currentQuestion = {};
let questionNum = 0;
let correctAnswer = "";


function startQuiz() {

    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");
    
    timeLeft = 120;
    updateTimerDisplay();
    
    timerInterval = setInterval(function() {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            endQuiz();
            
         }
        

    }, 1000);

    loadQuestion();


}

function loadQuestion() {}

