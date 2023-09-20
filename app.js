"use strict";

let factsList;
let documentScore;
let documentButton;
let iterationCount = 0;
let scoreCounter = 0;
let q6Attempt = 4;
let q6Number = 6; // Correct number
let totalQuiz = 7;

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
        documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;
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

      documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;
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

      documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;
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

      documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;
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
      factsList.style.filter = "";
      documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;
      iterationCount++;
      break;

    case 5:
      let q6Answered = false;

      while (!q6Answered) {
        let q6Answer = Number(
          prompt(
            "I'm thinking of a number between 1-10. Can you guess what it is?"
          )
        );
        switch (true) {
          case q6Answer < 1 || q6Answer > 10:
            alert("Please enter a number between 1-10");
            break;
          case q6Answer === q6Number:
            q6Answered = true;
            scoreCounter++;
            iterationCount++;
            alert("Correct!");
            break;
          case q6Answer < q6Number:
            q6Answered = true;
            q6Attempt--;
            alert(
              `${
                q6Attempt === 0
                  ? "You should've gone higher!"
                  : `Go Higher! You have ${q6Attempt} more ${
                      q6Attempt < 2 ? "attempt" : "attempts"
                    }`
              }`
            );
            break;
          case q6Answer > q6Number:
            q6Answered = true;
            q6Attempt--;
            alert(
              `${
                q6Attempt === 0
                  ? "You should've gone lower!"
                  : `Go Lower! You have ${q6Attempt} more ${
                      q6Attempt < 2 ? "attempt" : "attempts"
                    }`
              }`
            );
            break;
          default:
            alert("Please enter a number between 1-10");
        }

        if (q6Attempt === 0) {
          alert(
            `You have no more attempts the correct answer was: ${q6Number}`
          );
          iterationCount++;
        }
      }

      documentScore.innerText = `Your current score is ${scoreCounter}/${totalQuiz}!`;

      break;

    case 6:
      let q7Answered = false;

      let q7Letters = ["g", "j"];

      while (!q7Answered) {
        let q7Answer = prompt("What letter is in my first name?").toLowerCase();

        if (q7Answer.length !== 1) {
          alert("I only need one letter");
        } else if (q7Letters.includes(q7Answer)) {
          alert("Correct");
          scoreCounter++;
          q7Answered = true;
        } else {
          alert("Thats incorrect!");
          q7Answered = true;
        }
      }

      documentScore.innerText = `You scored ${scoreCounter}/${totalQuiz}! ${
        scoreCounter <= 3 ? "You dont know me at all!" : "You know me so well!"
      }`;

      documentButton.innerText = "Take the quiz again";
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
