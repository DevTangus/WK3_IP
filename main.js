function checkYourscore() {
  console.log();
}

var quiz1 = document.forms.Q1.value;
var quiz2 = document.forms.Q2.value;
var quiz3 = document.forms.Q3.value;
var quiz4 = document.forms.Q4.value;
var quiz5 = document.forms.Q5.value;

var score = 0;
var myScore = document.getElementById("myScore");
var feedback = document.getElementById("feedback");

if (quiz1 == "2") {
  myScore++;
}
if (quiz2 == "1") {
  myScore++;
}
if (quiz3 == "3") {
  myScore++;
}
if (quiz4 == "1") {
  myScore++;
}
if (quiz5 == "3") {
  myScore++;
}

if (quiz1 == "" || quiz2 == "" || quiz3 == "" || quiz4 == "" || quiz5 == "") {
  alert("Please Answer ALL Questions!");
}

var totalScore = myScore * 20;
if (myScore >= 80) {
  myScore.innerHTML = "Your Score is" + totalScore + " " + "Splendid Work!";
} else if (totalScore >= 50 && totalScore < 70) {
  myScore.innerHTML = "Your Score" + totalScore + " " + "Fair Try!";
} else if (myScore >= 0 && totalScore < 50) {
  myScore.innerHTML = "our Score" + totalScore + " " + "Give it Another Shot!";
}

function feedback() {
  feedback = totalScore;
}

var feedback = document.getElementById("feedback");

if (feedback >= 80) {
  myScore.innerHTML = "Excellent!";
} else if (feedback >= 50 && feedback < 80) {
  myScore.innerHTML = "Fair Try!";
} else if (feedback >= 0 && feedback < 50) {
  myScore.innerHTML = " Try Again!";
}
