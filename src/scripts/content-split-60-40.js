require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import CONTENT_SPLIT from '../partials/js/content-split-60-40.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var title, nullTitle, subtitle, description, buttonUrl, buttonText, imageUrl, imageDestinationUrl, imageAltText, imageAlignmentRight, backgroundColor, backgroundColor2, titleFontSize, titleFontWeight, titleColor, titleLineHeight, subtitleFontSize, subtitleFontWeight, subtitleColor, subtitleLineHeight, descriptionFontSize, descriptionFontWeight, descriptionColor, descriptionLineHeight,  padTop, padBottom, titlePadTop, titlePadBot, subtitlePadTop, subtitlePadBot, descPadTop, descPadBot;

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
	document.getElementById('text-input-id-title-font-size').value = titleFontSize;
	document.getElementById('text-input-id-title-font-weight').value = titleFontWeight;
	document.getElementById('text-input-id-title-color').value = titleColor;
	document.getElementById('text-input-id-subtitle').value = subtitle;
	document.getElementById('text-input-id-subtitle-font-size').value = subtitleFontSize;
	document.getElementById('text-input-id-subtitle-font-weight').value = subtitleFontWeight;
	document.getElementById('text-input-id-subtitle-color').value = subtitleColor;
	document.getElementById('text-input-id-1').value = description;
	document.getElementById('text-input-id-description-font-size').value = descriptionFontSize;
	document.getElementById('text-input-id-description-font-weight').value = descriptionFontWeight;
	document.getElementById('text-input-id-description-color').value = descriptionColor;
	document.getElementById('text-input-id-2').value = buttonText;
	document.getElementById('text-input-id-3').value = buttonUrl;
	document.getElementById('text-input-id-4').value = imageUrl;
	document.getElementById('text-input-id-5').value = imageDestinationUrl;
	document.getElementById('text-input-id-6').value = imageAltText;
	document.getElementById('checkbox-unique-id-73').checked = imageAlignmentRight;
	document.getElementById('text-input-id-background-color').value = backgroundColor;
	document.getElementById('text-input-id2-background-color').value = backgroundColor2;
	document.getElementById('text-input-id-title-line-height').value = titleLineHeight;
	document.getElementById('text-input-id-subtitle-line-height').value = subtitleLineHeight;
	document.getElementById('text-input-id-description-line-height').value = descriptionLineHeight;
	document.getElementById('text-input-id-padding-top').value = padTop;
	document.getElementById('text-input-id-padding-bottom').value = padBottom;

	document.getElementById('text-input-id-title-padding-top').value = titlePadTop;
	document.getElementById('text-input-id-title-padding-bottom').value = titlePadBot;
	document.getElementById('text-input-id-subtitle-padding-top').value = subtitlePadTop;
	document.getElementById('text-input-id-subtitle-padding-bottom').value = subtitlePadBot;
	document.getElementById('text-input-id-description-padding-top').value = descPadTop;
	document.getElementById('text-input-id-description-padding-bottom').value = descPadBot;

}


