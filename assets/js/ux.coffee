# initializing Jcrop
# dependency: Jquery, Jcrop

$ ->

  ###
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
  ###

  group = new Group
    el: $('#page')[0]
    size: {width: 800, height: 600}
  pic = new Picture
    width: 600
    height: 400
    pos:
      x: 20
      y: 40
  select = new PictureView model: pic
  group.add(select).render()
