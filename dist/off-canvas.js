(function() {
  this.OffCanvas = (function() {
    OffCanvas.DEFAULTS = {
      namespace: 'off-canvas',
      overlayContainer: 'content',
      onOpen: function() {},
      onClose: function() {}
    };

    function OffCanvas(options) {
      if (options == null) {
        options = {};
      }
      $.extend(this, OffCanvas.DEFAULTS, options);
      this.setupElements();
      this.toggling();
      this.escaping();
    }

    OffCanvas.prototype.setupElements = function() {
      this.container = $("." + this.namespace);
      this.content = $("." + this.namespace + "-" + this.overlayContainer);
      return this.overlay = $('<div>', {
        "class": "" + this.namespace + "-overlay"
      });
    };

    OffCanvas.prototype.toggling = function() {
      return $(document).on('click', "." + this.namespace + "-toggle", (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.overlay.appendTo(_this.content).show();
          if (!_this.overlay.is(':hidden')) {
            return _this.open(event);
          } else {
            return _this.overlay.remove();
          }
        };
      })(this));
    };

    OffCanvas.prototype.escaping = function() {
      return $(document).on('click touchstart', "." + this.namespace + "-overlay", (function(_this) {
        return function() {
          return _this.close();
        };
      })(this));
    };

    OffCanvas.prototype.open = function(event) {
      this.container.addClass('is-active');
      this.overlay.hide().fadeIn('fast');
      return this.onOpen(event);
    };

    OffCanvas.prototype.close = function() {
      this.container.removeClass('is-active');
      this.overlay.fadeOut('fast', (function(_this) {
        return function() {
          return _this.overlay.remove();
        };
      })(this));
      return this.onClose();
    };

    return OffCanvas;

  })();

}).call(this);
