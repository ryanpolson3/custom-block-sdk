require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import MULTI_CATEGORY_FEATURES from '../partials/js/multi-category-features.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var categoryName, categoryName2, categoryName3, categoryName4, categoryNameFontWeight, categoryNameFontSize, categoryNameLineHeight, imageUrl, imageUrl2, imageUrl3, imageUrl4, imageAltText, imageAltText2, imageAltText3, imageAltText4, categoryUrl, categoryUrl2, categoryUrl3, categoryUrl4;

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
	document.getElementById('text-input-id-category-name').value = categoryName;
	document.getElementById('text-input-id2-category-name').value = categoryName2;
	document.getElementById('text-input-id3-category-name').value = categoryName3;
	document.getElementById('text-input-id4-category-name').value = categoryName4;
	document.getElementById('text-input-id-font-weight').value = categoryNameFontWeight;
	document.getElementById('text-input-id-font-size').value = categoryNameFontSize;
	document.getElementById('text-input-id-line-height').value = categoryNameLineHeight;
	document.getElementById('text-input-id-image-url').value = imageUrl;
	document.getElementById('text-input-id2-image-url').value = imageUrl2;
	document.getElementById('text-input-id3-image-url').value = imageUrl3;
	document.getElementById('text-input-id4-image-url').value = imageUrl4;
	document.getElementById('text-input-id-category-url').value = categoryUrl;
	document.getElementById('text-input-id2-category-url').value = categoryUrl2;
	document.getElementById('text-input-id3-category-url').value = categoryUrl3;
	document.getElementById('text-input-id4-category-url').value = categoryUrl4;
	document.getElementById('text-input-id-image-alt-text').value = imageAltText;
	document.getElementById('text-input-id2-image-alt-text').value = imageAltText2;
	document.getElementById('text-input-id3-image-alt-text').value = imageAltText3;
	document.getElementById('text-input-id4-image-alt-text').value = imageAltText4;
	
}

function paintHtml() {
	categoryName = document.getElementById('text-input-id-category-name').value;
	categoryName2 = document.getElementById('text-input-id2-category-name').value;
	categoryName3 = document.getElementById('text-input-id3-category-name').value;
	categoryName4 = document.getElementById('text-input-id4-category-name').value;
	categoryNameFontWeight = document.getElementById('text-input-id-font-weight').value;
	categoryNameFontSize = document.getElementById('text-input-id-font-size').value;
	categoryNameLineHeight = document.getElementById('text-input-id-line-height').value;
	imageUrl = document.getElementById('text-input-id-image-url').value;
	imageUrl2 = document.getElementById('text-input-id2-image-url').value;
	imageUrl3 = document.getElementById('text-input-id3-image-url').value;
	imageUrl4 = document.getElementById('text-input-id4-image-url').value;
	categoryUrl = document.getElementById('text-input-id-category-url').value;
	categoryUrl2 = document.getElementById('text-input-id2-category-url').value;
	categoryUrl3 = document.getElementById('text-input-id3-category-url').value;
	categoryUrl4 = document.getElementById('text-input-id4-category-url').value;
	imageAltText = document.getElementById('text-input-id-image-alt-text').value;
	imageAltText2 = document.getElementById('text-input-id2-image-alt-text').value;
	imageAltText3 = document.getElementById('text-input-id3-image-alt-text').value;
	imageAltText4 = document.getElementById('text-input-id4-image-alt-text').value;

	var data = {
		categoryName: categoryName,
		categoryName2: categoryName2,
		categoryName3: categoryName3,
		categoryName4: categoryName4,
		categoryNameFontWeight: categoryNameFontWeight,
		categoryNameFontSize: categoryNameFontSize,
		categoryNameLineHeight: categoryNameLineHeight,
		imageUrl: imageUrl,
		imageUrl2: imageUrl2,
		imageUrl3: imageUrl3,
		imageUrl4: imageUrl4,
		categoryUrl: categoryUrl,
		categoryUrl2: categoryUrl2,
		categoryUrl3: categoryUrl3,
		categoryUrl4: categoryUrl4,
		imageAltText: imageAltText,
		imageAltText2: imageAltText2,
		imageAltText3: imageAltText3,
		imageAltText4: imageAltText4
	}

	sdk.setContent(MULTI_CATEGORY_FEATURES(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
		categoryName = data.categoryName || '';
		categoryName2 = data.categoryName2 || '';
		categoryName3 = data.categoryName3 || '';
		categoryName4 = data.categoryName4 || '';
		categoryNameFontWeight = data.categoryNameFontWeight || '300';
		categoryNameFontSize = data.categoryNameFontSize || '18';
		categoryNameLineHeight = data.categoryNameLineHeight || '24';
		imageUrl = data.imageUrl || '';
		imageUrl2 = data.imageUrl2 || '';
		imageUrl3 = data.imageUrl3 || '';
		imageUrl4 = data.imageUrl4 || '';
		categoryUrl = data.categoryUrl || '';
		categoryUrl2 = data.categoryUrl2 || '';
		categoryUrl3 = data.categoryUrl3 || '';
		categoryUrl4 = data.categoryUrl4 || '';
		imageAltText = data.imageAltText || '';
		imageAltText2 = data.imageAltText2 || '';
		imageAltText3 = data.imageAltText3 || '';
		imageAltText4 = data.imageAltText4 || '';
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});