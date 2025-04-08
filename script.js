const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = 0;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const generateQuestion =() => {
    const randomNumber1 = randomNumber(1,10);
    const randomNumber2 = randomNumber(1,10);
    const question = `Q. Sa është ${randomNumber1} shumëzuar me  ${randomNumber2}?`;
    const answer = randomNumber1 * randomNumber2;

    return {question, answer};
};
const showQuestion = () => {
   // const {question, answer} = generateQuestion();
   // questionEl.innerText = question;
    //storedAnswer = answer;
    const result = generateQuestion()
    questionEl.innerText = result.question;
    storedAnswer = result.answer;
};
showQuestion();
const checkAnswer = (event) => {
    event.preventDefault();

    const formData = new FormData(questionFormEl);
    const userAnswer = +formData.get("answer");

    if(userAnswer === storedAnswer){
        score += 1;
    }else{
        score -= 1;
    }
    scoreEl.innerText = score;
    event.target.reset();
    showQuestion();
}
