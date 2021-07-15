class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.field = [[null, null, null,], [null, null, null,], [null, null, null,]]
        this.turns = 0;


    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }




    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.turns++;
            this.currentPlayerSymbol = this.currentPlayerSymbol == "x" ? "o" : "x";
        }
    }


    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else return false;
    }

    getWinner() {
        if (this.field[0][0] && (this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2])) {
            return this.field[0][0];
        }
        if (this.field[1][0] && (this.field[1][0] === this.field[1][1]) && (this.field[1][0] === this.field[1][2])) {
            return this.field[1][0];
        }
        if (this.field[2][0] && (this.field[2][0] === this.field[2][1]) && (this.field[2][0] === this.field[2][2])) {
            return this.field[2][0];
        }
        if (this.field[0][0] && (this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0])) {
            return this.field[0][0];
        }
        if (this.field[0][1] && (this.field[0][1] === this.field[1][1]) && (this.field[0][1] === this.field[2][1])) {
            return this.field[0][1];
        }
        if (this.field[0][2] && (this.field[0][2] === this.field[1][2]) && (this.field[0][2] === this.field[2][2])) {
            return this.field[0][2];
        }
        if (this.field[0][0] && (this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) {
            return this.field[0][0];
        }
        if (this.field[2][0] && (this.field[2][0] === this.field[1][1]) && (this.field[2][0] === this.field[0][2])) {
            return this.field[2][0];
        }
        return null;
    }



    noMoreTurns() {
        if (this.turns == 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true
        } else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
