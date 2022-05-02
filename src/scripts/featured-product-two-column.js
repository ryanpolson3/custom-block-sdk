require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import FEATURED_PRODUCT_TWO_COLUMN from '../partials/js/featured-product-two-column.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var imageUrl, imageUrl2, productLink, productLink2, imageAltText, imageAltText2, title, titleFontSize, titleFontWeight, titleLineHeight, titleFontColor, title2, title2FontSize, title2FontWeight, titleLineHeight2, title2FontColor, subtitle, subtitleFontSize, subtitleFontWeight, subtitleLineHeight, subtitleFontColor, subtitle2, subtitle2FontSize, subtitle2FontWeight, subtitleLineHeight2, subtitle2FontColor, buttonText, buttonText2, buttonUrl, buttonUrl2, centerAlign, padTop, padBottom;

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
	document.getElementById('checkbox-id-center-align').checked = centerAlign;
	document.getElementById('text-input-id-image-url').value = imageUrl;
	document.getElementById('text-input-id2-image-url').value = imageUrl2;
	document.getElementById('text-input-id-image-alt-text').value = imageAltText;
	document.getElementById('text-input-id2-image-alt-text').value = imageAltText2;
	document.getElementById('text-input-id-product-link').value = productLink;
	document.getElementById('text-input-id2-product-link').value = productLink2;
	document.getElementById('text-input-id-subtitle').value = subtitle;
	document.getElementById('text-input-id-subtitle-font-size').value = subtitleFontSize;
	document.getElementById('text-input-id-subtitle-font-weight').value = subtitleFontWeight;
	document.getElementById('text-input-id2-subtitle').value = subtitle2;
	document.getElementById('text-input-id2-subtitle-font-size').value = subtitle2FontSize;
	document.getElementById('text-input-id2-subtitle-font-weight').value = subtitle2FontWeight;
	document.getElementById('text-input-id-title').value = title;
	document.getElementById('text-input-id-title-font-size').value = titleFontSize;
	document.getElementById('text-input-id-title-font-weight').value = titleFontWeight;
	document.getElementById('text-input-id2-title').value = title2;
	document.getElementById('text-input-id2-title-font-size').value = title2FontSize;
	document.getElementById('text-input-id2-title-font-weight').value = title2FontWeight;
	document.getElementById('text-input-id-button-label').value = buttonText;
	document.getElementById('text-input-id2-button-label').value = buttonText2;
	document.getElementById('text-input-id-button-url').value = buttonUrl;
	document.getElementById('text-input-id2-button-url').value = buttonUrl2;
	document.getElementById('text-input-id-padding-top').value = padTop;
	document.getElementById('text-input-id-padding-bottom').value = padBottom;
	document.getElementById('text-input-id-title-line-height').value = titleLineHeight;
	document.getElementById('text-input-id2-title-line-height').value = titleLineHeight2;
	document.getElementById('text-input-id-subtitle-line-height').value = subtitleLineHeight;
	document.getElementById('text-input-id2-subtitle-line-height').value = subtitleLineHeight2;

	document.getElementById('text-input-id-title-font-color').value = titleFontColor;
	document.getElementById('text-input-id-subtitle-font-color').value = subtitleFontColor;
	document.getElementById('text-input-id2-title-font-color').value = title2FontColor;
	document.getElementById('text-input-id2-subtitle-font-color').value = subtitle2FontColor;
}


