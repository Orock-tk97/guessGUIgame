
let targetNumber;
let remainingTrials = 10;

function generateRandomNumber() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Secret number:", targetNumber);
}

function makeGuess() {
  const guessInput = document.getElementById("guess");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  if (guess === targetNumber) {
    displayResult(true);
  } else {
    remainingTrials--;
    if (remainingTrials > 0) {
      displayResult(false, guess);
      guessInput.value = "";
    } else {
      displayResult(false, guess, true);
    }
  }
}

function displayResult(isCorrect, guess, outOfTrials = false) {
  const resultDiv = document.getElementById("result");
  if (isCorrect) {
    resultDiv.textContent = `Congratulations! You guessed it right with ${11 - remainingTrials} attempts.`;
  } else {
    if (outOfTrials) {
      resultDiv.textContent = `Out of trials. The correct number was ${targetNumber}.`;
    } else {
      resultDiv.textContent = guess < targetNumber ? guess+" is too low guess a higher number": guess+" is too high guess a lower number";
    }
  }
}

generateRandomNumber();