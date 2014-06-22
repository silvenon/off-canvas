# Off-canvas menu

## Work in progress!

This is a Sassy jQuery plugin for off-canvas content. It won't work without
Sass, that's the only sane way for me to do it.

## Example

```html
<body class="off-canvas">
  <ul class="off-canvas-menu">
    <!-- mobile navigation or what have you -->
  </ul>

  <div class="off-canvas-visible">
    <!-- visible until the breakpoint -->
  </div>

  <div class="off-canvas-hidden">
    <!-- hidden until the breakpoint -->
  </div>

  <div class="off-canvas-content">
    <!-- pushed away when the menu opens -->

    <div class="off-canvas-overlay-container">
      <!-- where the overlay will be appended -->
    </div>
  </div>
</body>
```
