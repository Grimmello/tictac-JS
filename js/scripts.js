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
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 600);
  ctx.moveTo(400,0);
  ctx.lineTo(400,600);
  ctx.moveTo(0,200);
  ctx.lineTo(600,200);
  ctx.moveTo(0,400);
  ctx.lineTo(600,400);
  ctx.strokeStyle = "red";
  ctx.stroke();
}
function UpdateGame(){
//PLAYER X GOES FIRST

}
function GameStart(name1,name2){
  var position1 = "X";
  var position2 = "O";
  var playerX = new Player1(name1, position1);
  var playerO = new Player2(name2, position2);
}
//Front End
$(function(){
  $("form#player").submit(function(event){
    event.preventDefault();
    var inputPlayer1 = $("input#player1").val();
    var inputPlayer2 = $("input#player2").val();
    GameStart(inputPlayer1, inputPlayer2);
  })
  Board();
})
