const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
const regexPattern = /^1?\s*(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const verifyInput = () => {
  resultDiv.innerHTML = "";
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (regexPattern.test(userInput.value)) {
    const newElement = document.createElement("p");
    newElement.textContent = `Valid US Number: ${userInput.value}`;
    resultDiv.appendChild(newElement);
  } else {
    const newElement = document.createElement("p");
    newElement.textContent = `Invalid US Number: ${userInput.value}`;
    resultDiv.appendChild(newElement);
  }
};

const clearResult = () => {
  userInput.value = "";
  resultDiv.innerHTML = "";
};

checkButton.addEventListener("click", verifyInput);
clearButton.addEventListener("click", clearResult);
