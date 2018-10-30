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

const disk1 = 1;
const disk2 =2;
const disk3 =3;
const disk4 =4;
const endStackValidWin = [4, 3, 2, 1];
const firstPick = stacks.a[3];



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
  if (stacks.a ==1){
    return true;
  }
  if (stacks.b ==1){
    return true;
  }
  if (stacks.c == 1){
    return true;
  }


}

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function isLegal(startStack, endStack) {
  // Your code here
  for(let i = 0; i < stacks.length; i++){
    if (stacks[i].includes(' ')){
      return false;
    }
  }
  return true;
};



function checkForWin() {
  // Your code here
  return endStackValidWin();


const resetGame=()=>{
  stacks.forEach(element => {
    element.fill(stacks);
});





function towersOfHanoi(startStack, endStack) {
// Your code here
//Rules
// Only one disk can be moved at a time, movePiece()
// A disk can only be moved if it is the uppermost disk on a stack, isLegal()
// No disk may be placed on top of a smaller disk, isLegal()
// You have to move all disk from on side to the other, checkForWin()
if (isLegal(startStack, endStack)){
  if (movePiece(startStack, endStack)){
    stacks[startStack][endStack] = playerTurn;
    if (checkForWin()){
      console.log('You Win!');
      resetGame();
    }else{
    console.log('Pick A Valid Play')
  }
}


//code to look at from TicTacToe

  let playerTurn = 'X';

  function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
  }
  
 
 
  
  function checkForWin() {
    // Your code here
    return horizontalWin() || verticalWin() || diagonalWin();
  }
  
  const resetGame=()=>{
   board.forEach(element => {
     element.fill(" ");
   });
   playerTurn = 'X';
  }
  
  const isValid =(row, column)=>{
    if(row == '0' || row == '1' || row == '2'){
      if(column == '0' || column == '1' || column == '2'){
        return true;
      }
    }
  };
  
  const isEmpty =(row, column)=>{
    if(board[row][column] == ' '){
      return true;
    }
  };
  
  const draw =()=>{
    for(let i = 0; i < board.length; i++){
      if (board[i].includes(' ')){
        return false;
      }
    }
    return true;
  };
  
  function ticTacToe(row, column) {
    // Your code here
    // user selelects position on the board  to place their mark 
    // make sure it is a valid pick, isValid() T/F
    // make sure the place is empty, isEmpty() T/F
    // put the mark 
    // check win, checkForWin()
    // swich user, swithUser()
    // check for draw, checkForDraw()
    if (isValid(row, column)){
      if (isEmpty(row, column)){
        board[row][column] = playerTurn;
        if (checkForWin()){
          console.log(playerTurn + ' Wins!');
          resetGame();
        }else{
          if (draw()){
            console.log('Draw! No One Wins, Restart Game');
            resetGame();
          }else{
          switchPlayer()
          }
        }
      }else{
        console.log('Pick An Empty Space')
      }
    }else{
      console.log('Enter Valid Entry!')
    }
  }
  
  const switchPlayer =()=>{
    if(playerTurn == 'X'){
      playerTurn = 'O';
    }else{
      playerTurn = 'X';
    }
  }
  
  function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
      rl.question('column: ', (column) => {
        ticTacToe(row, column);
        getPrompt();
      });
    });
  
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
