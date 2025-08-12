var questions = [
    {
        question:"What is your name?",
        option:["Prasanna","Jeeva","Pooja","Hegde"],
        ans:"Prasanna"
    },
    {
        question:"What is your name?",
        option:["Prasanna","Jeeva","Pooja","Hegde"],
        ans:"Prasanna"
    },
    {
        question:"What is your name?",
        option:["Prasanna","Jeeva","Pooja","Hegde"],
        ans:"Prasanna"
    },
    {
        question:"What is your name?",
        option:["Prasanna","Jeeva","Pooja","Hegde"],
        ans:"Prasanna"
    }
];

var countdown = document.getElementById("count_down");
var time_left = 60;
function startCountdown(){
    var timer = setInterval(function(){
        if(time_left <=0) {
            clearInterval(timer);
        }else{
            countdown.innerText = "Time Left: "+time_left+" seconds";
            time_left--;
        }
    },1000)
}

let currentQuestionIndex = 0;
var score = 0;

//Display Questions:
function displayQuestion(){
    if(currentQuestionIndex<questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").innerText = currentQuestion.question;
        document.getElementById("question_count").innerText = "Question "+(currentQuestionIndex+1)+" of "+questions.length;

        for(let i=0;i<currentQuestion.option.length;i++){
            let button = document.getElementById("btn"+(i+1));
            button.innerText = currentQuestion.option[i];
            button.onclick = function() {
                checkAnswer(currentQuestion.option[i]);
            }

            console.log(currentQuestion)
        }
    } else {
        showScores();
    }
}

function showScores() {
  document.getElementById("quiz").innerHTML = `
    <div class="text-center bg-green-200 p-6 rounded-lg shadow-md w-[80%]">
      <h2 class="text-3xl font-bold text-purple-700 mb-4">🎉 Quiz Completed!</h2>
      <p class="text-xl text-gray-800 mb-6">Your score: <span class="font-semibold text-blue-600">${score}</span></p>
      <a href="index.html" class="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
        🔁 Take Quiz Again
      </a>
    </div>
  `;
}

//function for checking the correct answer
function checkAnswer(answer) {
    var correctAnswer = questions[currentQuestionIndex].ans;
    if (answer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

//function calling:
 startCountdown(); 
displayQuestion();