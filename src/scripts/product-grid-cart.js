require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEMPLATE from '../partials/js/product-grid-cart.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var sequenceNumber, utmContentId, title, titleFontSize, titleFontWeight, titleLineHeight, titleFontColor, subtitle, subtitleFontSize, subtitleFontWeight, subtitleLineHeight, subtitleFontColor, buttonText, dataExtension, dataExtensionFallback, priceLabel, productButtonText, productCount, cloudPageId, utmContentId, showPrice, nullTitle, nullSubtitle, noHeader, description, descriptionFontSize, descriptionLineHeight, descriptionFontWeight, descriptionFontColor, padTop, padBottom;

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
	document.getElementById('text-input-id-2').value = buttonText;
	document.getElementById('text-input-id-price-label').value = priceLabel;
	document.getElementById('text-input-id-product-button-text').value = productButtonText;
	document.getElementById('checkbox-show-price').checked = showPrice;
	document.getElementById('text-input-id-utm-content-id').value = utmContentId;
	document.getElementById('select-input-id-product-count').value = sequenceNumber;
	document.getElementById('text-input-id-padding-top').value = padTop;
	document.getElementById('text-input-id-padding-bottom').value = padBottom;
	
}


function paintHtml() {
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
	buttonText = document.getElementById('text-input-id-2').value;
    priceLabel = document.getElementById('text-input-id-price-label').value;
    productButtonText = document.getElementById('text-input-id-product-button-text').value;
	showPrice = document.getElementById('checkbox-show-price').checked;
	noHeader = doHeader(nullTitle, nullSubtitle);
	utmContentId = document.getElementById('text-input-id-utm-content-id').value;
	sequenceNumber = document.getElementById('select-input-id-product-count').value;
	padTop = document.getElementById('text-input-id-padding-top').value;
	padBottom = document.getElementById('text-input-id-padding-bottom').value;


	var data = {
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
		buttonText: buttonText,
        priceLabel: priceLabel,
        productButtonText: productButtonText,
		showPrice: showPrice,
		noHeader: noHeader,
		utmContentId: utmContentId,
		sequenceNumber: sequenceNumber,
		padTop : padTop,
		padBottom : padBottom
	}

	sdk.setContent(TEMPLATE(data));
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
	buttonText = data.buttonText || 'Finish My Order';
    priceLabel = data.priceLabel || 'Your Price';
    productButtonText = data.productButtonText || '';
	showPrice = data.showPrice || true;
	utmContentId = data.utmContentId || '';
	sequenceNumber = data.sequenceNumber || '1';    
	padTop = data.padTop || '0';    
	padBottom = data.padBottom || '0';  
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


