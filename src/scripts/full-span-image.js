require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import FULL_SPAN_IMAGE from '../partials/js/full-span-image.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var imageUrl, imageLink, imageAltText, padTop, padBottom;

function debounce (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

function paintSettings () {
	document.getElementById('text-input-id-image-url').value = imageUrl;
	document.getElementById('text-input-id-image-link').value = imageLink;
	document.getElementById('text-input-id-image-alt-text').value = imageAltText;
	document.getElementById('text-input-id-padding-top').value = padTop;
	document.getElementById('text-input-id-padding-bottom').value = padBottom;

}


function paintHtml() {

	imageUrl = document.getElementById('text-input-id-image-url').value;
	imageLink = document.getElementById('text-input-id-image-link').value;
	imageAltText = document.getElementById('text-input-id-image-alt-text').value;
	padTop = document.getElementById('text-input-id-padding-top').value;
	padBottom = document.getElementById('text-input-id-padding-bottom').value;

	var data = {
		imageUrl : imageUrl,
		imageLink : imageLink,
		imageAltText : imageAltText,
		padTop : padTop,
		padBottom : padBottom
	}

	sdk.setContent(FULL_SPAN_IMAGE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	imageUrl = data.imageUrl || '';
	imageLink = data.imageLink || '';
	imageAltText = data.imageAltText || '';
	padTop = data.padTop || '0';
	padBottom = data.padBottom || '0';
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});