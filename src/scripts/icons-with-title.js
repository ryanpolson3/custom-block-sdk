require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import ICONS_WITH_TITLE from '../partials/js/icons-with-title.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var iconName, iconName2, iconName3, iconFontWeight, iconFontWeight2, iconFontWeight3, iconName4, iconUrl, iconUrl2, iconUrl3, iconUrl4, iconAltText, iconAltText2, iconAltText3, iconAltText4, iconLink, iconLink2, iconLink3, iconLink4;

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
	document.getElementById('text-input-id-icon-name').value = iconName;
	document.getElementById('text-input-id2-icon-name').value = iconName2;
	document.getElementById('text-input-id3-icon-name').value = iconName3;
	document.getElementById('text-input-id-icon-url').value = iconUrl;
	document.getElementById('text-input-id2-icon-url').value = iconUrl2;
	document.getElementById('text-input-id3-icon-url').value = iconUrl3;
	document.getElementById('text-input-id-icon-link').value = iconLink;
	document.getElementById('text-input-id2-icon-link').value = iconLink2;
	document.getElementById('text-input-id3-icon-link').value = iconLink3;
	document.getElementById('text-input-id-icon-alt-text').value = iconAltText;
	document.getElementById('text-input-id2-icon-alt-text').value = iconAltText2;
	document.getElementById('text-input-id3-icon-alt-text').value = iconAltText3;
	document.getElementById('text-input-id-icon-font-weight').value = iconFontWeight;
	document.getElementById('text-input-id2-icon-font-weight').value = iconFontWeight2;
	document.getElementById('text-input-id3-icon-font-weight').value = iconFontWeight3;
	
}

function paintHtml() {
	iconName = document.getElementById('text-input-id-icon-name').value;
	iconName2 = document.getElementById('text-input-id2-icon-name').value;
	iconName3 = document.getElementById('text-input-id3-icon-name').value;
	iconUrl = document.getElementById('text-input-id-icon-url').value;
	iconUrl2 = document.getElementById('text-input-id2-icon-url').value;
	iconUrl3 = document.getElementById('text-input-id3-icon-url').value;
	iconLink = document.getElementById('text-input-id-icon-link').value;
	iconLink2 = document.getElementById('text-input-id2-icon-link').value;
	iconLink3 = document.getElementById('text-input-id3-icon-link').value;
	iconAltText = document.getElementById('text-input-id-icon-alt-text').value;
	iconAltText2 = document.getElementById('text-input-id2-icon-alt-text').value;
	iconAltText3 = document.getElementById('text-input-id3-icon-alt-text').value;
	iconFontWeight = document.getElementById('text-input-id-icon-font-weight').value;
	iconFontWeight2 = document.getElementById('text-input-id2-icon-font-weight').value;
	iconFontWeight3 = document.getElementById('text-input-id3-icon-font-weight').value;

	var data = {
		iconName: iconName,
		iconName2: iconName2,
		iconName3: iconName3,
		iconUrl: iconUrl,
		iconUrl2: iconUrl2,
		iconUrl3: iconUrl3,
		iconLink: iconLink,
		iconLink2: iconLink2,
		iconLink3: iconLink3,
		iconAltText: iconAltText,
		iconAltText2: iconAltText2,
		iconAltText3: iconAltText3,
		iconFontWeight: iconFontWeight,
		iconFontWeight2: iconFontWeight2,
		iconFontWeight3: iconFontWeight3
	}

	sdk.setContent(ICONS_WITH_TITLE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	iconName = data.iconName || '';
	iconName2 = data.iconName2 || '';
	iconName3 = data.iconName3 || '';
	iconUrl = data.iconUrl || 'https://via.placeholder.com/75';
	iconUrl2 = data.iconUrl2 || 'https://via.placeholder.com/75';
	iconUrl3 = data.iconUrl3 || 'https://via.placeholder.com/75';
	iconLink = data.iconLink || '';
	iconLink2 = data.iconLink2 || '';
	iconLink3 = data.iconLink3 || '';
	iconAltText = data.iconAltText || '';
	iconAltText2 = data.iconAltText2 || '';
	iconAltText3 = data.iconAltText3 || '';
	iconFontWeight = data.iconFontWeight || '300';
	iconFontWeight2 = data.iconFontWeight2 || '300';
	iconFontWeight3 = data.iconFontWeight3 || '300';

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});