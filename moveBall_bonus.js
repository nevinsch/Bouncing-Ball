//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;
//conditionals--Be sure to put properties in both
//if and else categories.
  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    velocity = 10;
    ball.style.width = 350 + "px";
    ball.style.height = 400 + "px";
    ball.style.background = "rgb(206,22,32)";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    velocity = 50;
    ball.style.width = 50 + "px";
    ball.style.height = 50 + "px";
    ball.style.background = "rgb(0, 119, 190)";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
    ball.style.background = "orange";
    ball.style.width = 250 + "px";
    ball.style.height = 250 + "px";
  }
}

setInterval(moveBall, 100);