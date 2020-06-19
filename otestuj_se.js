"use strict";

const formESS = document.getElementById("formESS");
formESS.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const formFields = e.target.elements;
  let essResult = 0;
  for (let i = 1; i <= 8; i += 1) {
    const question = "ess-quest" + i;
    essResult += Number(formFields[question].value);
  }
  const essScore = document.getElementById("ess-score");
  essScore.textContent = essResult
})

