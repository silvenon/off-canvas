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

      unless @container.hasClass('is-active')
        @overlay
          .appendTo(@content)
          .removeAttr('style')

        # unless the breakpoint is crossed
        # TODO make this state more stable and general
        unless @overlay.is(':hidden')
          @open(event)
        else
          @overlay.remove()
      else
        @close()


  escaping: ->
    $(document).on 'click touchstart', ".#{@namespace}-overlay", =>
      @close()


  open: (event) ->
    @container.addClass('is-active')
    @overlay.hide().fadeIn('fast')
    @onOpen(event)


  close: ->
    @container.removeClass('is-active')
    @overlay.fadeOut 'fast', => @overlay.remove()
    @onClose()
