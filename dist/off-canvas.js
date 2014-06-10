(function() {
  this.OffCanvas = (function() {
    OffCanvas.DEFAULTS = {
      namespace: 'off-canvas'
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
      this.toggleBtn = $("." + this.namespace + "-toggle");
      return this.overlay = $('<div>', {
        "class": "" + this.namespace + "-overlay"
      });
    };

    OffCanvas.prototype.toggling = function() {
      return this.toggleBtn.on('click', (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.container.toggleClass('is-active');
          return _this.overlay.appendTo(_this.container);
        };
      })(this));
    };

    OffCanvas.prototype.escaping = function() {
      return $(document).on('click touchstart', "." + this.namespace + "-overlay", (function(_this) {
        return function() {
          _this.container.removeClass('is-active');
          return _this.overlay.remove();
        };
      })(this));
    };

    return OffCanvas;

  })();

}).call(this);
