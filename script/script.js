function getCursorPosition(event) {
    let x = event.clientX
    let y = event.clientY
    let rdx = Math.floor(x/100)
    rdx *= 100
    let rdy = Math.floor(y/100)
    rdy *= 100
    document.getElementById("squaree").style.left = rdx
    document.getElementById("squaree").style.top = rdy
    document.getElementById("x").textContent = x;
    document.getElementById("y").textContent = y;
    document.getElementById("rdx").textContent = rdx;
    document.getElementById("rdy").textContent = rdy;

}
