'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  if (board[0][0] != " " && board[0][0] == board[0][1] && board[0][2]==board[0][0]){
    return true;
  }
  if (board[1][0] != " " && board[1][0] == board[1][1] && board[1][2]==board[1][0]){
    return true;
  }
  if (board[2][0] != " " && board[2][0] == board[2][1] && board[2][2]==board[2][0]){
    return true;
  }

}

function verticalWin() {
  // Your code here
  if (board[0][0] != " " && board[0][0] == board[1][0] && board[2][0]==board[0][0]){
  
    return true;
  }
  if (board[0][1] != " " && board[0][1] == board[1][1] && board[2][1]==board[0][1]){
  
    return true;
  }
  if (board[0][2] != " " && board[0][2] == board[1][2] && board[2][2]==board[0][2]){
  
    return true;
  }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] != " " && board[0][0] == board[1][1] && board[2][2]==board[0][0]){
    return true;
  }
  if (board[0][2] != " " && board[0][2] == board[1][1] && board[2][0]==board[0][2]){
    return true;
  } 
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



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
