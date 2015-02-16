# ux.js
UX help overlay plugin

Ux.js is a lightweight pure javascript plugin for showing help overlays on your website pages.
Really easy to use and fully respsonsive!

### Todo
-----------

* Optimize CSS and image files
* Feature: Make it work on dynamic content (fx sliders)

### Usage
----------

Inlcude the css file in your header tag
```css
<link rel="stylesheet" href="css/ux.css">

```

Then include the plugin in the bottom of your body
```js
<script src="js/libs/ux.js"></script>
```

Now init the plugin
```js
var overlay = new ux();
```

Set the following data attributes on the desired html tags
```html
<div>
	<p data-ux-position="left" data-ux-text="This will be the help overlay text">This is a paragraph</p>
</div>
```

### methods




### options

ux.js comes with 3 options so far
