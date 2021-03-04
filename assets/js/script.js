// required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");



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
option.onclick = ()=> {
    if(numb < questions.length - 1) {
        numb++;
        showQuestions(numb);
    }else{
        console.log("Questions completed")
        showResultBox();
    }
}  

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
        option[i].setAttribute('onlick', 'optionSelected(this)');
    } 
}

function optionSelected(answer) {
    let userAns = options.textContent;
    console.log(userAns);
}

// if quitQuiz button clicked
restart_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

function showResultBox() {
    quiz_box.classList.remove("activeQuiz"); // hide quiz box
    result_box.classList.add("activeResult"); // show result box
    
    const score_text = document.querySelector(".score_text");
    let score_tag = 'Your score is' + counter;
    score_text.innerHTML = score_tag;
    
}
// timer 
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter)
            quiz_box.classList.remove("activeQuiz");
            result_box.classList.add("activeResult");
        }
    }
}