function paintHtml() {
	centerAlign = document.getElementById('checkbox-id-center-align').checked;
	imageUrl = document.getElementById('text-input-id-image-url').value;
	imageUrl2 = document.getElementById('text-input-id2-image-url').value;
	imageAltText = document.getElementById('text-input-id-image-alt-text').value;
	imageAltText2 = document.getElementById('text-input-id2-image-alt-text').value;
	productLink = document.getElementById('text-input-id-product-link').value;
	productLink2 = document.getElementById('text-input-id2-product-link').value;
	subtitle = document.getElementById('text-input-id-subtitle').value;
	subtitleFontSize = document.getElementById('text-input-id-subtitle-font-size').value;
	subtitleFontWeight = document.getElementById('text-input-id-subtitle-font-weight').value;
	subtitle2 = document.getElementById('text-input-id2-subtitle').value;
	subtitle2FontSize = document.getElementById('text-input-id2-subtitle-font-size').value;
	subtitle2FontWeight = document.getElementById('text-input-id2-subtitle-font-weight').value;
	title = document.getElementById('text-input-id-title').value;
	titleFontSize = document.getElementById('text-input-id-title-font-size').value;
	titleFontWeight = document.getElementById('text-input-id-title-font-weight').value;
	title2 = document.getElementById('text-input-id2-title').value;
	title2FontSize = document.getElementById('text-input-id2-title-font-size').value;
	title2FontWeight = document.getElementById('text-input-id2-title-font-weight').value;
	buttonText = document.getElementById('text-input-id-button-label').value;
	buttonText2 = document.getElementById('text-input-id2-button-label').value;
	buttonUrl = document.getElementById('text-input-id-button-url').value;
	buttonUrl2 = document.getElementById('text-input-id2-button-url').value;
	padTop = document.getElementById('text-input-id-padding-top').value;
	padBottom = document.getElementById('text-input-id-padding-bottom').value;
	titleLineHeight = document.getElementById('text-input-id-title-line-height').value;
	titleLineHeight2 = document.getElementById('text-input-id2-title-line-height').value;
	subtitleLineHeight = document.getElementById('text-input-id-subtitle-line-height').value;
	subtitleLineHeight2 = document.getElementById('text-input-id2-subtitle-line-height').value;

	titleFontColor = document.getElementById('text-input-id-title-font-color').value;
	subtitleFontColor = document.getElementById('text-input-id-subtitle-font-color').value;
	title2FontColor = document.getElementById('text-input-id2-title-font-color').value;
	subtitle2FontColor = document.getElementById('text-input-id2-subtitle-font-color').value;

	var data = {
		centerAlign: centerAlign,
		imageUrl: imageUrl,
		imageUrl2: imageUrl2,
		imageAltText: imageAltText,
		imageAltText2: imageAltText2,
		productLink: productLink,
		productLink2: productLink2,
		subtitle: subtitle,
		subtitleFontSize: subtitleFontSize,
		subtitleFontWeight: subtitleFontWeight,
		subtitle2: subtitle2,
		subtitle2FontSize: subtitle2FontSize,
		subtitle2FontWeight: subtitle2FontWeight,
		title: title,
		titleFontSize: titleFontSize,
		titleFontWeight: titleFontWeight,
		title2: title2,
		title2FontSize: title2FontSize,
		title2FontWeight: title2FontWeight,
		buttonText: buttonText,
		buttonText2: buttonText2,
		buttonUrl: buttonUrl,
		buttonUrl2: buttonUrl2,
		padTop : padTop,
		padBottom : padBottom,
		titleLineHeight : titleLineHeight,
		titleLineHeight2 : titleLineHeight2,
		subtitleLineHeight : subtitleLineHeight,
		subtitleLineHeight2 : subtitleLineHeight2,
		titleFontColor : titleFontColor,
		subtitleFontColor : subtitleFontColor,
		title2FontColor : title2FontColor,
		subtitle2FontColor : subtitle2FontColor
	}

	sdk.setContent(FEATURED_PRODUCT_TWO_COLUMN(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	centerAlign = data.centerAlign || false;
	imageUrl = data.imageUrl || 'https://image.e.fleetpride.com/lib/fe2f11727364047c7d1373/m/1/f1a02c7b-c3a7-4c69-ae92-2d32b18f9013.png';
	imageUrl2 = data.imageUrl2 || 'https://image.e.fleetpride.com/lib/fe2f11727364047c7d1373/m/1/f1a02c7b-c3a7-4c69-ae92-2d32b18f9013.png';
	imageAltText = data.imageAltText || 'alText';
	imageAltText2 = data.imageAltText2 || 'alText';
	productLink = data.productLink || 'https://www.fleetpride.com';
	productLink2 = data.productLink2 || 'https://www.fleetpride.com';
	subtitle = data.subtitle || 'This is the subtitle';
	subtitleFontSize = data.subtitleFontSize || '14';
	subtitleFontWeight = data.subtitleFontWeight || '300';
	subtitle2 = data.subtitle2 || 'This is the subtitle';
	subtitle2FontSize = data.subtitle2FontSize || '14';
	subtitle2FontWeight = data.subtitle2FontWeight || '300';
	buttonText = data.buttonText || 'View Product';
	buttonText2 = data.buttonText2 || 'View Product';
	buttonUrl = data.buttonUrl || 'https://www.fleetpride.com';
	buttonUrl2 = data.buttonUrl2 || 'https://www.fleetpride.com';
	title = data.title || 'Lorem ipsum dolor sit amet';
	titleFontSize = data.titleFontSize || '20';
	titleFontWeight = data.titleFontWeight || '700';
	title2 = data.title2 || 'Lorem ipsum dolor sit amet';
	title2FontSize = data.title2FontSize || '20';
	title2FontWeight = data.title2FontWeight || '700';
	padTop = data.padTop || '0';
	padBottom = data.padBottom || '0';
	titleLineHeight = data.titleLineHeight || '28';
	titleLineHeight2 = data.titleLineHeight2 || '28';
	subtitleLineHeight = data.subtitleLineHeight || '24';
	subtitleLineHeight2 = data.subtitleLineHeight2 || '24';

	titleFontColor = data.titleFontColor || '171717';
	subtitleFontColor = data.subtitleFontColor || '565656';
	title2FontColor = data.title2FontColor || '171717';
	subtitle2FontColor = data.subtitle2FontColor || '565656';


	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});