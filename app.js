const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'A', 'A', 'A'];
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const usersAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check Answers
  usersAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //Show Result
  scrollTo(0, 0);
  result.classList.remove('d-none');

  //Animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
