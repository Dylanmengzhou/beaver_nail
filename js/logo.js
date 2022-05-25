var c = document.getElementById("logo");
c.width=53;
c.height=53;
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(25, 25, 23, 0, 2 * Math.PI);
ctx.moveTo(2, 25);
ctx.lineTo(48,25);
ctx.ellipse(25, 25, 10, 23, 0, 0, 2*Math.PI);
ctx.moveTo(40,8);
ctx.ellipse(25,2,22,11,0,Math.PI/4,Math.PI/1.29);
ctx.moveTo(10,41);
ctx.ellipse(25,48,22,11,0,Math.PI*1.25,1.78*Math.PI);

ctx.stroke();