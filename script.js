const questions = [
    {
        question:"Capital city of Rwanda",
        answers:[
            {text: "Butare", correct:false},
            {text: "Kigali", correct:true},
            {text: "Nairobi", correct: false},
            {text: "Kampala", correct:false}
        ]
        
    },
    {
        question:"Districts of Rwanda are?",
        answers:[
            {text: "20", correct:false},
            {text: "32", correct:false},
            {text: "46", correct: false},
            {text: "none above", correct:true}
        ]
    },
    {
        question:"President of Rwanda",
        answers:[
            {text: "Paul Bima", correct:false},
            {text: "William Ruto", correct:false},
            {text: "Kagame Paul", correct: true},
            {text: "none above", correct:false}
        ]
    },
    {
        question:"Tallest mountain in Rwanda?",
        answers:[
            {text: "Kalisimbi", correct:true},
            {text: "Jali", correct:false},
            {text: "Rebero", correct: false},
            {text: "none above", correct:false}
        ]
    }
]

const quizQuestion = document.getElementById("quiz-question");
const answersButtons = document.getElementById("answers");
const nextButton = document.getElementById("btn-next");

let questionCurrentIndex = 0;
let score = 0;

function startQuiz(){
    questionCurrentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next",
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionCurrentIndex];
    let QuestionNo = questionCurrentIndex + 1;
    quizQuestion.innerHTML = QuestionNo +'. '+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>
        {
            let button = document.createElement("button")
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answersButtons.appendChild(button)
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer)
        
        })
}

function resetState(){
    nextButton.style.display = 'none'
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if(isCorrect){
    selectedBtn.classList.add("btn-true")
    score ++;
  }else{
    selectedBtn.classList.add("btn-false")
  }

  Array.from(answersButtons.children).forEach(button => {
    if(button.dataset.correct === 'true'){
        button.classList.add("btn-true")
    }
    button.disabled = 'true'
  });
  nextButton.style.display = 'block'
}

function showScore(){
    resetState();
    quizQuestion.innerHTML =`Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = 'block'
}
function hundleNextBtn(){
    questionCurrentIndex++;
    if(questionCurrentIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=> {
 if(questionCurrentIndex < questions.length){
    hundleNextBtn();
}else{
    startQuiz();
}
});
startQuiz();