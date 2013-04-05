// init of the canvas rendering context
// simple drawing to provide a background


// waiting for the dom to be ready
$('document').ready(function(){

  var cv = new Canvas("cv");
  cv.draw();
  
});

(function (global) {

  // get and initialize the canvas for 2D rendering
  // domId is the the id of the canvas in the DOM
  function Canvas (domId) {

    this.el = document.getElementById(domId);
    this.context = this.el.getContext("2d");

  }

  // draw some colored rectangles in the canvas...
  Canvas.prototype.draw = function () {

    this.context.fillStyle = 'rgba(150, 130, 150, 1)';
    this.context.fillRect(0, 0, this.el.width, this.el.height);

    this.context.fillStyle = 'rgba(0, 0, 0, 1)';
    this.context.fillRect(200, 200, 100, 150);

    this.context.fillStyle = 'rgba(255, 255, 255, 1)';
    this.context.fillRect(50, 100, 300, 100);

  };

  global.Canvas = Canvas;

})(this);

