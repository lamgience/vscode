window.onload= function () {
    onDraw();}
function onDraw() {
    var ctx = document.getElementById('can').getContext('2d');
    for (var i = 6; i > 0; i--) {
        ctx.fillStyle = 'rgb(188,' + Math.floor(255 - 30 * i) + ',' + Math.floor(155 + 12 * i) + ')';
        ctx.beginPath();
        ctx.arc(100, 100, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    }
}