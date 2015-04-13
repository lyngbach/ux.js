//
// ux.js v0.2.1
//
// https://github.com/lyngbach/ux.js
//
// Copyright 2015, Rune Lyngbach Jensen
// Email: lyngbachjensen@gmail.com
//
// licensed under MIT

var ux = function (options) {
	'use strict';

	var resizeTimeout;
	
	this.options = options || {};
	this.options.widthMargin = this.options.widthMargin || 70;
	this.options.topMargin = this.options.topMargin || 27;
	
	this.onBrowserResize = function () {
		var that = this;

		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function () { that.reAdjust(); }, 150);
	};

	window.onresize = this.onBrowserResize.bind(this);
};

ux.prototype.show = function () {
	'use strict';

	var attrElements = document.querySelectorAll('[data-ux-text]'),
		uxOverlay,
		i;
	
	for (i = 0; i < attrElements.length; i += 1) {
		this.addTooltip(attrElements[i]);	
	}

	uxOverlay = document.createElement('div');
	uxOverlay.className = 'ux_overlay';
	uxOverlay.id = 'ux_overlay';
	uxOverlay.onclick = this.hide;

	document.body.appendChild(uxOverlay);

	setTimeout(function () { uxOverlay.className += ' fade'; }, 50);
};

ux.prototype.hide = function () {
	'use strict';

	var oldElements = document.querySelectorAll('.ux_tooltip'),
		uxOverlay = document.getElementById('ux_overlay'),
		d;

	for (d = 0; d < oldElements.length; d += 1) {
		oldElements[d].parentNode.removeChild(oldElements[d]);
	}

	uxOverlay.className = 'ux_overlay';

	setTimeout(function () {	uxOverlay.parentNode.removeChild(uxOverlay); }, 300);
};

ux.prototype.visible = function () {
	'use strict';

	var visible = document.getElementById('ux_overlay');

	return visible;
};

ux.prototype.addTooltip = function (element) {
	'use strict';
	
	var tooltipBox = document.createElement('div');

	tooltipBox.innerHTML = element.getAttribute('data-ux-text');
	if (element.getAttribute('data-ux-original') === null) {
		element.setAttribute('data-ux-original', element.getAttribute('data-ux-position'));	
	}
	tooltipBox.className = 'ux_tooltip';
	document.body.appendChild(tooltipBox);

	this.positionTooltip(element, tooltipBox);
};

ux.prototype.positionTooltip = function (element, tooltipBox) {
	'use strict';
	
	if (tooltipBox % 1 === 0) {
		tooltipBox = document.querySelectorAll('.ux_tooltip')[tooltipBox];
	}

	switch (this.getPosition(element)) {
		case 'top':
			this.responsive(element, tooltipBox);
			break;
		case 'topLeft':
			this.responsive(element, tooltipBox);
			break;
		case 'topRight':
			this.responsive(element, tooltipBox);
			break;
		case 'right':
			this.responsive(element, tooltipBox);
			break;
		case 'bottom':
			this.responsive(element, tooltipBox);
			break;
		case 'bottomRight':
			this.responsive(element, tooltipBox);
			break;
		case 'bottomLeft':
			this.responsive(element, tooltipBox);
			break;
		case 'left':
			this.responsive(element, tooltipBox);
			break;
	}
};

ux.prototype.getPosition = function (element) {
	'use strict';

	return element.getAttribute('data-ux-position') || 'bottom';
};

