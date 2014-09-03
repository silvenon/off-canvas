window.OffCanvas = function(options) {
  var self = this;
      options = options || {},
      ns = options.namespace || '.off-canvas';

  this.container = document.querySelector(ns);
  this.content = document.querySelector(ns + '-content');
  this.overlay = document.createElement('div');

  classie.add(this.overlay, ns.substr(1) + '-overlay');
  eventie.bind(this.overlay, 'click', function() { self.close(); });

  this.overlayContainer = document.querySelector(ns + '-overlay-container');

  if (this.overlayContainer === null) {
    this.overlayContainer = this.content;
  }

  this.toggleBtn = document.querySelectorAll(ns + '-toggle');

  for (var i = 0; i < this.toggleBtn.length; i++) {
    eventie.bind(this.toggleBtn[i], 'click', function(event) {
      event.preventDefault();
      self.toggle(event);
    });
  }

  this.onOpen = options.onOpen || function() { };
  this.onClose = options.onClose || function() { };
};

OffCanvas.prototype.toggle = function(event) {
  // if it's already active
  if (classie.has(this.container, 'is-active')) {
    this.close();
    return;
  }

  this.overlayContainer.appendChild(this.overlay);
  this.overlay.removeAttribute('style');

  // if the breakpoint is crossed
  // TODO make this state more stable and general
  if (getComputedStyle(this.overlay)['display'] === 'none') {
    this.overlayContainer.removeChild(this.overlay);
  } else {
    this.open(event);
  }
}

OffCanvas.prototype.open = function(event) {
  classie.add(this.container, 'is-active');
  this.overlay.style.display = '';
  this.onOpen(event);
};

OffCanvas.prototype.close = function() {
  classie.remove(this.container, 'is-active');
  this.overlay.style.display = 'none';
  this.overlayContainer.removeChild(this.overlay);
  this.onClose();
};
