"use strict";

let scoreCounter = 0;

function startQuiz() {
  scoreCounter = 0;
  let factsList = document.getElementById("facts-list");
  factsList.style.filter = "blur(6px)";

  let documentScore = document.getElementById("score-counter");

  //defer the prompt
  setTimeout(() => {
    let q1Answered = false;
    while (!q1Answered) {
      let q1Answer = prompt("Am I 23 years old?", `Please type "yes" or "no"`);
      switch (q1Answer.toLowerCase()) {
        case "yes":
          q1Answered = true;
          scoreCounter++;
          break;
        case "no":
          q1Answered = true;
          break;
        default:
          alert("Please type yes or no");
      }
    }

    let q2Answered = false;
    while (!q2Answered) {
      let q2Answer = prompt(
        "Did I go to Nottingham University?",
        `Please type "yes" or "no"`
      );
      switch (q2Answer.toLowerCase()) {
        case "yes":
          q2Answered = true;
          break;
        case "no":
          q2Answered = true;
          scoreCounter++;
          break;
        default:
          alert("Please type yes or no");
      }
    }

    let q3Answered = false;
    while (!q3Answered) {
      let q3Answer = prompt("Was I previously a paramedic?");
      switch (q3Answer.toLowerCase()) {
        case "yes":
          q3Answered = true;
          break;
        case "no":
          q3Answered = true;
          scoreCounter++;
          break;
        default:
          alert("Please type yes or no");
      }
    }

    let q4Answered = false;
    while (!q4Answered) {
      let q4Answer = prompt("Is comedy my favourite genre of film?");
      switch (q4Answer.toLowerCase()) {
        case "yes":
          q4Answered = true;
          break;
        case "no":
          q4Answered = true;
          scoreCounter++;
          break;
        default:
          alert("Please type yes or no");
      }
    }

    let q5Answered = false;
    while (!q5Answered) {
      let q5Answer = prompt("Am I a fan of Two Door Cinema Club?");
      switch (q5Answer.toLowerCase()) {
        case "yes":
          q5Answered = true;
          scoreCounter++;
          break;
        case "no":
          q5Answered = true;
          break;
        default:
          alert("Please type yes or no");
      }
    }

    // console.log(`Your score is: ${scoreCounter}/5`);
    alert(`Your total score is ${scoreCounter}/5`);

    documentScore.innerText = `You scored ${scoreCounter}/5! ${
      scoreCounter <= 2 ? "You dont know me at all!" : "You know me so well!"
    }`;

    factsList.style.filter = "";
  }, 0);
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
