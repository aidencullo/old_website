function getCursorPosition(event) {
    document.getElementById("circle").style.left = event.clientX;
    document.getElementById("circle").style.top = event.clientY;
    document.getElementById("x").textContent = event.clientX;
    document.getElementById("y").textContent = event.clientY;
}
