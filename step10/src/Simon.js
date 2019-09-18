/*
TESTING:
    npm run serve
UPLOADING:
    npm run build:dev
    npm run build:prod
 */
import * as $ from 'jquery';

export const Simon = function(sel) {
    const that = this;
    this.state = "initial";
    this.sequence = [Math.floor(Math.random() * 4)];
    this.current = 0;
    this.colors = ['red', 'green', 'blue', 'yellow'];

    this.initialize = function() {
        console.log('Simon started');
        console.log("State: " + this.state);

        const div = $(sel);
        div.html(
            '<form>' +
            '<p>' +
            '<input type="button" value="Red">' +
            '<input type="button" value="Green">' +
            '<input type="button" value="Blue">' +
            '<input type="button" value="Yellow">' +
            '</p>' +
            '<p>' +
            '<input id="start" type="button" value="Start">' +
            '</p>' +
            '</form>' +
            '<audio id="red" src="audio/red.mp3" preload="auto"></audio>' +
            '<audio id="green" src="audio/green.mp3" preload="auto"></audio>' +
            '<audio id="blue" src="audio/blue.mp3" preload="auto"></audio>' +
            '<audio id="yellow" src="audio/yellow.mp3" preload="auto"></audio>' +
            '<audio id="buzzer" src="audio/buzzer.mp3" preload="auto"></audio>'
        );

        this.form = div.find('form');
        const start = this.form.find('#start');
        start.click(function(event) {
            that.onStart();
        });
    }

    this.onStart = function() {
        console.log('Start button pressed');

        const start = this.form.find('#start');
        start.remove();

        this.configureButton(0, "red");
        this.configureButton(1, "green");
        this.configureButton(2, "blue");
        this.configureButton(3, "yellow");

        this.play();
    }

    this.configureButton = function(ndx, color) {
        var button = $(this.form.find("input").get(ndx));
        var that = this;

        button.click(function(event) {
            document.getElementById(color).currentTime = 0;
            document.getElementById(color).play();
            that.buttonPress(ndx, color);
        });

        button.mousedown(function(event) {
            button.css("background-color", color);
        });

        button.mouseup(function(event) {
            button.css("background-color", "lightgrey");
        });
    }

    this.play = function() {
        this.state = "play";    // State is now playing
        console.log("State: " + this.state);
        this.current = 0;       // Starting with the first one

        this.playCurrent();
    }

    this.playCurrent = function() {
        var that = this;
        if(this.current < this.sequence.length) {
            // We have one to play
            document.getElementById(this.colors[this.sequence[this.current]]).play();
            this.current++;
            window.setTimeout(function() {
                that.playCurrent();
            }, 1000);
            this.buttonOn(this.sequence[this.current-1]);
        } else {
            this.state = "enter";
            console.log("State: " + this.state);
            this.current = 0;
            this.buttonOn(-1);
        }
    }

    this.buttonOn = function(button) {
        var btn;
        for(var i=0; i<=3; i++){
            btn = $(this.form.find("input").get(i));
            if(button == i){
                btn.css('background-color', this.colors[i]);
            }else{
                btn.css('background-color', 'lightgrey');
            }
        }
    }

    this.buttonPress = function(button, color) {
        if(button != that.sequence[that.current]) {
            that.state = 'fail';
            console.log(that.state);
            document.getElementById("buzzer").play();
            window.setTimeout(function () {
                that.state = 'initial';
                that.initialize();
            }, 1000);
        }else if((button == that.sequence[that.current]) && (that.current == that.sequence.length - 1)){
            console.log("correct match");
            that.sequence.push(Math.floor(Math.random() * 4));
            window.setTimeout(function() {
                that.play();
            }, 1000);
        }
        that.current++;
    }
    // Ensure this is the last line of the function!
    this.initialize();
}