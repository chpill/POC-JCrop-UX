# init of the canvas rendering context
# simple drawing to provide a background
class Canvas
  constructor: (domElement)->
    @context = domElement.getContext("2d")
    @el = domElement

  # draw some colored rectangles in the canvas...
  draw: =>
    @context.fillStyle = 'rgba(150, 130, 150, 1)'
    @context.fillRect(0, 0, this.el.width, this.el.height)

    @context.fillStyle = 'rgba(0, 0, 0, 1)'
    @context.fillRect(200, 200, 100, 150)

    @context.fillStyle = 'rgba(255, 255, 255, 1)'
    @context.fillRect(50, 100, 300, 100)

@Canvas = Canvas
