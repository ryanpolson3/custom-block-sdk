require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import CONTENT_ONE_COLUMN_LANDING_PAGE from '../partials/js/content-one-column-landing-page.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var buttonCenter, title, titleFontSize, titleFontWeight, titleLineHeight, titleFontColor, subtitle, subtitleFontSize, subtitleFontWeight, subtitleLineHeight, subtitleFontColor, description, descriptionFontSize, descriptionLineHeight, descriptionFontWeight, descriptionFontColor, buttonUrl, buttonText, imageUrl, imageHeight, imageWidth, imageDestinationUrl, imageAltText, nullTitle, nullSubtitle, nullDescription, noHeader, descriptionPaddingBottom, componentPaddingBottom, componentPaddingTop, subtitlePaddingBottom;

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
	document.getElementById('checkbox-center-button').checked = buttonCenter;
	document.getElementById('text-input-id-title').value = title;
	document.getElementById('text-input-id-title-font-size').value = titleFontSize;
	document.getElementById('text-input-id-title-font-weight').value = titleFontWeight;
	document.getElementById('text-input-id-title-line-height').value = titleLineHeight;
	document.getElementById('text-input-id-title-font-color').value = titleFontColor;
	document.getElementById('text-input-id-subtitle').value = subtitle;
	document.getElementById('text-input-id-subtitle-font-size').value = subtitleFontSize;
	document.getElementById('text-input-id-subtitle-line-height').value = subtitleLineHeight;
	document.getElementById('text-input-id-subtitle-font-weight').value = subtitleFontWeight;
	document.getElementById('text-input-id-subtitle-font-color').value = subtitleFontColor;
	document.getElementById('textarea-id-description').value = description;
	document.getElementById('text-input-id-description-font-size').value = descriptionFontSize;
	document.getElementById('text-input-id-description-line-height').value = descriptionLineHeight;
	document.getElementById('text-input-id-description-font-weight').value = descriptionFontWeight;
	document.getElementById('text-input-id-description-font-color').value = descriptionFontColor;
	document.getElementById('text-input-id-button-text').value = buttonText;
	document.getElementById('text-input-id-button-url').value = buttonUrl;
	document.getElementById('text-input-id-image-url').value = imageUrl;
	document.getElementById('text-input-id-image-link').value = imageDestinationUrl;
	document.getElementById('text-input-id-image-height').value = imageHeight;
	document.getElementById('text-input-id-image-width').value = imageWidth;
	document.getElementById('text-input-id-image-alt-text').value = imageAltText;
	document.getElementById('text-input-id-padding-bottom').value = descriptionPaddingBottom;
	document.getElementById('text-input-id-component-padding-bottom').value = componentPaddingBottom;
	document.getElementById('text-input-id-component-padding-top').value = componentPaddingTop;
	document.getElementById('text-input-id-subtitle-padding-bottom').value = subtitlePaddingBottom;
}


