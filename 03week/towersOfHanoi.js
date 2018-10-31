'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function movePiece(startStack, endStack) {
  // Your code here
  // Pop is taking 1 and storing it in the varible called take
  const take = stacks[startStack].pop()
  const put = stacks[endStack].push(take)
}



function isLegal(startStack, endStack) {
  // Your code here
  // Checking to see if one block is larger than the other for valid move
  const grabLast = stacks[startStack].slice(-1)
  const compareWhereGoing = stacks[endStack].slice(-1)
  if(grabLast < compareWhereGoing || compareWhereGoing === undefined){
    return true;
  }
};



function checkForWin() {
  // Your code here
  // C in quotes to access the array and 4 is the lenght of the pieces needed to Win
  return (stacks['c'].length == 4);
}


// Function To Reset Game
const resetGame = {
  
}



function towersOfHanoi(startStack, endStack) {
// Your code here
//Rules
// Only one disk can be moved at a time, movePiece()
// A disk can only be moved if it is the uppermost disk on a stack, isLegal()
// No disk may be placed on top of a smaller disk, isLegal()
// You have to move all disk from on side to the other, checkForWin()
if (isLegal(startStack, endStack)){
  if (movePiece(startStack, endStack)){
    stacks[startStack][endStack];
    if (checkForWin()){
      console.log('You Win!');
      resetGame();
    }else{
    console.log('Invalid')
  }
}
  


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