ux.prototype.setPosition = function (element, tooltipBox, coords) {
	'use strict';
	
	switch (element.getAttribute('data-ux-position')) {
		case 'top':
			tooltipBox.className = 'ux_tooltip ux_top';
			tooltipBox.style.left = coords.x + (element.offsetWidth / 2) - (tooltipBox.offsetWidth / 2) + 'px';
			tooltipBox.style.top = coords.y - tooltipBox.offsetHeight - this.options.widthMargin + 'px';
			break;
		case 'topLeft':
			tooltipBox.className = 'ux_tooltip ux_top_left';
			tooltipBox.style.left = coords.x - tooltipBox.offsetWidth + (element.offsetWidth / 2) - this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y - (tooltipBox.offsetHeight) - this.options.topMargin + 'px';
			break;
		case 'topRight':
			tooltipBox.className = 'ux_tooltip ux_top_right';
			tooltipBox.style.left = coords.x + (element.offsetWidth / 2) + this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y - (tooltipBox.offsetHeight) - this.options.topMargin + 'px';
			break;
		case 'right':
			tooltipBox.className = 'ux_tooltip ux_right';
			tooltipBox.style.left = coords.x + (element.offsetWidth) + this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y + ((element.offsetHeight - tooltipBox.offsetHeight) / 2) + 'px';
			break;
		case 'bottom':
			tooltipBox.className = 'ux_tooltip ux_bottom';
			tooltipBox.style.left = coords.x + (element.offsetWidth / 2) - (tooltipBox.offsetWidth / 2) + 'px';
			tooltipBox.style.top = coords.y + element.offsetHeight + this.options.widthMargin + 'px';
			break;
		case 'bottomRight':
			tooltipBox.className = 'ux_tooltip ux_bottom_right';
			tooltipBox.style.left = coords.x + (element.offsetWidth / 2) + this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y + element.offsetHeight + this.options.topMargin + 'px';
			break;
		case 'bottomLeft':
			tooltipBox.className = 'ux_tooltip ux_bottom_left';
			tooltipBox.style.left = coords.x - tooltipBox.offsetWidth + (element.offsetWidth / 2) - this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y + element.offsetHeight + this.options.topMargin + 'px';
			break;
		case 'left':
			tooltipBox.className = 'ux_tooltip ux_left';
			tooltipBox.style.left = coords.x - (tooltipBox.offsetWidth) - this.options.widthMargin + 'px';
			tooltipBox.style.top = coords.y + ((element.offsetHeight - tooltipBox.offsetHeight) / 2) + 'px';
			break;
	}
};

ux.prototype.getCoordinates = function (element, tooltipBox) {
	'use strict';

	var xPosition = 0,
		yPosition = 0,
		searchElement = element;

	while (searchElement) {
		xPosition += (searchElement.offsetLeft - searchElement.scrollLeft + searchElement.clientLeft);
		yPosition += (searchElement.offsetTop - searchElement.scrollTop + searchElement.clientTop);
		searchElement = searchElement.offsetParent;
	}

	// adjusting for mobile view
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		yPosition += window.pageYOffset;
	}
	
	return this.setPosition(element, tooltipBox, { x: xPosition, y: yPosition });		
};

ux.prototype.getOffset = function (element) {
	'use strict';

	var xPosition = 0,
		yPosition = 0,
		searchElement = element;

	while (searchElement) {
		xPosition += (searchElement.offsetLeft - searchElement.scrollLeft + searchElement.clientLeft);
		yPosition += (searchElement.offsetTop - searchElement.scrollTop + searchElement.clientTop);
		searchElement = searchElement.offsetParent;
	}

	return { x: xPosition, y: yPosition };
};

