// required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");

// if start button clicked 
start_btn.onclick = ()=> {
    quiz_box.classList.add("activeQuiz"); // hide start button
    showQuestions(0);
}

let numb = 0;

const next_btn = quiz_box.querySelector(".next_btn");

// if next button is clicked 
next_btn.onclick = ()=> {
    numb++;
    showQuestions(numb);
}
// getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    options_list.innerHTML = option_tag;

}