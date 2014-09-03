# Off-Canvas

## Work in progress!

This is a Sassy JavaScript library for off-canvas content. Install it with
Bower:

```sh
$ bower install --save off-canvas
```

It depends on [Eventie][eventie] and [Classie][classie], so if you're not
installing Off-Canvas via Bower, download those as well.

## Example

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

[eventie]: https://github.com/desandro/eventie
[classie]: https://github.com/desandro/classie
