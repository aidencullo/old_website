var ball = document.createElement("img");
document.body.appendChild(ball);
ball.src = "media/jones.png";
ball.style.width = "80px";
ball.style.left = "0px";
ball.style.top = "0px";

ball.style.position = "absolute";

var boundX = window.innerWidth;
var boundY = window.innerHeight;

var speed = 10;
var x = 1;
var y = 1;
var posX = ball.offsetLeft;
var posY = ball.offsetTop;

function screensaver () {
    posX = ball.offsetLeft;
    posY = ball.offsetTop;

    if(posX + ball.offsetWidth > boundX){
	x *= -1;
    }
    if(posY + ball.offsetHeight > boundY){
	y *= -1;
    }
    if(posX < 0){
	x *= -1;
    }
    if(posY < 0){
	y *= -1;
    }
    
    ball.style.left = posX + (speed * x) + 'px';
    ball.style.top = posY + (speed * y) + 'px';
}
setInterval(screensaver, 20);
