'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const user1 = 'player1';
const user2 = 'player2';


function rockPaperScissors(hand1, hand2) {

  // Write code here


// 1. User1 input of rock, paper, or scissors.
 const choose = prompt("Do you choose rock, paper or scissors?");
if (! choose) {
    // User choice was undefined
    return ("<p>Player 1, type in a correct input (rock, paper, or scissors).</p>");
} else {
    // Display user choice
    return("<p>Player 1:" + " " + choose + "</p>");
}

// 2. User2 input of rock, paper, or scissors.
const choose = prompt("Do you choose rock, paper or scissors?");
if (! choose) {
    // User choice was undefined
    return ("<p>Player 2, type in a correct input (rock, paper, or scissors).</p>");
} else {
    // Display user choice
    return ("<p>Player 2:" + " " + choose + "</p>");
}

// 3. Compare User1 input to User2 input.
const checkUserInput = 'checks user1 && user2';

// 4. If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
if (user1 === "rock") {
  if (user2 === "scissors") {
      // rock wins
      return "You win!";
  } else {
      // paper wins
      return "You lose! Try again.";
  }
}

// 5. If User1 input is 'rock' and User2 input is 'paper', User2 wins.
if (user1 === "rock") {
  if (user2 === "paper") {
      // paper wins
      return "You win!";
 }

// 6. If User1 input is 'rock' and User2 input is 'rock', it's a tie.
const compare = function(hand1,hand2) {
  if (hand1 === hand2) {
      return "It's a tie!";
  }

// 7. If User1 input is 'paper' and User2 input is 'rock', User1 wins.
if (user1 === "paper") {
  if (user2 === "rock") {
      // paper wins
      return "You win!";
 }

// 8. If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
if (user1 === "rock") {
  if (user2 === "scissors") {
      // scissors wins
      return "You win!";
 }

// 9. If User1 input is 'paper' and User2 input is 'paper', it's a tie.
const compare = function(hand1,hand2) {
  if (hand1 === hand2) {
      return "It's a tie!";
  }

// 10. If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
if (user1 === "scissors") {
  if (user2 === "paper") {
      // scissors wins
      return "You win!";
 }

// 11. If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
if (user1 === "scissors") {
  if (user2 === "rock") {
      // rock wins
      return "You win!";
 }

// 12. If User1 input is 'scissors' and User2 input is 'scissors', it's a tie.
const compare = function(hand1,hand2) {
  if (hand1 === hand2) {
      return "It's a tie!";
  }

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
