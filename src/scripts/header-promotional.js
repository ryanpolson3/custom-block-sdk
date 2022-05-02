require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import HEADER from '../partials/js/header-promotional.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var promotionUrl, promotionLink, promotionAlt, title, titleFontSize, titleFontWeight, titleFontColor, titleLineHeight, titlePadBot,  subtitle, subtitleFontSize, subtitleFontWeight, subtitleFontColor, subtitleLineHeight, subtitlePadBot, description, descriptionFontSize, descriptionFontWeight, descriptionFontColor, descriptionLineHeight, descriptionPadBot, buttonUrl, buttonText, buttonColor, buttonBackgroundColor, imageAlignmentRight, textBackgroundColor, imageBackgroundColor;

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

	document.getElementById('text-input-id-promotion-url').value = promotionUrl;
	document.getElementById('text-input-id-promotion-link').value = promotionLink;
	document.getElementById('text-input-id-promotion-alt').value = promotionAlt;

	document.getElementById('text-input-id-title').value = title;
	document.getElementById('text-input-id-title-font-size').value = titleFontSize;
	document.getElementById('text-input-id-title-font-weight').value = titleFontWeight;
	document.getElementById('text-input-id-title-font-color').value = titleFontColor;
	document.getElementById('text-input-id-title-line-height').value = titleLineHeight;
	document.getElementById('text-input-id-title-padding-bottom').value = titlePadBot;

	document.getElementById('text-input-id-subtitle').value = subtitle;
	document.getElementById('text-input-id-subtitle-font-size').value = subtitleFontSize;
	document.getElementById('text-input-id-subtitle-font-weight').value = subtitleFontWeight;
	document.getElementById('text-input-id-subtitle-font-color').value = subtitleFontColor;
	document.getElementById('text-input-id-subtitle-line-height').value = subtitleLineHeight;
	document.getElementById('text-input-id-subtitle-padding-bottom').value = subtitlePadBot;

	document.getElementById('text-input-id-description').value = description;
	document.getElementById('text-input-id-description-font-size').value = descriptionFontSize;
	document.getElementById('text-input-id-description-font-weight').value = descriptionFontWeight;
	document.getElementById('text-input-id-description-font-color').value = descriptionFontColor;
	document.getElementById('text-input-id-description-line-height').value = descriptionLineHeight;
	document.getElementById('text-input-id-description-padding-bottom').value = descriptionPadBot;

	document.getElementById('text-input-id-button-text').value = buttonText;
	document.getElementById('text-input-id-button-url').value = buttonUrl;
	document.getElementById('text-input-id-button-color').value = buttonColor;
	document.getElementById('text-input-id-button-background-color').value = buttonBackgroundColor;

	document.getElementById('checkbox-unique-id-73').checked = imageAlignmentRight;
	document.getElementById('text-input-id-image-background-color').value = imageBackgroundColor;
	document.getElementById('text-input-id-text-background-color').value = textBackgroundColor;

}


