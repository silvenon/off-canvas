class @OffCanvas

  @DEFAULTS:
    namespace: 'off-canvas'


  constructor: (options = {}) ->
    $.extend(@, OffCanvas.DEFAULTS, options)

    @setupElements()
    @toggling()
    @escaping()


  setupElements: ->
    @container = $(".#{@namespace}")
    @toggleBtn = $(".#{@namespace}-toggle")
    console.log @toggleBtn
    @overlay = $('<div>', class: "#{@namespace}-overlay")


  toggling: ->
    @toggleBtn.on 'click touchstart', (event) =>
      event.preventDefault()
      @container.toggleClass('is-active')
      @overlay.toggle()


  escaping: ->
    @overlay.on 'click touchstart', =>
      @container.removeClass('is-active')
      @overlay.hide()
