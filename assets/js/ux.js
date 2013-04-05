// initializing Jcrop
// dependency: Jquery, Jcrop

jQuery(function($){

  var jcropApi;

  $('#cv').Jcrop({
    onChange:   showCoords,
    onSelect:   showCoords,
    onRelease:  clearCoords
  }, function() {
    jcropApi = this;
  });

  // print the coordinates when there is a selection
  var coordEl = {
    x: $('#x'),
    y: $('#y'),
    width: $('#width'),
    height: $('#height')
  };

  function showCoords(coord) {
    console.log(arguments);
    coordEl.x.html(coord.x);
    coordEl.y.html(coord.y);
    coordEl.width.html(coord.w);
    coordEl.height.html(coord.h);
  }

  // clear the coordinates when the selection disapear
  function clearCoords() {
    $('.coordinate').html('NA');
  }

});
