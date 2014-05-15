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
      console.log(this.toggleBtn);
      return this.overlay = $('<div>', {
        "class": "" + this.namespace + "-overlay"
      });
    };

    OffCanvas.prototype.toggling = function() {
      return this.toggleBtn.on('click touchstart', (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.container.toggleClass('is-active');
          return _this.overlay.toggle();
        };
      })(this));
    };

    OffCanvas.prototype.escaping = function() {
      return this.overlay.on('click touchstart', (function(_this) {
        return function() {
          _this.container.removeClass('is-active');
          return _this.overlay.hide();
        };
      })(this));
    };

    return OffCanvas;

  })();

}).call(this);
