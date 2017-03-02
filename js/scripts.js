// //Back End
var count = 0;
var turns = ["X","O","X","O","X","O","X","O","X"];
var x = 0
var y = 0
var grid =
[
  [0,0,0],
  [0,0,0],
  [0,0,0]
];
function checker(x,y){
  if (x < 200) {
    if (y < 200){
      return [0,0];
    } else if (y > 200 && y <400) {
      return [0,200];
    } else if (y > 400) {
      return [0,400];
    }

  } else if (x > 200 && x < 400) {
    if (y < 200){
      return [200,0];
    } else if (y > 200 && y < 400) {
      return [200,200];
    } else if (y > 400) {
      return [200,400];
    }
  } else if (x > 400) {
    if (y < 200){
      return [400,0];
    } else if (y > 200 && y <400) {
      return [400,200];
    } else if (y > 400) {
      return [400,400];
    }
  }
};

function Player (name){
  this.playerName = name;
}

function GameStart (name1,name2) {
  var position1 = "X";
  var position2 = "O";
  var playerX = new Player(name1);
  var playerO = new Player(name2);
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
    var drawCord = checker(x,y);
    x = drawCord[0];
    y = drawCord[1];
    var cord = (x + "," + y)
    //Draw our Xs & Os according to counter
    var draw = function (){
      if (turns[count] === "X") {
        drawX(x,y);
      } else {
        drawO(x,y);
      }
    }
    if (cord === "0,0" && grid[0][0] === 0) {
      grid[0].splice(0,1, turns[count]);
      draw(x,y);
      count += 1;
      gameWinner()
    } else if (cord === "200,0" && grid[0][1] === 0) {
      grid[0].splice(1,1,turns[count]);
      draw(x,y);
      count += 1;
      gameWinner()
    }else if (cord === "400,0" && grid[0][2] === 0) {
      grid[0].splice(2,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "0,200" && grid[1][0] === 0) {
      grid[1].splice(0,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "200,200" && grid[1][1] === 0) {
      grid[1].splice(1,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "400,200" && grid[1][2] === 0) {
      grid[1].splice(2,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "0,400" && grid[2][0] === 0) {
      grid[2].splice(0,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "200,400" && grid[2][1] === 0) {
      grid[2].splice(1,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }else if (cord === "400,400" && grid[2][2] === 0) {
      grid[2].splice(2,1,turns[count]);
      draw(x,y);
      count+= 1;
      gameWinner()
    }
function checkWin() {
  var topRow = grid[0];
  var midRow = grid[1];
  var botRow = grid[2];
  if(topRow[0] !== 0 && topRow[0] === midRow[0] && midRow[0] === botRow[0]){
    return topRow[0];
  } else if(topRow[1] === midRow[1] && midRow[1] === botRow[1]){
    return topRow[1];
  } else if(topRow[2] === midRow[2] && midRow[2] === botRow[2]){
    return topRow[2];
  } else if(topRow[0] === topRow[1] && topRow[1] === topRow[2]){
    return topRow[0];
  } else if(midRow[0] === midRow[1] && midRow[1] === midRow[2]){
    return midRow[0];
  } else if(botRow[0] === botRow[1] && botRow[1] === botRow[2]){
    return botRow[0];
  } else if(topRow[0] === midRow[1] && midRow[1] === botRow[2]){
    return topRow[0];
  } else if(botRow[0] === midRow[1] && midRow[1] === topRow[2]){
    return botRow[0];
  } else{
    return false;
  }
};
function gameWinner(){
  var winner = checkWin();
    if(winner !== false && winner !== 0){
      if(winner === "X"){
        alert("Player One wins!");
      } else{
        alert("Player Two wins!");
      }
    }
  }
});

//  ctx.addEventListener('mousemove')
//  Draw X Function
  function drawX(x,y){
    var imageObj = new Image();
    imageObj.onload = function() {
      ctx.drawImage(this, x+10, y+10);
    };
    imageObj.src = "../tictac/img/x.png";
  };
//  Draw O Function
  function drawO(x,y){
    var imageObj = new Image();
    imageObj.onload = function() {
      ctx.drawImage(this, x + 10, y + 10);
    };
    imageObj.src = "../tictac/img/objecto.png";
  };
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
