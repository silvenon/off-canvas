# Off-Canvas

## Work in Progress!

This is a [Sass][sass]y JavaScript library for off-canvas content. Install it with
Bower:

```sh
$ bower install --save off-canvas
```

It depends on [Lo-Dash][lodash], so if you're not installing Off-Canvas via
Bower, download that as well.

## Markup

Required and optional classes you should use. The `off-canvas` namespace can be
changed by editing the `$off-canvas-namespace` Sass variable and passing that
same value as an option when initializing Off-Canvas.

```html
<body class="off-canvas">
  <a class="off-canvas-toggle" href="#">
    <!-- toggles the off-canvas menu -->
    <!-- you can have multiple of these -->
    <!-- for example a close button in the off-canvas menu -->
  </a>

  <ul class="off-canvas-menu">
    <!-- mobile navigation or what have you -->
  </ul>

  <div class="off-canvas-fixed">
    <!-- a fixed element which should stay outside .off-canvas-content -->
    <!-- usually the good ol' desktop navigation -->
  </div>

  <div class="off-canvas-visible">
    <!-- visible until the breakpoint -->
  </div>

  <div class="off-canvas-hidden">
    <!-- hidden until the breakpoint -->
  </div>

  <div class="off-canvas-content">
    <!-- pushed away when the menu opens -->

    <div class="off-canvas-overlay-container">
      <!-- where the overlay will be appended (optional) -->
      <!-- if omitted, .off-canvas-content will be used -->
    </div>
  </div>
</body>
```

## Styles

The default configuration:

```scss
// prefix of your classes, for example .off-canvas-menu
$off-canvas-namespace:            "off-canvas" !default;

// display style of the menu, more styles coming soon...
$off-canvas-style:                normal !default;

// z-index of the menu, sometimes necessary
$off-canvas-zindex:               100 !default;

// position of the menu
$off-canvas-position:             top !default;

// width of the menu, if the position is
// top or bottom, leave this at auto
$off-canvas-width:                auto !default;

// height of the menu, if the position is
// left or right, leave this at auto
$off-canvas-height:               auto !default;

// animation duration of opening the menu
$off-canvas-transition-duration:  .2s !default;

// at which point the menu activates or deactivates
$off-canvas-breakpoint:           to 480px !default;

// whether an overlay will appear,
// which the user can click to close the menu
$off-canvas-overlay:              true !default;
```

## Initialization

When you're done configuring:

```js
var offCanvas = new OffCanvas({
  // sets the namespace of the classes
  // (optional, defaults to 'off-canvas')
  namespace: 'off-canvas',

  // callback when the menu opens
  // (optional)
  onOpen: function() { /* ... */ },

  // callback when the menu closes
  // (optional)
  onClose: function() { /* ... */ }
});

// closes the menu if it's open
// opens it if it's closed
offCanvas.toggle();

// opens the menu
offCanvas.open();

// closes the menu
offCanvas.close();
```

[sass]:    http://sass-lang.com
[eventie]: https://github.com/desandro/eventie
[classie]: https://github.com/desandro/classie
[lodash]:  https://github.com/lodash/lodash
