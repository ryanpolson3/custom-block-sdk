require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import HEADER from '../partials/js/footer.js';

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

	sdk.setContent(HEADER(data));
	sdk.setData(data);
}

sdk.getData(function (data) {

	logoUrl = data.logoUrl || 'https://image.s12.sfmc-content.com/lib/fe3011727364047c731778/m/1/76435029-6997-488c-930d-d37a44f0e786.png';
    logoLink = data.logoLink || 'https://www.shift7digital.com/';
    fbUrl = data.fbUrl || 'https://image.s12.sfmc-content.com/lib/fe2f11727364047c7d1373/m/1/ecdafbbc-9b7f-476d-8ad8-dfb0b3bacd40.png';
    fbLink = data.fbLink || 'https://www.facebook.com/Shift7Digital/';
    liUrl = data.liUrl || 'https://image.s12.sfmc-content.com/lib/fe2f11727364047c7d1373/m/1/c807327f-0143-417c-95a4-f78f08fcbf83.png';
    liLink = data.liLink || 'https://www.linkedin.com/company/shift7digital/';

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});