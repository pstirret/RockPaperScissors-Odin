
let humanScore = 0;
let computerScore = 0;

playGame();


function playGame (){
   /**
    * Initialize scores to 0
    * Loop 5 times
    *    get selections
    *    call playRound function
    * Determine the winner
    * Declare winner in output
    */
   for(let i=0; i<5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      playRound(humanSelection, computerSelection);

      console.log(`The score is: You - ${humanScore}, Computer - ${computerScore}`)
   }
   
   let scoreStr = `The final scores are: You - ${humanScore}, the Computer - ${computerScore}`;

   if (humanScore > computerScore) {
      console.log(`You are the winner! ${scoreStr}`);
   }
   else if (computerScore > humanScore)
      console.log(`You lose. ${scoreStr}`);
   else {
      console.log(`It's a tie! ${scoreStr}`);
   }
}


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

   let picksStr = `You picked ${humanChoice} and the Computer picked ${computerChoice}`;

   if (result === `tie`){
      console.log(`It's a tie. ${picksStr}`);
   }
   else if(result === `human`) {
      console.log(`You win! ${picksStr}`);
      humanScore++;
   }
   else {
      console.log(`You lose. ${picksStr}`);
      computerScore++;
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

function getHumanChoice() {
   /**
    * Create prompt messages
    * Set loop exit flag to false
    * WHILE not loop exit
    *    prompt user for input
    *    validate input
    *    IF input is valid
    *       set loop exit flag
    *    ELSE
    *       Display error message
    *    END
    * END-WHILE
    * 
    * RETURN user input
    */

   let promptString = 'Please enter your selection: Rock, Paper, Scissors';

   let errorString = 'Your entry must be either Rock, Paper, or Scissors'

   while(true) {
      let userInput = prompt(promptString, "");
      let tmpStr = userInput.toLowerCase();

      if (tmpStr !== "rock" && tmpStr !== "paper" && tmpStr !==         "scissors") {
         console.log("Incorrect entry. You must enter either \"Rock\", \"Paper\", or \"Scissors\"");
      }
      else {
         return tmpStr.charAt(0).toUpperCase() + tmpStr.slice(1);
      }  
   }

}