function rollDiceAndDetermineWinner() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var diceImageFileName = `./images/dice${randomNumber1}.png`;
  var leftDiceImage = document.querySelector(".img1");
  leftDiceImage.setAttribute("src", diceImageFileName);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceImageFileName1 = `./images/dice${randomNumber2}.png`;
  var rightDiceImage = document.querySelector(".img2");
  rightDiceImage.setAttribute("src", diceImageFileName1);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 win !";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "🚩Player 2 win !";
  } else {
    document.querySelector("h1").textContent = "Draw !";
  }
}

var refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", rollDiceAndDetermineWinner);
