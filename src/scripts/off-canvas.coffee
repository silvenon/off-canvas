class @OffCanvas

  @DEFAULTS:
    namespace: 'off-canvas'
    overlayContainer: 'content'
    onOpen: ->
    onClose: ->


  constructor: (options = {}) ->
    $.extend(@, OffCanvas.DEFAULTS, options)

    @setupElements()
    @toggling()
    @escaping()


  setupElements: ->
    @container = $(".#{@namespace}")
    @content   = $(".#{@namespace}-#{@overlayContainer}")
    @overlay = $('<div>', class: "#{@namespace}-overlay")


  toggling: ->
    $(document).on 'click', ".#{@namespace}-toggle", (event) =>
      event.preventDefault()
      @container.toggleClass('is-active')
      @overlay
        .appendTo(@content)
        .hide().fadeIn('fast')
      @onOpen()


  escaping: ->
    $(document).on 'click touchstart', ".#{@namespace}-overlay", =>
      @close()


  close: ->
    @container.removeClass('is-active')
    @overlay.fadeOut 'fast', => @overlay.remove()
    @onClose()
