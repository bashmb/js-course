var board, currentPlayer;

var resetBoard = function () {
  board = [
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    ['wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X '],
    [' X ', 'wht', ' X ', 'wht', ' X ', 'wht', ' X ', 'wht'],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    [' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X ', ' X '],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X '],
    [' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ', 'red'],
    ['red', ' X ', 'red', ' X ', 'red', ' X ', 'red', ' X ']
  ];

  currentPlayer = 'wht'
};

var makeMove = function(moveObj) {
  board[charToNum[moveObj['r1']]][moveObj['c1']] = " X "
  board[charToNum[moveObj['r2']]][moveObj['c2']] = currentPlayer
  if(currentPlayer === "red"){
    currentPlayer = "wht"}
  else
  {
    currentPlayer = "red"
  }
  displayBoard()
}

var attemptMove = function(moveObj){
  var errorCount = 0
  // test moving only one row at a time
  if(Math.abs(charToNum[moveObj['r1']] - charToNum[moveObj['r2']]) !== 1){
    errorCount += 1
    alert("Cannot move more than one row at a time")
  }
  // test moving only one column at a time
  if(Math.abs(moveObj['c1'] - moveObj['c2']) != 1){
    errorCount += 1
    alert("Cannot move more than one colume at a time")
  }

  // test not moving off the board
  // if(moveObj['c2'] > 8 || moveObj['c2'] < 0 || charToNum[moveObj['r2']] > 8 || charToNum[moveObj['r2']] < 8) {
  //   errorCount += 1
  //   alert("Don't move off the board")
  // }
  // test not moving opponent's piece
  if(board[charToNum[moveObj['r1']]][moveObj['c1']] != currentPlayer){
    errorCount += 1 
    alert("It's not your turn.")
  }
  // test not moving a nonexistent piece


  
  
  if(errorCount === 0){
    makeMove(moveObj)
  }
}

var removePiece = function(){

}

var getMove = function(){
  var movePrompt = prompt("Please enter your move in format: R1, C1, R2, C2")
  var moveArray = movePrompt.split(",")
  var moveObj = {r1: moveArray[0], c1: moveArray[1], r2: moveArray[2], c2: moveArray[3]}
  attemptMove(moveObj)

}

var play = function(){
  resetBoard()
  displayBoard()
  getMove()
  // attemptMove()
}