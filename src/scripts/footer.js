require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import FOOTER from '../partials/js/footer.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var fbUrl, fbLink, liUrl, liLink, logoUrl, logoLink;

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
	document.getElementById('text-input-id-logo-url').value = logoUrl;
	document.getElementById('text-input-id-logo-link').value = logoLink;
	document.getElementById('text-input-id-fb-logo-url').value = fbUrl;
	document.getElementById('text-input-id-fb-logo-link').value = fbLink;
	document.getElementById('text-input-id-li-logo-url').value = liUrl;
	document.getElementById('text-input-id-li-logo-link').value = liLink;
}


function paintHtml() {
	logoUrl = document.getElementById('text-input-id-logo-url').value;
	logoLink = document.getElementById('text-input-id-logo-link').value;
	fbUrl = document.getElementById('text-input-id-fb-logo-url').value;
	fbLink = document.getElementById('text-input-id-fb-logo-link').value;
	liUrl = document.getElementById('text-input-id-li-logo-url').value;
	liLink = document.getElementById('text-input-id-li-logo-link').value;

	var data = {
		logoUrl : logoUrl,
		logoLink : logoLink,
		fbUrl : fbUrl,
		fbLink : fbLink,
		liUrl : liUrl,
		liLink : liLink
	}

	sdk.setContent(FOOTER(data));
	sdk.setData(data);
}

sdk.getData(function (data) {

	logoUrl = data.logoUrl || '';
    logoLink = data.logoLink || '';
    fbUrl = data.fbUrl || '';
    fbLink = data.fbLink || '';
    liUrl = data.liUrl || '';
    liLink = data.liLink || '';

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});