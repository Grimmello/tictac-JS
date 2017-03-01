// //Back End
var turns = ["X","O","X","O","X","O","X","O","X"]

function Player1 (name, position){
  this.playerName = name;
  this.position = position;
}
function Player2(name, position){
  this.playerName = name;
  this.position = position;
}
function Board (){
  var canvas = document.getElementById("canvas"),
      canvasLeft = canvas.offsetLeft,
      canvasTop = canvas.offsetTop,
      ctx = canvas.getContext("2d");

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

  // get mouse position
  function getMousePos(ctx,evt){
    var rect =  canvas.getBoundingCLientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top};
  };
  canvas.addEventListener('click', function(event){
    var x = event.pageX - canvas.offsetLeft,
        y = event.pageY - canvas.offsetTop;

    if (x < 200) {
      if (y < 200){
        console.log("a1")
      } else if (y > 200 && y <400) {
        console.log("b1")
      } else if (y > 400) {
        console.log("c1")
      }

    } else if (x > 200 && x < 400) {
      if (y < 200){
        console.log("a2")
      } else if (y > 200 && y < 400) {
        console.log("b2")
      } else if (y > 400) {
        console.log("c2")
      }
    } else if (x > 400) {
      if (y < 200){
        console.log("a3")
      } else if (y > 200 && y <400) {
        console.log("b3")
      } else if (y > 400) {
        console.log("c3")
      }
    }
  });

  // ctx.addEventListener('mousemove')
  //Draw X Function
  function drawX(x,y){
    var imageObj = new Image();
    imageObj.onload = function() {
      ctx.drawImage(this, x+10, y+10);
    };
    imageObj.src = "../tictac/img/x.png";
  };

  //Draw O Function
  function drawO(x,y){
    var imageObj = new Image();
    imageObj.onload = function() {
      ctx.drawImage(this, x + 10, y + 10);
    };
    imageObj.src = "../tictac/img/objecto.png";
  };

  drawX(0,200);
  drawX(200,0);
  drawO(200,400);



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
