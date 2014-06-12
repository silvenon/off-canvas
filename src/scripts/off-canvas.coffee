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
    @content   = $(".#{@namespace}-content")
    @toggleBtn = $(".#{@namespace}-toggle")
    @overlay = $('<div>', class: "#{@namespace}-overlay")


  toggling: ->
    @toggleBtn.on 'click', (event) =>
      event.preventDefault()
      @container.toggleClass('is-active')
      @overlay
        .appendTo(@content)
        .hide().fadeIn('fast')


  escaping: ->
    $(document).on 'click touchstart', ".#{@namespace}-overlay", =>
      @container.removeClass('is-active')
      @overlay.fadeOut 'fast', => @overlay.remove()
