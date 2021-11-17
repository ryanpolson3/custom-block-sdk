require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import HEADER from '../partials/js/header.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var ctaText, ctaUrl, logoUrl, logoLink;

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
	document.getElementById('text-input-id-cta-text').value = ctaText;
	document.getElementById('text-input-id-cta-url').value = ctaUrl;
	document.getElementById('text-input-id-logo-url').value = logoUrl;
	document.getElementById('text-input-id-logo-link').value = logoLink;
}


function paintHtml() {
	ctaText = document.getElementById('text-input-id-cta-text').value;
	ctaUrl = document.getElementById('text-input-id-cta-url').value;
	logoUrl = document.getElementById('text-input-id-logo-url').value;
	logoLink = document.getElementById('text-input-id-logo-link').value;

	var data = {
		ctaText : ctaText,
		ctaUrl : ctaUrl,
		logoUrl : logoUrl,
		logoLink : logoLink
	}

	sdk.setContent(HEADER(data));
	sdk.setData(data);
}

sdk.getData(function (data) {

	ctaText = data.ctaText || 'FIND A BRANCH';
	ctaUrl = data.ctaUrl || 'https://branches.fleetpride.com/';
	logoUrl = data.logoUrl || 'https://image.e.fleetpride.com/lib/fe2f11727364047c7d1373/m/1/57cd1898-f62e-4f79-b819-f78dbe0ea272.png';
	logoLink = data.logoLink || 'https://fleetpride.com/parts';

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});