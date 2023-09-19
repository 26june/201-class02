"use strict";

function startQuiz() {
  let factsList = document.getElementById("facts-list");
  factsList.style.filter = "blur(4px)";
  //defer the prompt
  setTimeout(() => {
    let q1Answer = prompt("Am I 23 years old?");
    let q2Answer = prompt("Did I go to Nottingham University?");
    let q3Answer = prompt("Was I previously a paramedic?");
    let q4Answer = prompt("Is comedy my favourite genre of film?");
    let q5Answer = prompt("Am I a fan of Two Door Cinema Club?");

    console.log(
      `q1: ${q1Answer}, q2: ${q2Answer}, q3: ${q3Answer}, q4: ${q4Answer}, q5: ${q5Answer}`
    );

    factsList.style.filter = "";
  }, 0);
}
