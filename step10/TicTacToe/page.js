function TicTacToe(id){
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.div = document.getElementById(id);
    var move = 'X';
    var win = false;

    this.present = function(){
        var str = "";
        str += "<table>";
        for(var r=0; r<=this.board.length-1; r++){
            str += "<tr>";
            for(var c=0; c<=this.board.length-1; c++){
                if(this.board[r][c] == ''){
                    str += '<td onclick="ttt.makeMove(' + r + ',' + c + ');">&nbsp;</td>';
                }else{
                    str += "<td>" + this.board[r][c] + "</td>";
                }
            }
            str += "</tr>";
        }
        str += "</table>";
        this.div.innerHTML = str;
    }

    this.makeMove = function(r, c){
        if(win == true){
            return;
        }
        this.board[r][c] = move;
        if(move == 'X'){
            move = 'O';
        }else{
            move = 'X';
        }
        this.present();
        win = this.winCheck();
    }

    this.winCheck = function(){
        var end = false;
        //c
        for(var c=0; c<=this.board.length-1; c++){
            if((this.board[0][c] != '') && (this.board[0][c] == this.board[1][c]) && (this.board[1][c] == this.board[2][c])){
                this.div.innerHTML += "<p>" + this.board[0][c] + " Wins!</p>" +
                    "<p><a href=''>New Game</a></p>";
                end = true;
            }
        }

        //r
        for(var r=0; r<=this.board.length-1; r++){
            if((this.board[r][0] != '') && (this.board[r][0] == this.board[r][1]) && (this.board[r][1] == this.board[r][2])){
                this.div.innerHTML += "<p>" + this.board[r][0] + " Wins!</p>" +
                    "<p><a href=''>New Game</a></p>";
                end = true;
            }
        }

        //d
        if((this.board[0][0] != '') && (this.board[0][0] == this.board[1][1]) && (this.board[1][1] == this.board[2][2])){
            this.div.innerHTML += "<p>" + this.board[0][0] + " Wins!</p>" +
                "<p><a href=''>New Game</a></p>";
            end = true;
        }else if((this.board[0][2] != '') && (this.board[0][2] == this.board[1][1]) && (this.board[1][1] == this.board[2][0])){
            this.div.innerHTML += "<p>" + this.board[0][2] + " Wins!</p>" +
                "<p><a href=''>New Game</a></p>";
            end = true;
        }
        return end;
    }

    this.present();
}