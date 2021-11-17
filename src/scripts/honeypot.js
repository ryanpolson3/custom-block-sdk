require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEMPLATE from '../partials/js/honeypot.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var honeypotUrl;

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
	document.getElementById('text-input-id-honeypot-url').value = honeypotUrl;
}


function paintHtml() {

	honeypotUrl = document.getElementById('text-input-id-honeypot-url').value;

	var data = {
		honeypotUrl : honeypotUrl,
	}

	sdk.setContent(TEMPLATE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	honeypotUrl = data.honeypotUrl || '';
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});