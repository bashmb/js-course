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

var attemptMove = function(row1, col1, row2, col2){
  var errorCount = 0
  if(errorCount === 0){
    makeMove(row1, col1, row2, col2)
  }
}

var removePiece = function(){

}

var getMove = function(){
  var movePrompt = prompt("Please enter your move in format: R1, C1, R2, C2")
  var moveArray = movePrompt.split(",")
  var moveObj = {r1: moveArray[0], c1: moveArray[1], r2: moveArray[2], c2: moveArray[3]}
  makeMove(moveObj)

}

var play = function(){
  resetBoard()
  displayBoard()
  getMove()
  // attemptMove()
}