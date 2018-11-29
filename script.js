var word = "";
var animals = ["cat", "dog", "mouse", "rabbit", "lizard", "squirrel", "bear", "camel", "lion", "tiger", "elephant"];
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "fuchsia", "aubergine", "aquamarine", "vermilion", "chartreuse"];
var fruits = ["apple", "orange", "banana", "pear", "plum", "nectarine", "peach", "strawberry"];
var vegetables = ["broccoli", "carrot", "tomato", "squash", "cucumber", "cauliflower", "eggplant", "celery"];

var guesses = 6;
var guessedLetters = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function startGame(){
    guesses = 6;
    word = "";
    guessedLetters = [];
    document.getElementById("guesses").innerHTML = "You have " + guesses + " guesses left.";
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("result").innerHTML = "";

    for(var a = 0; a < alphabet.length; a++){
        document.getElementById(alphabet[a]).disabled = false;
    }

    var categoryChosen = document.getElementById("category").value;

    if(categoryChosen == "Animals"){
        word = animals[Math.floor(Math.random() * animals.length)];
    }else if(categoryChosen == "Colors"){
        word = colors[Math.floor(Math.random() * colors.length)];
    }else if(categoryChosen == "Fruits"){
        word = fruits[Math.floor(Math.random() * fruits.length)];
    }else if(categoryChosen == "Vegetables"){
        word = vegetables[Math.floor(Math.random() * vegetables.length)];
    }

    var blank = "";
    for(var i = 0; i < word.length; i++){
        blank += "_ ";
    }

    document.getElementById("word").innerHTML = blank;
    document.getElementById("picture").src = "images/" + guesses + ".png";
}

function printWord(){
    var newWord = "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            newWord += word[i] + " ";
        }else{
            newWord += "_ ";
        }
    }
    return newWord;
}

function guessLetter(letter){
    document.getElementById(letter).disabled = true;

    guessedLetters += letter;
    document.getElementById("guessedLetters").innerHTML = "Guessed Letters: " + guessedLetters;

    var answer = printWord();
    document.getElementById("word").innerHTML = answer;

    if(word.indexOf(letter) == -1){
        guesses -= 1;
    }

    if(guesses <=0){
        for(var b = 0; b < alphabet.length; b++){
            document.getElementById(alphabet[b]).disabled = true;
            if(answer.indexOf("_ ") != -1){
                document.getElementById("result").innerHTML = "You have lost the game :( The word was " + word + ". Press start game to play again.";
            }
        }
    }

    if(answer.indexOf("_ ") == -1){
        document.getElementById("result").innerHTML = "You have won the game! :) Press start game to play again.";
        for(var c = 0; c < alphabet.length; c++){
            document.getElementById(alphabet[c]).disabled = true;
        }
    }
    if(guesses == 1){
        document.getElementById("guesses").innerHTML = "You have " + guesses + " guess left.";
    }else{
        document.getElementById("guesses").innerHTML = "You have " + guesses + " guesses left.";
    }
    document.getElementById("picture").src = "images/" + guesses + ".png";
}

function setUp(){
    for(var i = 0; i < alphabet.length; i++){
        var button = document.createElement("button");
        button.innerHTML = alphabet[i];
        button.setAttribute("id", alphabet[i]);
        button.setAttribute("class", "w3-btn w3-round-large w3-border w3-border-white w3-purple");
        button.setAttribute("onClick", "guessLetter(this.id)");
        var buttons = document.getElementById("buttons");
        buttons.appendChild(button);
    }
}



