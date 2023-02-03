import Piece from "./Pieces";

export default class Server {
    constructor(turn, board) {
        this.turn = "White";
        this.board = board;
    }

    placePieces() {
        /* Pawns */
        for (let i = 0; i < 8; i++) {
            this.board[6][i] = new Piece("Pawn", "White", 6, i, "&#9817;");
            this.board[1][i] = new Piece("Pawn", "Black", 1, i, "&#9823;");
        }
            
        /* Rook */
        this.board[7][0] = new Piece("Rook", "White", 7, 0, "&#9814;"); 
        this.board[7][7] = new Piece("Rook", "White", 7, 7, "&#9814;"); 
        this.board[0][0] = new Piece("Rook", "Black", 0, 0, "&#9820;");
        this.board[0][7] = new Piece("Rook", "Black", 0, 7, "&#9820;");
        
        /* Knight */ 
        this.board[7][1] = new Piece("Knight", "White", 7, 1, "&#9816;"); 
        this.board[7][6] = new Piece("Knight", "White", 7, 6, "&#9816;"); 
        this.board[0][1] = new Piece("Knight", "Black", 0, 1, "&#9822;");
        this.board[0][6] = new Piece("Knight", "Black", 0, 6, "&#9822;");
        
        
        /* Bishop */
        this.board[7][2] = new Piece("Bishop", "White", 7, 2, "&#9815;"); 
        this.board[7][5] = new Piece("Bishop", "White", 7, 5, "&#9815;"); 
        this.board[0][2] = new Piece("Bishop", "Black", 0, 2, "&#9821;"); 
        this.board[0][5] = new Piece("Bishop", "Black", 0, 5, "&#9821;");
        
        /* Queen */
        this.board[7][3] = new Piece("Queen", "White", 7, 3, "&#9813;"); 
        this.board[0][3] = new Piece("Queen", "Black", 0, 3, "&#9819;"); 
        
        /* King */
        this.board[7][4] = new Piece("King", "White", 7, 4, "&#9812;"); 
        this.board[0][4] = new Piece("King", "Black", 0, 4, "&#9818;"); 
        
    }

    static createBoard() {
        let board = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = null;
            }
        }

        return board;
    }

    move(piece, row, col) {
        if (piece != null) {
            this.board[piece.row][piece.col] = null
            piece.row = row;
            piece.col = col;
            this.board[row][col] = piece;
        }
    }
}