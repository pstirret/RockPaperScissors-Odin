console.log("Hello World!");

console.log(getComputerChoice());

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
   
}