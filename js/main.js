var playerStatusElement = document.getElementById('currentPlayerStatus');
var resetGameButton = document.getElementById('restart');
var game, currentPlayer, gameStatus;
// 1 - active
// 2 - result: draw
// 3 - result: somebody win
var playerX = 'x';
var playerO = 'o';

restartGame();

function setBtnText(event, arrId) {
    if(game[arrId] === '-' && gameStatus === 1){
    event.target.value = currentPlayer;
    game[arrId] = currentPlayer;

    var win = checkWin();
    if(win) {
      gameStatus = 0;
      resetGameButton.hidden = false;
      setPlayerStatusElementText("Congratulation to player " + currentPlayer);
    } else if (!~game.indexOf('-')){
      gameStatus = 2;
      resetGameButtont.hidden = false;
      setPlayerStatusElementText("Draw!");
    } else {
      switchPlayer();
      setPlayerStatusElementText("Player '" + currentPlayer + "' move");
      showGameStatus();
      }
  }
  else {
      event.target.style.borderColor = "red";
      setTimeout(function(){
      event.target.style.borderColor = "gray";
      }, 3000)
    }
}

function switchPlayer(){
  currentPlayer = currentPlayer === playerX
  ? playerO
  : playerX;

}

function setPlayerStatusElementText(text){
    playerStatusElement.innerHTML = text;
}

function checkWin(){
  var horizontal = currentPlayer === game[0] && currentPlayer === game[1] && currentPlayer === game[2]
                || currentPlayer === game[3] && currentPlayer === game[4] && currentPlayer === game[5]
                || currentPlayer === game[6] && currentPlayer === game[7] && currentPlayer === game[8];
  var vertical = currentPlayer === game[0] && currentPlayer === game[3] && currentPlayer === game[6]
                || currentPlayer === game[1] && currentPlayer === game[4] && currentPlayer === game[7]
                || currentPlayer === game[2] && currentPlayer === game[5] && currentPlayer === game[8];
  var diagonal = currentPlayer === game[0] && currentPlayer === game[4] && currentPlayer === game[8]
                || currentPlayer === game[2] && currentPlayer === game[4] && currentPlayer === game[6];

  return horizontal || vertical || diagonal;
}

function showGameStatus(){
  console.log(game[0], game[1], game[2]);
  console.log(game[3], game[4], game[5]);
  console.log(game[6], game[7], game[8]);
}

function restartGame(){
  game = ['-','-','-','-','-','-','-','-','-'];
  currentPlayer = playerX;
  gameStatus = 1;
  setPlayerStatusElementText("Player '" + currentPlayer + "' move");
  var buttons = document.querySelectorAll('input[type="button"]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].value = " ";
  }
  resetGameButton.hidden = true;
}
