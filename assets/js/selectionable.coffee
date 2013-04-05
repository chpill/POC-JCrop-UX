class Group extends Backbone.View

  initialize: ->
    @list = []

  add: (select) ->
    @list.push select
    @

  render: =>
    @$el.css
      width:  @options.size.width + 'px'
      height:  @options.size.height + 'px'
      border: 'solid'
    for select in @list
      @$el.append select.render().el
    @

class Selectionable extends Backbone.View

  initialize: ->
    @$el = $ '<div></div>'
    @el = @$el[0]

  events:
    click: 'select'

  select: (event)=>
    self = @
    @$content.Jcrop
      onChange:   @onChange
      onSelect:   @onSelect
      onRelease:  @onRelease
    , -> self.setCrop @
    @

  setCrop: (@_crop)->
    @_crop.setSelect [0, 0, @model.get('width'), @model.get('height')]

  render: ->
    @$el.css
      position:'relative'
      top: @model.get('pos').x
      left: @model.get('pos').y
    @$content.attr
      width: "#{@model.get 'width'}px"
      height: "#{@model.get 'height'}px"
    @$el.append @$content
    @

  onChange: (coords)=>
    @trigger 'change', coords
  
  onSelect: (coords)=>
    @trigger 'select', coords

  onRelease: (coords)=>
    @trigger 'release', coords

class PictureView extends Selectionable

  render: ->
    @$canvas = $ '<canvas></canvas>'
    @canvas = new Canvas @$canvas[0]
    @$content = @$canvas
    _.delay @canvas.draw
    super()
  

class Picture extends Backbone.Model

@Group = Group
@PictureView = PictureView
@Picture = Picture
