  window.onload= function () {
   ondraw();
  }
  function ondraw(){
      var c = document.getElementById("can");
      var ctx = c.getContext("2d");
      ctx.strokeStyle = "purple";
      /*  ctx.beginPath();*/
      for (var i = 0; i < 9; i++) {
          ctx.beginPath();//如何不放在循环体内会出现连体圆
          ctx.arc(200, 200, 30 + i * 5, 0, Math.PI * 2, true);
          ctx.stroke();
      }
      ctx.closePath();


  }