function paintHtml() {

	promotionUrl = document.getElementById('text-input-id-promotion-url').value;
	promotionLink = document.getElementById('text-input-id-promotion-link').value;
	promotionAlt = document.getElementById('text-input-id-promotion-alt').value;

	title = document.getElementById('text-input-id-title').value;
	titleFontSize = document.getElementById('text-input-id-title-font-size').value;
	titleFontWeight = document.getElementById('text-input-id-title-font-weight').value;
	titleFontColor = document.getElementById('text-input-id-title-font-color').value;
	titleLineHeight = document.getElementById('text-input-id-title-line-height').value;
	titlePadBot = document.getElementById('text-input-id-title-padding-bottom').value;
	
	subtitle = document.getElementById('text-input-id-subtitle').value;
	subtitleFontSize = document.getElementById('text-input-id-subtitle-font-size').value;
	subtitleFontWeight = document.getElementById('text-input-id-subtitle-font-weight').value;
	subtitleFontColor = document.getElementById('text-input-id-subtitle-font-color').value;
	subtitleLineHeight = document.getElementById('text-input-id-subtitle-line-height').value;
	subtitlePadBot = document.getElementById('text-input-id-subtitle-padding-bottom').value;

	description = document.getElementById('text-input-id-description').value;
	descriptionFontSize = document.getElementById('text-input-id-description-font-size').value;
	descriptionFontWeight = document.getElementById('text-input-id-description-font-weight').value;
	descriptionFontColor = document.getElementById('text-input-id-description-font-color').value;
	descriptionLineHeight = document.getElementById('text-input-id-description-line-height').value;
	descriptionPadBot = document.getElementById('text-input-id-description-padding-bottom').value;

	buttonText = document.getElementById('text-input-id-button-text').value;
	buttonUrl = document.getElementById('text-input-id-button-url').value;
	buttonColor = document.getElementById('text-input-id-button-color').value;
	buttonBackgroundColor = document.getElementById('text-input-id-button-background-color').value;

	imageAlignmentRight = document.getElementById('checkbox-unique-id-73').checked;
	imageBackgroundColor = document.getElementById('text-input-id-image-background-color').value;
	textBackgroundColor = document.getElementById('text-input-id-text-background-color').value;

	var data = {
		promotionUrl : promotionUrl,
		promotionLink : promotionLink,
		promotionAlt : promotionAlt,
		title : title,
		titleFontSize : titleFontSize,
		titleFontWeight : titleFontWeight,
		titleFontColor : titleFontColor,
		titleLineHeight : titleLineHeight,
		titlePadBot : titlePadBot,
		subtitle : subtitle,
		subtitleFontSize : subtitleFontSize,
		subtitleFontWeight : subtitleFontWeight,
		subtitleFontColor : subtitleFontColor,
		subtitleLineHeight : subtitleLineHeight,
		subtitlePadBot : subtitlePadBot,
		description : description,
		subtitlePadBot : subtitlePadBot,
		descriptionFontSize : descriptionFontSize,
		descriptionFontWeight : descriptionFontWeight,
		descriptionFontColor : descriptionFontColor,
		descriptionLineHeight : descriptionLineHeight,
		descriptionPadBot : descriptionPadBot,
		buttonUrl : buttonUrl,
		buttonText : buttonText,
		buttonBackgroundColor : buttonBackgroundColor,
		buttonColor : buttonColor,
		imageAlignmentRight : imageAlignmentRight,
		imageBackgroundColor : imageBackgroundColor,
		textBackgroundColor : textBackgroundColor,
	}

	sdk.setContent(HEADER(data));
	sdk.setData(data);
}

sdk.getData(function (data) {

	promotionUrl = data.promotionUrl || 'https://image.e.fleetpride.com/lib/fe2f11727364047c7d1373/m/1/6272db87-4d42-4f07-9a0c-4bc176002969.jpeg';
	promotionLink = data.promotionLink || 'https://www.google.com';
	promotionAlt = data.promotionAlt || 'Promotional Image';

	title = data.title || 'only available in nov';
	titleFontSize = data.titleFontSize || '16';
	titleFontWeight = data.titleFontWeight || '400';
	titleFontColor = data.titleFontColor || 'FFFFFF';
	titleLineHeight = data.titleLineHeight || '20';
	titlePadBot = data.titlePadBot || '0';

	subtitle = data.subtitle || '50% off';
	subtitleFontSize = data.subtitleFontSize || '44';
	subtitleFontWeight = data.subtitleFontWeight || '100';
	subtitleFontColor = data.subtitleFontColor || 'FFFFFF';
	subtitleLineHeight = data.subtitleLineHeight || '48';
	subtitlePadBot = data.subtitlePadBot || '0';

	description = data.description || 'Description';
	descriptionFontSize = data.descriptionFontSize || '10';
	descriptionFontWeight = data.descriptionFontWeight || '100';
	descriptionFontColor = data.descriptionFontColor || 'FFFFFF';
	descriptionLineHeight = data.descriptionLineHeight || '14';
	descriptionPadBot = data.descriptionPadBot || '0';
	
	buttonUrl = data.buttonUrl || 'https://www.google.com';
	buttonText = data.buttonText || 'Button';
	buttonColor = data.buttonColor || 'FFFFFF';
	buttonBackgroundColor = data.buttonBackgroundColor || 'EE3124';

	imageAlignmentRight = data.imageAlignmentRight || false;
	textBackgroundColor = data.textBackgroundColor || '001D66';
	imageBackgroundColor = data.imageBackgroundColor || 'FFFFFF';

	

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});