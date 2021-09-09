const quizForm = document.querySelector(".form-quiz");
const submitButton = document.querySelector("#triangle-quiz-btn");
const output = document.querySelector("#output");

correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Your score is ${score}`;
}

submitButton.addEventListener("click", calculateScore);
