export default class View {
    constructor(turn, board) {
        this.turn = true;
        this.board = board;
    }

    createBoard() {
        let htmlBoard = document.createElement('div');
        htmlBoard.className = "board";

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {

                let square = document.createElement('div');
                square.className = "square";
                square.classList.add('square');
                square.setAttribute("row", i);
                square.setAttribute("col", j);
                applyClickSquare(square);

                if ((i + j) % 2 === 0) {
                    square.classList.add('black-square');
                } else {
                    square.classList.add('white-square');
                }

                if (this.board[i][j] != null) {
                    let piece = document.createElement('div');
                    piece.setAttribute("id", "piece");
                    piece.innerHTML = this.board[i][j].code;
                    applyClick(piece);
                    square.appendChild(piece);
                }


                htmlBoard.appendChild(square);
            }
        }

        document.body.appendChild(htmlBoard);
    }

    sendMove(piece, row, col) {
        /* send to server if ok update */
        View.updateBoard(piece, row, col)
        this.turn = false;
    }

    receiveOponentMove(piece, row, col) {
        /* recieve move from server and update */
        View.updateBoard(piece, row, col);
        this.turn = true;
    }

    static updateBoard(piece, row, col) {
        let square = document.getElementsByClassName('square');

        const positionOld = (piece.row * 8) + piece.col;
        const positionNew = (row * 8) + col;

        square[positionNew].appendChild(square[positionOld].firstChild);
        square[positionOld] = ""

    }

}