require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEMPLATE from '../partials/js/product-carousel.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var title, dataExtension, dataExtensionFallback, priceLabel, productButtonText, productCount, showPrice, showPriceStyle;

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
	document.getElementById('text-input-id-data-extension').value = dataExtension;
	document.getElementById('text-input-id-data-extension-fallback').value = dataExtensionFallback;
	document.getElementById('text-input-id-price-label').value = priceLabel;
	document.getElementById('text-input-id-product-button-text').value = productButtonText;
    document.getElementById('text-input-id-product-count').value = productCount;
	document.getElementById('checkbox-show-price').checked = showPrice;
}


function paintHtml() {
	title = document.getElementById('text-input-id-0').value;
	dataExtension = document.getElementById('text-input-id-data-extension').value;
	dataExtensionFallback = document.getElementById('text-input-id-data-extension-fallback').value;
    priceLabel = document.getElementById('text-input-id-price-label').value;
    productButtonText = document.getElementById('text-input-id-product-button-text').value;
    productCount = document.getElementById('text-input-id-product-count').value;
	showPrice = document.getElementById('checkbox-show-price').checked;
	if(showPrice == true){
		showPriceStyle = '';
	}
	else{
		showPriceStyle = 'display:none;'
	}


	var data = {
		title: title,
        dataExtension: dataExtension,
        dataExtensionFallback: dataExtensionFallback,
        priceLabel: priceLabel,
        productButtonText: productButtonText,
        productCount: productCount,
		showPrice: showPrice,
		showPriceStyle: showPriceStyle
	}

	sdk.setContent(TEMPLATE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	title = data.title || '';
    dataExtension = data.dataExtension || 'FeaturedProductsPersonalized';
    dataExtensionFallback = data.dataExtensionFallback || 'FeaturedProductsPersonalizedFallback';
    priceLabel = data.priceLabel || 'See Price';
    productButtonText = data.productButtonText || 'View Product';
    productCount = data.productCount || '10';
	showPrice = data.showPrice || false;    
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});