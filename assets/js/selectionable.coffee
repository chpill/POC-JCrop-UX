class Page

  events:
    click: @onclick

  constructor: ->
    @list = []
    @$el.Jcrop
      onChange:   @onChange
      onSelect:   @onSelect
      onRelease:  @onRelease

  add: (select) ->
    @list.push(select)

  onChange: (coords)=>
    @trigger 'change', coords
  
  onSelect: =>
    @trigger 'change', coords

  onRelease: =>

  onClick: (event)=>


class Selectionable extends Backbone.View
