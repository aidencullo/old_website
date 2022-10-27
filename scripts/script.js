// Moving imag;e
var face = document.createElement("img");
document.body.appendChild(face);
face.src = "media/jones.png";
face.style.width = "80px";
face.style.left = "0px";
face.style.top = "0px";

face.style.position = "absolute";

var boundX = window.innerWidth;
var boundY = window.innerHeight;

var speed = 5;
var x = 1;
var y = 1;
var posX = face.offsetLeft;
var posY = face.offsetTop;
var angle = 0;

function screensaver () {
    posX = face.offsetLeft;
    posY = face.offsetTop;

    if(posX + face.offsetWidth > boundX){
	x *= -1;
    }
    if(posY + face.offsetHeight > boundY){
	y *= -1;
    }
    if(posX < 0){
	x *= -1;
    }
    if(posY < 0){
	y *= -1;
    }

    //increase total angle of rotation of image
    angle += 5;
    
    face.style.left = posX + (speed * x) + 'px';
    face.style.top = posY + (speed * y) + 'px';
    face.style.transform = 'rotate(' + angle + 'deg)';

    if(posX <= boundX/2 && (posX + speed * x) >= boundX/2){
	face.src = "media/jones1.png";
    }
    if(posX >= boundX/2 && (posX + speed * x) <= boundX/2){
	face.src = "media/jones.png";
    }

    
}
// call every 20 milliseconds
setInterval(screensaver, 20);