function paintHtml() {
	title = document.getElementById('text-input-id-0').value;
	nullTitle = doNullTitleBooleans(title);
	titleFontSize = document.getElementById('text-input-id-title-font-size').value;
	titleFontWeight = document.getElementById('text-input-id-title-font-weight').value;
	titleColor = document.getElementById('text-input-id-title-color').value;
	subtitle = document.getElementById('text-input-id-subtitle').value;
	subtitleFontSize = document.getElementById('text-input-id-subtitle-font-size').value;
	subtitleFontWeight = document.getElementById('text-input-id-subtitle-font-weight').value;
	subtitleColor = document.getElementById('text-input-id-subtitle-color').value;
	description = document.getElementById('text-input-id-1').value;
	descriptionFontSize = document.getElementById('text-input-id-description-font-size').value;
	descriptionFontWeight = document.getElementById('text-input-id-description-font-weight').value;
	descriptionColor = document.getElementById('text-input-id-description-color').value;
	buttonText = document.getElementById('text-input-id-2').value;
	buttonUrl = document.getElementById('text-input-id-3').value;
	imageUrl = document.getElementById('text-input-id-4').value;
	imageDestinationUrl = document.getElementById('text-input-id-5').value;
	imageAltText = document.getElementById('text-input-id-6').value;
	imageAlignmentRight = document.getElementById('checkbox-unique-id-73').checked;
	backgroundColor = document.getElementById('text-input-id-background-color').value;
	backgroundColor2 = document.getElementById('text-input-id2-background-color').value;
	titleLineHeight = document.getElementById('text-input-id-title-line-height').value;
	subtitleLineHeight = document.getElementById('text-input-id-subtitle-line-height').value;
	descriptionLineHeight = document.getElementById('text-input-id-description-line-height').value;
	padTop = document.getElementById('text-input-id-padding-top').value;
	padBottom = document.getElementById('text-input-id-padding-bottom').value;

	titlePadTop = document.getElementById('text-input-id-title-padding-top').value;
	titlePadBot = document.getElementById('text-input-id-title-padding-bottom').value;
	subtitlePadTop = document.getElementById('text-input-id-subtitle-padding-top').value;
	subtitlePadBot = document.getElementById('text-input-id-subtitle-padding-bottom').value;
	descPadTop = document.getElementById('text-input-id-description-padding-top').value;
	descPadBot = document.getElementById('text-input-id-description-padding-bottom').value;

	

	var data = {
		title: title,
		nullTitle: nullTitle,
		titleFontSize : titleFontSize,
		titleFontWeight : titleFontWeight,
		titleColor: titleColor,
		subtitle: subtitle,
		subtitleFontSize: subtitleFontSize,
		subtitleFontWeight: subtitleFontWeight,
		subtitleColor: subtitleColor,
		description: description,
		descriptionFontSize : descriptionFontSize,
		descriptionFontWeight : descriptionFontWeight,
		descriptionColor : descriptionColor,
		buttonText: buttonText,
		buttonUrl: buttonUrl,
		imageUrl: imageUrl,
		imageDestinationUrl: imageDestinationUrl,
		imageAltText: imageAltText,
		imageAlignmentRight: imageAlignmentRight,
		backgroundColor: backgroundColor,
		backgroundColor2: backgroundColor2,
		titleLineHeight : titleLineHeight,
		subtitleLineHeight : subtitleLineHeight,
		descriptionLineHeight : descriptionLineHeight,
		padTop : padTop,
		padBottom : padBottom,

		titlePadTop : titlePadTop,
		titlePadBot : titlePadBot,
		subtitlePadTop : subtitlePadTop,
		subtitlePadBot : subtitlePadBot,
		descPadTop : descPadTop,
		descPadBot : descPadBot
	}

	sdk.setContent(CONTENT_SPLIT(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	//title = data.title || 'Lorem ipsum dolor sit amet';
	title = doTitle(data.title, data.nullTitle).title;
	nullTitle = doTitle(data.title, data.nullTitle).nullTitle;
	titleFontSize = data.titleFontSize || '24';
	titleFontWeight = data.titleFontWeight || '400';
	titleColor = data.titleColor || 'FFFFFF';
	subtitle = data.subtitle || '';
	subtitleFontSize = data.subtitleFontSize || '18';
	subtitleFontWeight = data.subtitleFontWeight || '400';
	subtitleColor = data.subtitleColor || 'C7C7C7';
	description = data.description || '';
	descriptionFontSize = data.descriptionFontSize || '14';
	descriptionFontWeight = data.descriptionFontWeight || '400';
	descriptionColor = data.descriptionColor || 'FFFFFF';
	buttonText = data.buttonText || '';
	buttonUrl = data.buttonUrl || '';
	imageUrl = data.imageUrl || '';
	imageDestinationUrl = data.imageDestinationUrl || '';
	imageAltText = data.imageAltText || '';
	imageAlignmentRight = data.imageAlignmentRight || false;
	backgroundColor = data.backgroundColor || '000000';
	backgroundColor2 = data.backgroundColor2 || '000000';
	titleLineHeight = data.titleLineHeight || '28';
	subtitleLineHeight = data.subtitleLineHeight || '24';
	descriptionLineHeight = data.descriptionLineHeight || '20';
	padTop = data.padTop || '0';
	padBottom = data.padBottom || '0';

	titlePadTop = data.titlePadTop || '5';
	titlePadBot = data.titlePadBot || '10';
	subtitlePadTop = data.subtitlePadTop || '0';
	subtitlePadBot = data.subtitlePadBot || '15';
	descPadTop = data.descPadTop || '0';
	descPadBot = data.descPadBot || '25';



	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});


function doTitle(t, f) {

    var r = {};

    if ((f == false || f == undefined) && (t === '' || t == undefined)) {

        r = {
            title: 'Lorem ipsum dolor sit amet',
            nullTitle: false
        }

	} else if ((f == false || f == undefined) && (t != '' || t != undefined)) {
        r = {
            title: t,
            nullTitle: false
        }

    } else if (f == true) {
        r = {
            title: '',
            nullTitle: true
        }

    }

    return r;
}

function doNullTitleBooleans(s){

	if(s === '' || s === undefined){
		return true;
	}
	else{
		return false;
	}
}