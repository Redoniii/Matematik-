const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
const messageContainer = document.getElementById("messageContainer");

let storedAnswer;
let score = 0;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 10);
    const randomNumber2 = randomNumber(1, 10);
    const question = `Q. Sa është ${randomNumber1} shumëzuar me ${randomNumber2}?`;
    const answer = randomNumber1 * randomNumber2;

    return { question, answer };
};

const showQuestion = () => {
    const result = generateQuestion();
    questionEl.innerText = result.question;
    storedAnswer = result.answer;
};

showQuestion();

const checkAnswer = (event) => {
    event.preventDefault();

    const formData = new FormData(questionFormEl);
    const userAnswer = +formData.get("answer");

    // Clear previous message
    messageContainer.innerHTML = "";

    // Create a message element
    const messageEl = document.createElement("div");
    messageEl.style.textAlign = "center";
    messageEl.style.marginTop = "10px";

    if (userAnswer === storedAnswer) {
        score += 1;
        messageEl.innerText = `Përgjigja është e saktë! +1 pikë, ti ke (${score}) pikë`;
        messageEl.className = "correct";
    } else {
        score -= 1;
        messageEl.innerText = `Përgjigja është e gabuar! -1 pikë ti ke (${score}) pikë`;
        messageEl.className = "incorrect";
    }

    // Update the score
    scoreEl.innerText = score;

    // Append the message to the message container
    messageContainer.appendChild(messageEl);

    // Wait 2 seconds, then remove the message and show the next question
    setTimeout(() => {
        messageEl.remove();
        event.target.reset();
        showQuestion();
    }, 2000);
};
