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
    @overlay = $('<div>', class: "#{@namespace}-overlay")


  toggling: ->
    @toggleBtn.on 'click', (event) =>
      event.preventDefault()
      @container.toggleClass('is-active')
      @overlay.appendTo(@container)


  escaping: ->
    $(document).on 'click touchstart', ".#{@namespace}-overlay", =>
      @container.removeClass('is-active')
      @overlay.remove()
