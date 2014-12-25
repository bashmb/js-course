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
  getPlayer(currentPlayer)
};

var kathryn = function(question) {
  return "You're rong."
}

var makeMove = function(moveObj, taking) {
  // Test whether a piece will be taken


  board[charToNum[moveObj['r1']]][moveObj['c1']] = " X "
  board[charToNum[moveObj['r2']]][moveObj['c2']] = currentPlayer
  



  //Change turn
  if(currentPlayer === "red"){
    currentPlayer = "wht"}
  else
  {
    currentPlayer = "red"
  }

  if(moveObj['rCap'] !== -1){
    removePiece(moveObj)
  }
  displayBoard()
  getMove()
  
}

var removePiece = function(moveObj){
    board[charToNum[moveObj['r2']]][moveObj['c2']] = " X "

      board[charToNum[moveObj['rCap']]][moveObj['cCap']] = " X "
    displayBoard()
    getMove()
}

var attemptMove = function(moveObj){
  var errorCount = 0
  // test moving only one row at a time
  if(moveObj['rCap'] === -1 && Math.abs(charToNum[moveObj['r1']] - charToNum[moveObj['r2']]) !== 1){
    errorCount += 1
    alert("Cannot move more than one row at a time if not capturing")
  }
  // test moving only one column at a time
  if(moveObj['cCap'] === -1 && Math.abs(moveObj['c1'] - moveObj['c2']) != 1){
    errorCount += 1
    alert("Cannot move more than one column at a time if not capturing")
  }

  // test not moving off the board
 
  // test not moving opponent's piece
  if(board[charToNum[moveObj['r1']]][moveObj['c1']] != currentPlayer){
    errorCount += 1 
    alert("It's not your turn.")
  }

  // test valid capture
    //determine whether enemy piece is between start and end spaces using Math.abs



  if(board[charToNum[moveObj['r2']]][moveObj['c2']] !== currentPlayer && board[charToNum[moveObj['r2']]][moveObj['c2']] !== " X "){
    taking = true
  }

  if(errorCount === 0){
    makeMove(moveObj)
  } else {
    getMove()
  }
}

var removePiece = function(moveObj){

}

var getMove = function(){
  var movePrompt = prompt("Please enter your move in format: R1, C1, R2, C2")
  var moveArray = movePrompt.split(",")
  var moveObj = {r1: moveArray[0], c1: moveArray[1], r2: moveArray[2], c2: moveArray[3], rCap: -1, cCap: -1}
  if(moveObj['c2'] - moveObj['c1'] == 2){
  var capturedRow = Math.abs(charToNum[moveObj['r1']]-charToNum[moveObj['r1']])
  var capturedCol = Math.abs(moveObj['c1']-moveObj['c2'])
      moveObj['rCap'] = capturedRow
      moveObj['cCap'] = capturedCol
  }
  console.log(moveObj)
  attemptMove(moveObj)

}

var play = function(){
  resetBoard()
  displayBoard()
  getMove()
  // attemptMove()
}

var getPlayer = function(currentPlayer){
  if(currentPlayer = "red"){
    var player = "Red's Turn"
    return player}
  else
    {
    var player = "White's Turn"
    return player
    }
  
}