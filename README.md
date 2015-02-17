# ux.js
UX help overlay plugin

Ux.js is a pure lightweight (5kb minfied + 85kb for imgs) javascript plugin for showing help overlays on your website pages.
Really easy to use and fully respsonsive! Making help overlays have never been more fun to do!

*Demo inc soon when some provider issue stuff have been sorted*

Todo
--------

* Optimization: Optimize CSS and image files
* Feature: Make it work on dynamic content (fx sliders)
* Issue: Help text are currently aligned for center of the element which gives an issue when element content is shorter then the element with itself (think 100% width label with short text)

Usage
--------

Put the ux folder inside your css folder and inlcude the css file in your header tag
```css
<link rel="stylesheet" href="css/ux/ux.css">
```

Then include the plugin in the bottom of your body tag
```js
<script src="js/libs/ux.js"></script>
```

Set the following data attributes on the desired html tags
```html
<p data-ux-position="left" data-ux-text="This will be the help overlay text">This is a paragraph</p>
```

Now init the plugin
```js
var overlay = new ux();
```

You can now call the method .show() on each of your pages where you have set a number of data attributes. Forexample you can put the show method in a global function can call it each time someone clicks the help icon

```js
function showOverlay() {
	overlay.show();	
}
```


Methods
--------
Currently methods

| Method		| Description										|
|---------------|---------------------------------------------------|
| .show()		| show current page help overlay					|
| .hide()		| hide current page help over						|

The plugin also fires hide() when clicked on the help over again.


Options
--------
ux.js comes with 3 optional parameters so far, that you can set as an option object when you initialize the plugin.

example
```js
var overlay = new ux({
	responsive: true,
	widthMargin: 100
});
```

option table

| Parameter		| Type		| Default	| Description																|
| ------------- | --------- | --------- | ------------------------------------------------------------------------- |
| responsive	| boolean	| false		| Set the plugin to calculate positons										|
| marginWidth	| number	| 70		| Set in pixels the left/right distance from the help box to the the element|
| marginTop		| number	| 27		| Set in pixels the top/bottom distance from the help box to the the element|


UX positions
--------

Avaible positions for `data-ux-position`
```html
top
topLeft
topRight
right
bottom
bottomRight
bottomLeft
left
```

When responsive is set to true it will automatically calculate the distances on the left and right positions and convert them to topLeft and topRight if there is not enough space on the sides for the help text


Support
--------
* Tested and working in Chrome 40.0.2
* Tested and working in Firefox 35.0.1
* Tested and working in Internet Explorer 9+

The plugin is supported for IE 9 but obviously without the fancy transitions as it is not supported by IE 9

I do not plan to support it lower than that since IE 8 is a dying browser and Microsoft have stoped supporting XP which were using IE 8.

More testing and feedback is allways welcome!
