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

//Rules
// Only one disk can be moved at a time, movePiece()
// A disk can only be moved if it is the uppermost disk on a stack, isLegal()
// No disk may be placed on top of a smaller disk, isLegal()
// You have to move all disk from on side to the other, checkForWin()




// One Solution
const run = function(){
  solveTowerOfHanoi(4);
}

function solveTowerOfHanoi(pieces){
  solveTower(pieces, 1, 3);
}

function solveTower(pieces, startStack, endStack){
  if (pieces == 0) return;

  const middleStact = 6 -startStack -endStack;
  solveTower(pieces -1, startStack, middleStact);

  const text = "Move {0} from {1} to {2}"
    .fomat(pieces, stacks[startStack -1], stacks[endStack -1]);
    return(text);

    solveTower(pieces -1, middleStack, endStack);
}


function stacks (n, a, b, c){
  if (n==1){
    console.log('Move disc '+n+' from '+a+' to '+b+')
  }else{
    stacks (n-1,a,c,b);
    stacks (1,a,b,c);
    stacks (n-1,c,b,a);
  }
}



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here


}

function isLegal() {
  // Your code here

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
// Your code here
//Rules
// Only one disk can be moved at a time, movePiece()
// A disk can only be moved if it is the uppermost disk on a stack, isLegal()
// No disk may be placed on top of a smaller disk, isLegal()
// You have to move all disk from on side to the other, checkForWin()


  // if (stacks(row, column)){
  //   if (isEmpty(row, column)){
  //     board[row][column] = playerTurn;
  //     if (checkForWin()){
  //       console.log(playerTurn + ' Wins!');
  //       resetGame();

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
