// required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = document.querySelector(".timer .timer_sec");



// if start button clicked 
start_btn.onclick = ()=> {
    quiz_box.classList.add("activeQuiz"); // hide start button
    showQuestions(0);
    startTimer(75);
}

let numb = 0;
let counter;


const option = quiz_box.querySelector(".option_list");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const clear_quiz = result_box.querySelector(".buttons .clear");

// if option is clicked 
option.onclick = () => {
    if(numb < questions.length - 1) {
        numb++;
        showQuestions(numb);
    }else{
        console.log("Questions completed")
        showResultBox();
    }
};

// getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb + '. ' + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll('.option');
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    } 
}

// answer selected 
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[numb].answer;
    if(userAns !== correctAns) {
        clearInterval(counter);
        timeCount.textContent -= 5;
        startTimer(timeCount.textContent);
    };
}

// if Quiz button clicked
restart_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

// result box
function showResultBox() {
    quiz_box.classList.remove("activeQuiz"); // hide quiz box
    result_box.classList.add("activeResult"); // show result box
    
    const score_text = document.querySelector(".score_text");
    let score_tag = 'Your score is: ' + timeCount.textContent;
    score_text.innerHTML = score_tag;   
}

// timer 
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            setInterval(counter); 
            quiz_box.classList.remove("activeQuiz");
            result_box.classList.add("activeResult");
        };
    };
}
var saveTasks = function() {
    localStorage.setItem('test');
}

/* saveScorebtn.onclick = ()=> {
  
    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem(timeCount.textContent);
    if (highScore === null) {
      highScore = 0;
    }
    // if player has higher score than the old high score, player has new high score
    if (timeCount.textContent > highScore) {
      localStorage.setItem("highscore", timeCount.textContent);
      localStorage.setItem("name", userName);
    } 
  }; */
  
/* const username = document.querySelector('#user_list');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');
const highScoresList = document.querySelector('#highScoresList');


const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort ((a,b) => {
        return b.score - a.score
    });

    highScores.splice(3);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

} */