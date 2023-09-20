"use strict";

let factsList;
let documentScore;
let documentButton;
let iterationCount = 0;
let scoreCounter = 0;

function startQuiz() {
  switch (iterationCount) {
    case 0:
      scoreCounter = 0;
      factsList = document.getElementById("facts-list");
      factsList.style.filter = "blur(6px)";
      documentScore = document.getElementById("score-counter");
      documentButton = document.getElementById("quiz-button");
      setTimeout(() => {
        let q1Answered = false;
        while (!q1Answered) {
          let q1Answer = prompt(
            "Am I 23 years old?",
            `Please type "yes" or "no"`
          );
          switch (q1Answer.toLowerCase()) {
            case "yes":
              q1Answered = true;
              scoreCounter++;
              alert("Correct!");
              break;
            case "no":
              q1Answered = true;
              alert("Wrong!");
              break;
            default:
              alert("Please type yes or no");
          }
        }

        documentButton.innerText = "Next Question";
        documentScore.innerText = `Your current score is ${scoreCounter}/5!`;
        iterationCount++;
      }, 0);
      break;

    case 1:
      let q2Answered = false;
      while (!q2Answered) {
        let q2Answer = prompt(
          "Did I go to Nottingham University?",
          `Please type "yes" or "no"`
        );
        switch (q2Answer.toLowerCase()) {
          case "yes":
            q2Answered = true;
            alert("Wrong!");
            break;
          case "no":
            q2Answered = true;
            scoreCounter++;
            alert("Correct!");
            break;
          default:
            alert("Please type yes or no");
        }
      }

      documentScore.innerText = `Your current score is ${scoreCounter}/5!`;
      iterationCount++;
      break;

    case 2:
      let q3Answered = false;
      while (!q3Answered) {
        let q3Answer = prompt("Was I previously a paramedic?");
        switch (q3Answer.toLowerCase()) {
          case "yes":
            q3Answered = true;
            alert("Wrong!");
            break;
          case "no":
            q3Answered = true;
            scoreCounter++;
            alert("Correct!");
            break;
          default:
            alert("Please type yes or no");
        }
      }

      documentScore.innerText = `Your current score is ${scoreCounter}/5!`;
      iterationCount++;
      break;

    case 3:
      let q4Answered = false;
      while (!q4Answered) {
        let q4Answer = prompt("Is comedy my favourite genre of film?");
        switch (q4Answer.toLowerCase()) {
          case "yes":
            q4Answered = true;
            alert("Wrong!");
            break;
          case "no":
            q4Answered = true;
            scoreCounter++;
            alert("Correct!");
            break;
          default:
            alert("Please type yes or no");
        }
      }

      documentScore.innerText = `Your current score is ${scoreCounter}/5!`;
      iterationCount++;
      break;

    case 4:
      let q5Answered = false;
      while (!q5Answered) {
        let q5Answer = prompt("Am I a fan of Two Door Cinema Club?");
        switch (q5Answer.toLowerCase()) {
          case "yes":
            q5Answered = true;
            scoreCounter++;
            alert("Correct!");
            break;
          case "no":
            q5Answered = true;
            alert("Wrong!");
            break;
          default:
            alert("Please type yes or no");
        }
      }

      documentScore.innerText = `You scored ${scoreCounter}/5! ${
        scoreCounter <= 2 ? "You dont know me at all!" : "You know me so well!"
      }`;

      documentButton.innerText = "Take the quiz again";
      factsList.style.filter = "";
      iterationCount = 0;
      break;

    default:
      break;
  }
}

//TODO add carousel

// fun fact
// hobbies
// Intersest
// achievements
// images
// fav jokes

//score next to button - done - need to figure out how to update after each prompt
//different ux - add a next button instead of subsequent prompts
