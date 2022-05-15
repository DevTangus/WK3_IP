function checkScore() {
  var quiz1 = document.form.Q1.value;
  var quiz2 = document.form.Q2.value;
  var quiz3 = document.form.Q3.value;
  var quiz4 = document.form.Q4.value;
  var quiz5 = document.form.Q5.value;

  var score = 0;
  var quizForm = document.getElementById("quizForm");
  var myScore = document.getElementById("myScore");
  if (quiz1 == "2") {
    score++;
  }
  if (quiz2 == "1") {
    score++;
  }
  if (quiz3 == "3") {
    score++;
  }
  if (quiz4 == "1") {
    score++;
  }
  if (quiz5 == "3") {
    score++;
  }

  if (quiz1 == "" || quiz2 == "" || quiz3 == "" || quiz4 == "" || quiz5 == "") {
    alert("Please Answer ALL Questions!");
  }

  quizForm.style.display = "none";

  var totalScore = score * 20;

  if (totalScore >= 80) {
    totalScore.textContent =
      "Your score is" + totalSscore + "%" + "Splendid Work!";
  }
  if (totalScore >= 60 && totalScore < 80) {
    totalScore.textContent = "Your score is" + totalSscore + "%" + "Good!";
  } else if (totalScore >= 0 && totalScore <= 60) {
    totalScore.textContent =
      "Your score is" + totalSscore + "%" + "Fair Trial!";
  }
}
