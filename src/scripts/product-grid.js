require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEMPLATE from '../partials/js/product-grid.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var title, titleFontSize, titleFontWeight, titleLineHeight, titleFontColor, subtitle, subtitleFontSize, subtitleFontWeight, subtitleLineHeight, subtitleFontColor, buttonText, dataExtension, dataExtensionFallback, priceLabel, productButtonText, sequenceNumber, cloudPageId, utmContentId, showPrice, nullTitle, nullSubtitle, noHeader;

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
	document.getElementById('text-input-id-data-extension').value = dataExtension;
	document.getElementById('text-input-id-data-extension-fallback').value = dataExtensionFallback;
	document.getElementById('text-input-id-price-label').value = priceLabel;
	document.getElementById('text-input-id-product-button-text').value = productButtonText;
    document.getElementById('text-input-id-cloud-page-id').value = cloudPageId;
    document.getElementById('text-input-id-utm-content-id').value = utmContentId;
	document.getElementById('checkbox-show-price').checked = showPrice;
	document.getElementById('select-input-id-product-count').value = sequenceNumber;
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
	dataExtension = document.getElementById('text-input-id-data-extension').value;
	dataExtensionFallback = document.getElementById('text-input-id-data-extension-fallback').value;
    priceLabel = document.getElementById('text-input-id-price-label').value;
    productButtonText = document.getElementById('text-input-id-product-button-text').value;
    cloudPageId = document.getElementById('text-input-id-cloud-page-id').value;
    utmContentId = document.getElementById('text-input-id-utm-content-id').value;
	showPrice = document.getElementById('checkbox-show-price').checked;
	sequenceNumber = document.getElementById('select-input-id-product-count').value;
	noHeader = doHeader(nullTitle, nullSubtitle);


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
        dataExtension: dataExtension,
        dataExtensionFallback: dataExtensionFallback,
        priceLabel: priceLabel,
        productButtonText: productButtonText,
        cloudPageId: cloudPageId,
        utmContentId: utmContentId,
		showPrice: showPrice,
		noHeader: noHeader,
		sequenceNumber: sequenceNumber
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
	buttonText = data.buttonText || 'Button';
    dataExtension = data.dataExtension || 'FeaturedProductsPersonalized';
    dataExtensionFallback = data.dataExtensionFallback || 'FeaturedProductsPersonalizedFallback';
    priceLabel = data.priceLabel || 'Your Price';
    productButtonText = data.productButtonText || 'View Product';
    cloudPageId = data.cloudPageId || '324';
    utmContentId = data.utmContentId || 'bullseye';
	showPrice = data.showPrice || false;
	sequenceNumber = data.sequenceNumber || '1';    
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

function doHeader(t,s){
	
	if( t == true && s == true){
		return true;
	}
	else{
		return false;
	}
}
