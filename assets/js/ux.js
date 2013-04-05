// initializing Jcrop
// dependency: Jquery, Jcrop

jQuery(function($){

  var jcrop_api;

  $('#cv').Jcrop({
    onChange:   showCoords,
    onSelect:   showCoords,
    onRelease:  clearCoords
  },function(){
    jcrop_api = this;
  });


});

// print the coordinates when there is a selection
function showCoords(c)
{

  $('#x').html(c.x);
  $('#y').html(c.y);
  $('#width').html(c.w);
  $('#height').html(c.h);

}

// clear the coordinates when the selection disapear
function clearCoords()
{
  
  $('.coordinate').val('NA');

}




