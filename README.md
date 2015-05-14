# ux.js
UX help overlay plugin

Ux.js is a pure lightweight (7kb minfied + 85kb for imgs) javascript plugin for showing help overlays on your website pages.
Really easy to use and fully responsive! Making help overlays have never been more fun to do!

Tjek out the demo [here](http://ux.lyngbach.com/)


Todo
--------
* Optimization: Optimize CSS and the arrow img files
* Feature: Make it work on dynamic content (fx sliders)


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

Now initialize the plugin
```js
var overlay = new ux();
```

You can now call the method .show() on each of your pages where you have a set of ux data attributes. For example you can put the show method in a global function and call it each time someone clicks a help icon

```js
function showOverlay() {
	overlay.show();	
}
```


Options
--------
ux.js comes with a few optional parameters so far that you can set as an option object when you initialize the plugin.

example
```js
var overlay = new ux({
	responsive: true,
	widthMargin: 100
});
```

Available options

| Parameter		| Type		| Default	| Description																|
| ------------- | --------- | --------- | ------------------------------------------------------------------------- |
| responsive	| boolean	| false		| Auto calculating and moving the tooltips if no room on the sides	|
| widthMargin	| number	| 70		| Set in pixels the distance from the tooltip box to the the element for top, right, bottom & left positions			|
| topMargin		| number	| 27		| Set in pixels the distance from the tooltip box to the the element for topLeft, topRight, bottomRight & bottomLeft positions		|
| slideMode	| boolean	| false		| 	Set to true to allow multiple tooltips within a horizontal slider. This will hide the tooltips that are outside the window scre	 	|


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

When responsive is set to true it will automatically calculate the distances on the left and right of the element and positioning the tooltip accordingly compared to the screen.


Methods
--------
Available methods

| Method		| Description										|
|---------------|---------------------------------------------------|
| .show()		| Show current page help overlay					|
| .hide()		| Hide current page help over						|

The plugin also fires hide() when clicked on the help overlay again.


Support
--------
* Tested and working in Chrome 40.0.2
* Tested and working in Firefox 35.0.1
* Tested and working in Internet Explorer 9+

The plugin is supported for IE 9 but obviously without the fancy transitions as it's not supported by IE 9

I do not plan to support it lower than that since IE 8 is a dying browser and Microsoft have stoped supporting XP which were using IE 8.

More testing and feedback is allways welcome!