ux.prototype.responsive = function (element, tooltipBox) {
	'use strict';

	var that = this;

	switch (element.getAttribute('data-ux-position')) {
		case 'top':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'topLeft':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'topRight':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'right':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'bottom': 
			this.getCoordinates(element, tooltipBox);
			break;
		case 'bottomRight':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'bottomLeft':
			this.getCoordinates(element, tooltipBox);
			break;
		case 'left':
			this.getCoordinates(element, tooltipBox);
			break;
	}
	
	setTimeout(function () {
		if (that.options.responsive) {
			switch (element.getAttribute('data-ux-original')) {
				case 'left':
				case 'topLeft':
				case 'bottomLeft':
					if (that.getOffset(element).x < (tooltipBox.offsetWidth + that.options.widthMargin)) {
						var searchElement = element, 
							xPosition = 0;

						while (searchElement) {
							xPosition += (searchElement.offsetLeft - searchElement.scrollLeft + searchElement.clientLeft);
							searchElement = searchElement.offsetParent;
						}
						
						if ((element.offsetWidth / 2 + xPosition) < 100 + that.options.widthMargin) {
							if (window.innerWidth - (element.offsetWidth / 2 + xPosition) < 110 + that.options.widthMargin) {
								if (element.getAttribute('data-ux-original') === 'bottomLeft') {
									element.setAttribute('data-ux-position', 'bottom');
								} else {
									element.setAttribute('data-ux-position', 'top');
								}
							} else {
								if (element.getAttribute('data-ux-original') === 'bottomLeft') {
									element.setAttribute('data-ux-position', 'bottomRight');
								} else {
									element.setAttribute('data-ux-position', 'topRight');
								}
							}
						} else if ((element.offsetWidth / 2 + xPosition) < (tooltipBox.offsetWidth + that.options.widthMargin) ) {
							if (element.getAttribute('data-ux-original') === 'bottomLeft') {
								element.setAttribute('data-ux-position', 'bottom');
							} else {
								element.setAttribute('data-ux-position', 'top');
							}
						}  else {
							if (element.getAttribute('data-ux-original') === 'bottomLeft') {
								element.setAttribute('data-ux-position', 'bottomLeft');
							} else {
								element.setAttribute('data-ux-position', 'topLeft');
							}
						}
						
					} else {
						element.setAttribute('data-ux-position', element.getAttribute('data-ux-original'));
					}
					break;
				case 'right':
				case 'topRight':
				case 'bottomRight':
					if (window.innerWidth - (that.getOffset(element).x + element.offsetWidth) < (110 + that.options.widthMargin)) {
						
						if (window.innerWidth - (that.getOffset(element).x + (element.offsetWidth / 2)) > (110 + that.options.widthMargin)) {
							if (element.getAttribute('data-ux-original') === 'bottomRight') {
								element.setAttribute('data-ux-position', 'bottomRight');
							} else {
								element.setAttribute('data-ux-position', 'topRight');	
							}
						} else {
							if ((element.offsetWidth / 2 + that.getOffset(element).x) < tooltipBox.offsetWidth + that.options.widthMargin) {
								if (element.getAttribute('data-ux-original') === 'bottomRight') {
									element.setAttribute('data-ux-position', 'bottom');
								} else {
									element.setAttribute('data-ux-position', 'top');
								}
							} else {
								if (element.getAttribute('data-ux-original') === 'bottomRight') {
									element.setAttribute('data-ux-position', 'bottomLeft');
								} else {
									element.setAttribute('data-ux-position', 'topLeft');	
								}
								
							}
						}

					} else {
						element.setAttribute('data-ux-position', element.getAttribute('data-ux-original'));
					}
					setTimeout(function() {
						if ((element.offsetWidth / 2 + that.getOffset(element).x) < tooltipBox.offsetWidth + that.options.widthMargin) {
							if (element.getAttribute('data-ux-original') === 'bottomRight') {
								element.setAttribute('data-ux-position', 'bottom');
							} else {
								element.setAttribute('data-ux-position', 'top');	
							}
						}

						that.getCoordinates(element, tooltipBox);
					}, 300);
					break;
			}
		} 
		
		that.getCoordinates(element, tooltipBox);
	}, 300);
};

ux.prototype.reAdjust = function () {
	'use strict';
	
	if (this.visible() !== null) {
		var attrElements = document.querySelectorAll('[data-ux-text]'),
			i;
		
		for (i = 0; i < attrElements.length; i += 1) {
			this.positionTooltip(attrElements[i], i, true);	
		}
	}
};