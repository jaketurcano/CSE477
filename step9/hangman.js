function hangman() {
    // Pick a random word
    var word = randomWord();
    console.log(word);

    // Make a "guess" string with underbars
    // where each letter will go. We will fill
    // this in with letters as we find them.
    var guess = '';
    for(var i=0; i<word.length;  i++) {
        guess += '_';
    }

    // The HTML for the page
    var html = '<p><img width="125" height="300" src="images/hm0.png" id="image"></p>';

    html += '<p id="guess"></p>';
    html += '<form>';
    html += '<input type="hidden" id="word" value="' + word + '">';
    html += '<p><label for="letter">Letter: </label><input type="text" id="letter"</p>';
    html += '<p><input type="submit" id="try" value="Guess!"> <input type="submit" id="new" value="New Game"> </p>';
    html += '<p id="message">&nbsp;</p>';
    html += '</form>';

    document.getElementById("play-area").innerHTML = html;

    setGuess(guess);

    var msg = document.getElementById("message");
    var correctGuesses = [];
    var wrongGuesses = 1;

    document.getElementById("try").onclick = function(event) {
        event.preventDefault();
        var letter = document.getElementById("letter").value;
        if(wrongGuesses > 5) {
            setGuess(word);
            incorrectGuess(wrongGuesses);
        }else if (letter === null || letter === "") {
            msg.innerHTML = "You must enter a letter!";
        }else{
            msg.innerHTML = "&nbsp;";
            if(letter.length > 1){
                console.log("too many characters");
                console.log(wrongGuesses);
                incorrectGuess(wrongGuesses);
                wrongGuesses += 1;
            }else if(word.indexOf(letter) < 0){
                console.log("incorrect guess");
                console.log(wrongGuesses);
                incorrectGuess(wrongGuesses);
                wrongGuesses += 1;
            }else {
                correctGuesses.push(letter);
                var str = "";
                for(var i=0; i<word.length;  i++) {
                    var wordIndex = correctGuesses.indexOf(word.charAt(i));
                    if(wordIndex >= 0){
                        str += correctGuesses[wordIndex];
                    }
                    else{
                        str += '_';
                    }
                }
                setGuess(str);
            }if(str === word){
                msg.innerHTML = "You win!";
            }
        }
        //reset input
        document.getElementById("letter").value = '';
    }
    document.getElementById("new").onclick = function(event) {
        event.preventDefault();
        word = randomWord();
        return hangman();
    }

}


function incorrectGuess(wrongGuesses){
    var hangman = ["images/hm0.png","images/hm1.png","images/hm2.png","images/hm3.png","images/hm4.png",
        "images/hm5.png","images/hm6.png"];
    if(wrongGuesses < 6){
        document.getElementById("image").src = hangman[wrongGuesses];
        return;
    }
    document.getElementById("message").innerHTML = "You guessed poorly!";
    document.getElementById("image").src = hangman[6];
    return;
}

// Set the guess in the from
function setGuess(guess) {
    var g = '';
    for(var i=0; i<guess.length; i++) {
        g += guess.charAt(i) + ' ';
    }

    document.getElementById("guess").innerHTML = g;
}

function randomWord() {
    var words = ["moon","home","mega","blue","send","frog","book","hair","late",
        "club","bold","lion","sand","pong","army","baby","baby","bank","bird","bomb","book",
        "boss","bowl","cave","desk","drum","dung","ears","eyes","film","fire","foot","fork",
        "game","gate","girl","hose","junk","maze","meat","milk","mist","nail","navy","ring",
        "rock","roof","room","rope","salt","ship","shop","star","worm","zone","cloud",
        "water","chair","cords","final","uncle","tight","hydro","evily","gamer","juice",
        "table","media","world","magic","crust","toast","adult","album","apple",
        "bible","bible","brain","chair","chief","child","clock","clown","comet","cycle",
        "dress","drill","drink","earth","fruit","horse","knife","mouth","onion","pants",
        "plane","radar","rifle","robot","shoes","slave","snail","solid","spice","spoon",
        "sword","table","teeth","tiger","torch","train","water","woman","money","zebra",
        "pencil","school","hammer","window","banana","softly","bottle","tomato","prison",
        "loudly","guitar","soccer","racket","flying","smooth","purple","hunter","forest",
        "banana","bottle","bridge","button","carpet","carrot","chisel","church","church",
        "circle","circus","circus","coffee","eraser","family","finger","flower","fungus",
        "garden","gloves","grapes","guitar","hammer","insect","liquid","magnet","meteor",
        "needle","pebble","pepper","pillow","planet","pocket","potato","prison","record",
        "rocket","saddle","school","shower","sphere","spiral","square","toilet","tongue",
        "tunnel","vacuum","weapon","window","sausage","blubber","network","walking","musical",
        "penguin","teacher","website","awesome","attatch","zooming","falling","moniter",
        "captain","bonding","shaving","desktop","flipper","monster","comment","element",
        "airport","balloon","bathtub","compass","crystal","diamond","feather","freeway",
        "highway","kitchen","library","monster","perfume","printer","pyramid","rainbow",
        "stomach","torpedo","vampire","vulture"];

    return words[Math.floor(Math.random() * words.length)];
}