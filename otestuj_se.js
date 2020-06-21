"use strict";

const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const form = e.target
  form.classList.add("was-validated");
  const formFields = form.elements;
  if (!form.checkValidity()) {
    const invalidInputs = document.querySelectorAll("input[type=radio]:invalid");
    invalidInputs.forEach((input) => {
      input.parentElement.parentElement.parentElement.classList.add("is-invalid");
    });
    window.location.hash = "";
    window.location.hash = invalidInputs[0].name;
    return
  }
  let essResult = 0;
  for (let i = 1; i <= 8; i += 1) {
    const question = "quest" + i;
    essResult += Number(formFields[question].value);
  }
  let questionValues = [];
  for (let i = 9; i <= 13; i += 1) {
    const question = "quest" + i;
    questionValues.push(Number(formFields[question].value));
  }

  let snsResult = (6 * questionValues[0]) + (9 * questionValues[1]) - (5 * questionValues[2]) - (11 * questionValues[3]) - (13 * questionValues[4]) + 20;
  console.log(snsResult)

  const snsScore = document.getElementById("sns-score");
  snsScore.textContent = snsResult;
  const essScore = document.getElementById("ess-score");
  essScore.textContent = essResult

  if (form.checkValidity()) {
    window.location.hash = "";
    window.location.hash = "metody";
    return
  }
})

const radio = document.querySelectorAll("input[type=radio]");
radio.forEach((input) => {
  input.addEventListener('change', (e) => {
    if (e.target.checkValidity()) {
      e.target.parentElement.parentElement.parentElement.classList.remove("is-invalid");
    }
  }
  )
})

