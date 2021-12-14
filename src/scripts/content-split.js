require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import CONTENT_SPLIT from '../partials/js/content-split.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var title, subtitle, description, buttonUrl, buttonText, imageUrl, imageDestinationUrl, imageAltText, imageAlignmentRight, backgroundColor, titleColor, subtitleColor;

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
	document.getElementById('text-input-id-0').value = title;
	document.getElementById('text-input-id-subtitle').value = subtitle;
	document.getElementById('text-input-id-1').value = description;
	document.getElementById('text-input-id-2').value = buttonText;
	document.getElementById('text-input-id-3').value = buttonUrl;
	document.getElementById('text-input-id-4').value = imageUrl;
	document.getElementById('text-input-id-5').value = imageDestinationUrl;
	document.getElementById('text-input-id-6').value = imageAltText;
	document.getElementById('checkbox-unique-id-73').checked = imageAlignmentRight;
	document.getElementById('text-input-id-background-color').value = backgroundColor;
	document.getElementById('text-input-id-subtitle-color').value = subtitleColor;
	document.getElementById('text-input-id-title-color').value = titleColor;
}


function paintHtml() {
	title = document.getElementById('text-input-id-0').value;
	subtitle = document.getElementById('text-input-id-subtitle').value;
	description = document.getElementById('text-input-id-1').value;
	buttonText = document.getElementById('text-input-id-2').value;
	buttonUrl = document.getElementById('text-input-id-3').value;
	imageUrl = document.getElementById('text-input-id-4').value;
	imageDestinationUrl = document.getElementById('text-input-id-5').value;
	imageAltText = document.getElementById('text-input-id-6').value;
	imageAlignmentRight = document.getElementById('checkbox-unique-id-73').checked;
	backgroundColor = document.getElementById('text-input-id-background-color').value;
	subtitleColor = document.getElementById('text-input-id-subtitle-color').value;
	titleColor = document.getElementById('text-input-id-title-color').value;

	var data = {
		title: title,
		subtitle: subtitle,
		description: description,
		buttonText: buttonText,
		buttonUrl: buttonUrl,
		imageUrl: imageUrl,
		imageDestinationUrl: imageDestinationUrl,
		imageAltText: imageAltText,
		imageAlignmentRight: imageAlignmentRight,
		backgroundColor: backgroundColor,
		subtitleColor: subtitleColor,
		titleColor: titleColor
	}

	sdk.setContent(CONTENT_SPLIT(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	title = data.title || 'Lorem ipsum dolor sit amet';
	subtitle = data.subtitle || '';
	description = data.description || '';
	buttonText = data.buttonText || '';
	buttonUrl = data.buttonUrl || '';
	imageUrl = data.imageUrl || 'https://via.placeholder.com/260x220';
	imageDestinationUrl = data.imageDestinationUrl || '';
	imageAltText = data.imageAltText || '';
	imageAlignmentRight = data.imageAlignmentRight || false;
	backgroundColor = data.backgroundColor || '#000000';
	subtitleColor = data.subtitleColor || '#C7C7C7';
	titleColor = data.titleColor || '#FFFFFF';
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});