function paintHtml() {
	buttonCenter = document.getElementById('checkbox-center-button').checked;
	title = document.getElementById('text-input-id-title').value;
	nullTitle = doNullTitleBooleans(title);
	titleFontSize = document.getElementById('text-input-id-title-font-size').value;
	titleLineHeight = document.getElementById('text-input-id-title-line-height').value;
	titleFontWeight = document.getElementById('text-input-id-title-font-weight').value;
	titleFontColor = document.getElementById('text-input-id-title-font-color').value;
	subtitle = document.getElementById('text-input-id-subtitle').value;
	nullSubtitle = doNullTitleBooleans(subtitle);
	subtitleFontSize = document.getElementById('text-input-id-subtitle-font-size').value;
	subtitleLineHeight = document.getElementById('text-input-id-subtitle-line-height').value;
	subtitleFontWeight = document.getElementById('text-input-id-subtitle-font-weight').value;
	subtitleFontColor = document.getElementById('text-input-id-subtitle-font-color').value;
	description = formatTextArea(document.getElementById('textarea-id-description').value);
	nullDescription = doNullTitleBooleans(description);
	descriptionFontSize = document.getElementById('text-input-id-description-font-size').value;
	descriptionLineHeight = document.getElementById('text-input-id-description-line-height').value;
	descriptionFontWeight = document.getElementById('text-input-id-description-font-weight').value;
	descriptionFontColor = document.getElementById('text-input-id-description-font-color').value;
	buttonText = document.getElementById('text-input-id-button-text').value;
	buttonUrl = document.getElementById('text-input-id-button-url').value;
	imageUrl = document.getElementById('text-input-id-image-url').value;
	imageDestinationUrl = document.getElementById('text-input-id-image-link').value;
	imageAltText = document.getElementById('text-input-id-image-alt-text').value;
	imageHeight = document.getElementById('text-input-id-image-height').value;
	imageWidth = document.getElementById('text-input-id-image-width').value;
	noHeader = doHeader(nullTitle, nullSubtitle);
	descriptionPaddingBottom = document.getElementById('text-input-id-padding-bottom').value;
	componentPaddingBottom = document.getElementById('text-input-id-component-padding-bottom').value;
	componentPaddingTop = document.getElementById('text-input-id-component-padding-top').value;
	subtitlePaddingBottom = document.getElementById('text-input-id-subtitle-padding-bottom').value;

	var data = {
		buttonCenter: buttonCenter,
		title: title,
		nullTitle: nullTitle,
		titleFontSize: titleFontSize,
		titleLineHeight: titleLineHeight,
		titleFontWeight: titleFontWeight,
		titleFontColor: titleFontColor,
		subtitle: subtitle,
		nullSubtitle: nullSubtitle,
		subtitleFontSize: subtitleFontSize,
		subtitleLineHeight: subtitleLineHeight,
		subtitleFontWeight: subtitleFontWeight,
		subtitleFontColor: subtitleFontColor,
		description: description,
		nullDescription: nullDescription,
		descriptionFontSize: descriptionFontSize,
		descriptionLineHeight: descriptionLineHeight, 
		descriptionFontWeight: descriptionFontWeight,
		descriptionFontColor: descriptionFontColor,
		buttonText: buttonText,
		buttonUrl: buttonUrl,
		imageUrl: imageUrl,
		imageHeight: imageHeight,
		imageWidth: imageWidth,
		imageDestinationUrl: imageDestinationUrl,
		imageAltText: imageAltText,
		noHeader: noHeader,
		descriptionPaddingBottom: descriptionPaddingBottom,
		componentPaddingBottom: componentPaddingBottom,
		componentPaddingTop: componentPaddingTop,
		subtitlePaddingBottom: subtitlePaddingBottom
	}

	sdk.setContent(CONTENT_ONE_COLUMN_LANDING_PAGE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	title = doTitle(data.title, data.nullTitle).title;
	nullTitle = doTitle(data.title, data.nullTitle).nullTitle;
	titleFontSize = data.titleFontSize || '32';
	titleLineHeight = data.titleLineHeight || '32'
	titleFontWeight = data.titleFontWeight || '700';
	titleFontColor = data.titleFontColor || '000000';
	subtitle = doTitle(data.subtitle, data.nullSubtitle).title;
	nullSubtitle = doTitle(data.subtitle, data.nullSubtitle).nullTitle;
	subtitleFontSize = data.subtitleFontSize || '20';
	subtitleLineHeight = data.subtitleLineHeight || '24'
	subtitleFontWeight = data.subtitleFontWeight || '700';
	subtitleFontColor = data.subtitleFontColor || '000000';
	description = doTitle(data.description, data.nullDescription).title;
	nullDescription = doTitle(data.description, data.nullSubscription).nullTitle;
	descriptionFontSize = data.descriptionFontSize || '16';
	descriptionLineHeight = data.descriptionLineHeight || '24';
	descriptionFontWeight = data.descriptionFontWeight || '100';
	descriptionFontColor = data.descriptionFontColor || '000000';
	buttonText = data.buttonText || '';
	buttonUrl = data.buttonUrl || '';
	buttonCenter = data.buttonCenter || false; 
	imageUrl = data.imageUrl || '';
	imageDestinationUrl = data.imageDestinationUrl || '';
	imageAltText = data.imageAltText || '';
	imageHeight = data.imageHeight || '230';
	imageWidth = data.imageWidth || '230';
	descriptionPaddingBottom = data.descriptionPaddingBottom || '30';
	componentPaddingBottom = data.componentPaddingBottom || '20';
	componentPaddingTop = data.componentPaddingTop || '20';
	subtitlePaddingBottom = data.subtitlePaddingBottom || '15';
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});

var area = container.querySelector('textarea');
if (area.addEventListener) {
	area.addEventListener("input", function () {
		debounce(paintHtml, 500)();
	});
}

function nl2br (str, is_xhtml) {

	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; 
  
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
  }

function formatTextArea (str) {
	console.log ('String is '+str);
	let returnString = '';
	const tempString = str.replaceAll('<li>', '<li style= "font-size:'+descriptionFontSize+'px; color:#'+descriptionFontColor+'; font-weight:'+descriptionFontWeight+';">');
	returnString = tempString;
	if(!tempString.includes('<ul>')){
	returnString = tempString.replace('<li', '<ul><li');
	}
	console.log('returnString is '+returnString);
	return returnString;
}

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

function doHeader(t,s){
	
	if( t == true && s == true){
		return true;
	}
	else{
		return false;
	}
}
