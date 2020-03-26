/*global setInterval */

var collectionsOFAllSquares = [];
var points = 0;
var squareOffsite = 100;
var squareSize = 95;
var boardSize = 5;
  
    var doc = this.document,
        body = doc.getElementsByTagName('body')[0];
//setInterval(function() {
//
// addSquareRandom();
//}, 1000);

setTimeout(function(){fillBoard() }, 1000);
function addSquareRandom(){
    
    var posX = Math.floor((Math.random() * boardSize) + 1);
    var posY = Math.floor((Math.random() * boardSize) + 1);
    var div = this.document.createElement("DIV");
    div.style.position = 'absolute';
    div.style.width = squareSize + 'px';
    div.style.height = squareSize + 'px';
    div.style.background = getRandomColor2();


    div.style.left = (posX * squareOffsite) + 'px';
    div.style.top = (posY * squareOffsite) + 'px';
    div.addEventListener("click", function() {
        checkStrike(div);
        div.remove();
        points++;
        updatePoints();
        
    });

    collectionsOFAllSquares.push(div);
    this.document.getElementsByTagName('body')[0].appendChild(div);
}


function getRandomColor2() {
    var colors = ['red', 'yellow', 'green'];
    var number = Math.floor((Math.random() * colors.length));

    return colors[number];

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var strikeOffset = 0; //
var strikeCollection = [];
var strikeColor = '';
function addStrikeElem(elem) {
    var stikeXSize = 90;
    var strikYSize = 25;
    var div = this.document.createElement("DIV");
    div.style.position = 'absolute';
    div.style.width = stikeXSize + 'px';
    div.style.height = strikYSize + 'px';
    div.style.background = elem.style.background;
    div.style.left = 20 + (95 *(strikeOffset++%3)) + 'px';
    div.style.top = (50 ) + 'px';
    strikeCollection.push(div);
    this.document.getElementsByTagName('body')[0].appendChild(div);
    
}

function restartAll(){
    restartStrike();
    restoreBoard();
    strikeColor = '';
    points = 0;
    updatePoints();
    fillBoard();
}

function restartStrike() {
    strikeOffset = 0;
    strikeCollection.forEach(function(entry) {
        entry.remove();
    });
    strikeCollection = [];
}
function checkStrike(newElem){
    if(strikeColor === '' || strikeColor === newElem.style.background){
        addStrikeElem(newElem);
        strikeColor = newElem.style.background;
        if(strikeCollection.length === 4) {
            //add extra points 
            restartStrike();
            strikeColor = '';
            points+=10;
        }
    } else {
        restartStrike();
        strikeColor = newElem.style.background;
        addStrikeElem(newElem);
    }
    
}

function restoreBoard() {
    collectionsOFAllSquares.forEach(function(entry) {
    entry.remove();
});
    collectionsOFAllSquares = [];
}

function updatePoints (){
    document.getElementById("pts").textContent=points;
}

function fillBoard(){
    var body2 = this.document.getElementsByTagName('body')[0]
     for (var i = 1; i < 6; i++) {
        for (var j = 1; j < 6; j++) {
            var div = this.document.createElement("DIV");
            div.style.position = 'absolute';
            div.style.width = squareSize + 'px';
            div.style.height = squareSize + 'px';
            div.style.background = getRandomColor2();
            div.style.left = (i * squareOffsite) + 'px';
            div.style.top = (j * squareOffsite) + 'px';
           asd(div);
            collectionsOFAllSquares.push(div);
             body2.appendChild(div);
           
        }
    }
}
function asd(div){
     div.addEventListener("click", function() {
                checkStrike(div);
                div.remove();
                points++;
                updatePoints();

            });

}