// init of the canvas rendering context
// simple drawing to provide a background

// waiting for the dom to be ready
$('document').ready(function(){
  //console.log(document.getElementById('cv'));
  initCanvas();
});

var canvas, context;

// initialize rendering context
function initCanvas(){

  canvas = document.getElementById("cv");
  //console.log(canvas);

  context = canvas.getContext("2d");

  render();
}

// render some rectangles to fill the canvas...
function render(){

  context.fillStyle = 'rgba(150, 130, 150, 1)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'rgba(0, 0, 0, 1)';
  context.fillRect(200, 200, 100, 150);

  context.fillStyle = 'rgba(255, 255, 255, 1)';
  context.fillRect(50, 100, 300, 100);

}
