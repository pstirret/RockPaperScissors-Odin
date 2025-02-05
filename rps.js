
let humanScore = 0;
let computerScore = 0;
let isPrevGameFinished = false;
const hScore = document.querySelector(".hScoreValue");
const cScore = document.querySelector(".cScoreValue");

let btns = document.querySelector(".buttons");
btns.addEventListener('click', function(event) {
   
   let compChoice = getComputerChoice();

   let humanChoice = '';

      switch (event.target.className) {
         case 'btnRock':
            humanChoice = 'Rock';
            break;
         case 'btnPaper':
            humanChoice = 'Paper';
            break;
         case 'btnScissors':
            humanChoice = 'Scissors';
            break;
      }

      if(isPrevGameFinished) {
         let resultsDiv = document.querySelector("#results");
         while (resultsDiv.firstChild) {
            resultsDiv.removeChild(results.firstChild);
         }
         humanScore = 0;
         computerScore = 0;
         hScore.textContent = humanScore;
         cScore.textContent = computerScore;
         isPrevGameFinished = false;
      }

      playRound(humanChoice, compChoice);
});


function playRound (humanChoice, computerChoice) {
   let roundStr = `${humanChoice}-${computerChoice}`;
   let result = "";

   switch(roundStr) {
      case `Rock-Rock`:
         result = `tie`
         break;
      case `Rock-Paper`:
         result = `computer`
         break;
      case `Rock-Scissors`:
         result = `human`
         break;
      case `Paper-Rock`:
         result = `human`
         break;   
      case `Paper-Paper`:
         result = `tie`
         break;
      case `Paper-Scissors`:
         result = `computer`
         break;
      case `Scissors-Rock`:
         result = `computer`
         break;
      case `Scissors-Paper`:
         result = `human`
         break;
      case `Scissors-Scissors`:
         result = `tie`
         break;   
   }

   const results = document.querySelector("#results");
   const curResult = document.createElement("p");
   
   let picksStr = `You picked ${humanChoice} and the Computer picked ${computerChoice}`;

   if (result === `tie`){
      curResult.textContent = `It's a tie. ${picksStr}`;
   }
   else if(result === `human`) {
      curResult.textContent = `You won! ${picksStr}`;
      humanScore++;
   }
   else {
      curResult.textContent = `You lost. ${picksStr}`;
      computerScore++;
   }

   results.appendChild(curResult);
   hScore.textContent = humanScore;
   cScore.textContent = computerScore;

   if(humanScore == 5 || computerScore == 5) {
      const finalResult = document.createElement("p");
      if (humanScore == 5) {
         finalResult.textContent = `You won the game!`;
      }
      else {
         finalResult.textContent = `You lost the game...`;
      }
      results.appendChild(finalResult);
      isPrevGameFinished = true;
   }
}

function getComputerChoice() {
   /**
    * Get a random number
    * Take the floor of random number divided by (1/3)
    * IF the result equals 0 then Rock
    * ELSE IF result equal 1 then Paper
    * ELSE IF result equals 2 then Scissors
    * ELSE alert and error
    * RETURN result
    */

   let rNum = Math.floor(Math.random() * 3);
   if (rNum === 0) {
      return "Rock";
   }
   else if (rNum === 1) {
      return "Paper";
   }
   else {
      return "Scissors";
   }
}