const quizes = [
  {
    id: 1,
    question: "Câu 1: 1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "Câu 2: 2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "Câu 3: 3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.querySelector(".quiz-container");
  const btn = document.getElementById("btn");

  function renderQuizzes() {
    let htmlContent = "";
    quizes.forEach((quiz) => {
      let answersHtml = "";
      quiz.answers.forEach((answer, index) => {
        answersHtml += `
                  <div class="quiz-answer-item">
                      <input type="radio" id="answer${quiz.id}-${index}" name="${quiz.id}" />
                      <label for="answer${quiz.id}-${index}">${answer}</label>
                  </div>
              `;
      });

      htmlContent += `
              <div class="quiz-item">
                  <h3>${quiz.question}</h3>
                  <div class="quiz-answer">${answersHtml}</div>
              </div>
          `;
    });
    quizContainer.innerHTML = htmlContent;
  }

  function randomizeAnswers() {
    quizes.forEach((quiz) => {
      const randomAnswerIndex = Math.floor(Math.random() * quiz.answers.length);
      const radioButtons = document.querySelectorAll(
        `input[type=radio][name="${quiz.id}"]`
      );
      if (radioButtons[randomAnswerIndex]) {
        radioButtons[randomAnswerIndex].checked = true;
      }
    });
  }

  renderQuizzes();

  btn.addEventListener("click", randomizeAnswers);
});
