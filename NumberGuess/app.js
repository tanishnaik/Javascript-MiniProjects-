let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let maxGuess = 10;
let button = document.getElementById("submit-btn");
let outputDiv = document.getElementById("output-container");
button.addEventListener("click", () => {
  let guess = document.getElementById("guess-field");
  let userGuess = parseFloat(guess.value);
  guess.value = ""; //To clear the input field
  console.log(userGuess);
  if (userGuess <= 0 || isNaN(userGuess)) {
    outputDiv.innerHTML = `<span>Guess is not valid</span>`;
  } else {
    if (userGuess === randomNumber) {
      outputDiv.innerHTML = `<span>Your guess is right</span>`;
    } else if (userGuess < randomNumber) {
      outputDiv.innerHTML = `<span>Your guess is less than the random number</span>
      <p>You have ${maxGuess} left</p>`;
    } else {
      outputDiv.innerHTML = `<span>Your guess is greater than the random number</span>
      <p>You have ${maxGuess} left</p>`;
    }
    maxGuess--;
    if(maxGuess===0){
        outputDiv.innerHTML=`<span>Sorry your guess are over</span>`
    }
    
  }
});
