# Off-Canvas

This is a [Sass][sass]y JavaScript library for off-canvas content. Install it with
Bower:

```sh
$ bower install --save off-canvas
```

## Markup

Required and optional classes you should use. The `oc` namespace can be
changed by editing the `$off-canvas-namespace` Sass variable and passing that
same value as an option when initializing Off-Canvas.

```html
<body class="oc">
  <a class="oc-toggle" href="#">
    <!-- toggles the off-canvas menu -->
    <!-- you can have multiple of these -->
    <!-- for example a close button in the off-canvas menu -->
  </a>

  <ul class="oc-menu">
    <!-- mobile navigation or what have you -->
  </ul>

  <div class="oc-fixed">
    <!-- a fixed element which should stay outside .oc-content -->
    <!-- usually the good ol' desktop navigation -->
  </div>

  <div class="oc-visible">
    <!-- visible until the breakpoint -->
  </div>

  <div class="oc-hidden">
    <!-- hidden until the breakpoint -->
  </div>

  <div class="oc-content">
    <!-- pushed away when the menu opens -->

    <div class="oc-overlay-container">
      <!-- where the overlay will be appended (optional) -->
      <!-- if omitted, .oc-content will be used -->
    </div>
  </div>
</body>
```

## Styles

The default configuration:

```scss
// prefix of your classes, for example .oc-menu
$oc-namespace:            "oc" !default;

// display style of the menu, more styles coming soon...
$oc-style:                normal !default;

// z-index of the menu, sometimes necessary
$oc-zindex:               100 !default;

// position of the menu
$oc-position:             top !default;

// width of the menu, if the position is
// top or bottom, leave this at auto
$oc-width:                auto !default;

// height of the menu, if the position is
// left or right, leave this at auto
$oc-height:               auto !default;

// animation duration of opening the menu
$oc-transition-duration:  .2s !default;

// at which point the menu activates or deactivates
$oc-breakpoint:           to 480px !default;

// whether an overlay will appear,
// which the user can click to close the menu
$oc-overlay:              true !default;
```

## Initialization

When you're done configuring:

```js
var offCanvas = new OffCanvas({
  // sets the namespace of the classes
  // (optional, defaults to 'oc')
  namespace: 'oc',

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
