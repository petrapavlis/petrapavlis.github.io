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

const formSNS = document.getElementById("formSNS");
formSNS.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const formFields = e.target.elements;
  let questionValues = [];
  for (let i = 1; i <= 5; i += 1) {
    const question = "sns-quest" + i;
    questionValues.push(Number(formFields[question].value));
  }
  // console.log(questionValues)

  let snsResult = (6 * questionValues[0]) + (9 * questionValues[1]) - (5 * questionValues[2]) - (11 * questionValues[3]) - (13 * questionValues[4]) + 20;
  // console.log(snsResult)
  const snsScore = document.getElementById("sns-score");
  snsScore.textContent = snsResult;
})

