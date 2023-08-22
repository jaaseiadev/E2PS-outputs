function line(canvasId,x1, y1, x2, y2){
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(canvasId, x , y, radius, color){
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill()
    ctx.stroke;

}

function rectangle(canvasId, x , y, x2, y2, linewidth ,color){
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(x, y, x2, y2)
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}