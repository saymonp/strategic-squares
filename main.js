class Piece {
  constructor(type, color, row, col, code) {
    this.type = type;
    this.color = color;
    this.row = row;
    this.col = col;
    this.code = code
  }
}

function newGame(board) {
  /* Pawns */
  for (let i = 0; i < 8; i++) {
    board[6][i] = new Piece("Pawn", "White", 6, i, "&#9817;");
    board[1][i] = new Piece("Pawn", "Black", 1, i, "&#9823;");
  }
   
  /* Rook */
  board[7][0] = new Piece("Rook", "White", 7, 0, "&#9814;"); 
  board[7][7] = new Piece("Rook", "White", 7, 7, "&#9814;"); 
  board[0][0] = new Piece("Rook", "Black", 0, 0, "&#9820;");
  board[0][7] = new Piece("Rook", "Black", 0, 7, "&#9820;");

  /* Knight */ 
  board[7][1] = new Piece("Knight", "White", 7, 1, "&#9816;"); 
  board[7][6] = new Piece("Knight", "White", 7, 6, "&#9816;"); 
  board[0][1] = new Piece("Knight", "Black", 0, 1, "&#9822;");
  board[0][6] = new Piece("Knight", "Black", 0, 6, "&#9822;");
  
  
  /* Bishop */
  board[7][2] = new Piece("Bishop", "White", 7, 2, "&#9815;"); 
  board[7][5] = new Piece("Bishop", "White", 7, 5, "&#9815;"); 
  board[0][2] = new Piece("Bishop", "Black", 0, 2, "&#9821;"); 
  board[0][5] = new Piece("Bishop", "Black", 0, 5, "&#9821;");

  /* Queen */
  board[7][3] = new Piece("Queen", "White", 7, 3, "&#9813;"); 
  board[0][3] = new Piece("Queen", "Black", 0, 3, "&#9819;"); 

  /* King */
  board[7][4] = new Piece("King", "White", 7, 4, "&#9812;"); 
  board[0][4] = new Piece("King", "Black", 0, 4, "&#9818;"); 

}

let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }

newGame(board);

let htmlBoard = document.createElement('div');
htmlBoard.className = "board";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {

    let square = document.createElement('div');
    square.className = "square";
    square.classList.add('square');
    square.setAttribute("row", i);
    square.setAttribute("col", j);

    if ((i + j) % 2 === 0) {
      square.classList.add('black-square');
    } else {
      square.classList.add('white-square');
    }

    if (board[i][j] != null) {
      let piece = document.createElement('div');
      piece.setAttribute("id", board[i][j].type);
      piece.innerHTML = board[i][j].code;
      square.appendChild(piece);
    }
    

    htmlBoard.appendChild(square);
  }
}

document.body.appendChild(htmlBoard);

function move(board, piece, row, col) {
  if (piece != null){
    let square = document.getElementsByClassName('square');

    const positionOld = (piece.row*8)+piece.col;
    const positionNew = (row*8)+col;
    square[positionOld].innerHTML = "";
    square[positionNew].innerHTML = piece.code;

    board[piece.row][piece.col] = null
    piece.row = row;
    piece.col = col;
    board[row][col] = piece;
  }
}

move(board, board[6][4], 4, 4);
console.log(board);

