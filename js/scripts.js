//Back End
function Player1 (name, position){
  this.playerName = name;
  this.position = position;
}
function Player2(name, position){
  this.playerName = name;
  this.position = position;
}
function Board (){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
}
function UpdateGame(){
//player1 goes first
if (Player1Name.position === "X")
//click to draw X
//player2 goes next
//click to draw O
}
function GameStart(name1,name2){
  var position1 = "X";
  var position2 = "O";
  var player1Name = new Player1(name1, position1);
  var player2Name = new Player2(name2, position2);
  console.log(player1Name);
  console.log(player2Name);
}
//Front End
$(function(){
  $("form#player").submit(function(event){
    event.preventDefault();
    var inputPlayer1 = $("input#player1").val();
    var inputPlayer2 = $("input#player2").val();
    GameStart(inputPlayer1, inputPlayer2);
    Board();
  })
})
