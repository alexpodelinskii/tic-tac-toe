class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.field = [[null, null, null,], [null, null, null,], [null, null, null,]]
        this.turns = 0;
        this.win = null;
        this.winner = null;
        this.flag = false;
        this.ttt = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    checkIsFinished(rowIndex, columnIndex) {
        if (rowIndex == columnIndex) {
            if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) {
                this.win = true;
            }
        } else if (this.field[rowIndex][0] == this.field[rowIndex][1] && this.field[rowIndex][1] == this.field[rowIndex][2]) {
            this.win = true;
        } else if (this.field[0][columnIndex] == this.field[1][columnIndex] && this.field[1][columnIndex] == this.field[2][columnIndex]) {
            this.win = true;
        } else if ((rowIndex == 0 && columnIndex == 2) || (rowIndex == 2 && columnIndex == 0)) {
            if (this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2]) {
                this.win = true;
            }
        }
        if (this.win) {
            this.winner = this.currentPlayerSymbol;
        }


    }




    nextTurn(rowIndex, columnIndex) {
        this.ttt++;
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.turns++;
            if (this.turns > 4 || !this.win) {
                this.checkIsFinished(rowIndex, columnIndex);
            }
            if (this.currentPlayerSymbol === "x") {
                this.currentPlayerSymbol = "o";
            } else { this.currentPlayerSymbol = "x"; }
        }
    }


    isFinished() {
        return this.win || this.turns == 9;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.turns == 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.turns == 9 && !this.win) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
