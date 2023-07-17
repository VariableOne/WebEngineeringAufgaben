let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {

    if(board[index] !== ''){
        return null;
    }

    if(gameOver === true){
        alert("Spieler " +currentPlayer+" hat gewonnen");
        return null;
    }

board[index] = currentPlayer;
const felder = document.querySelectorAll('.cell');
let auswahl;
auswahl = felder[index];
auswahl.textContent = currentPlayer;
gewonnen();

if(gameOver === true){
    alert("Spieler " +currentPlayer+" hat gewonnen");
    return null;
}

if(currentPlayer === 'X'){

    currentPlayer = 'O';
}  else {

    currentPlayer = 'X';
}


}

function gewonnen(){

    if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
        gameOver = true;
    }

    if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
        gameOver = true;
    }
    
    if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) {
        gameOver = true;
    }

    if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) {
        gameOver = true;
    }

    if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) {
        gameOver = true;
    }
    
    if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) {
        gameOver = true;
    }

    if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) {
        gameOver = true;
    }
    
    if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) {
        gameOver = true;
    }



}

function resetGame() {

    board = ['', '', '', '', '', '', '', '', '']

    const felder = document.querySelectorAll('.cell');
    for(let i = 0;i<= 9; i++){
       let auswahl = felder[i];
        auswahl.textContent = '';

    }
  
 
    
}