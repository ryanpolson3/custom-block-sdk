require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEMPLATE from '../partials/js/single-button.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var buttonUrlSingle, buttonTextSingle, backgroundColorSingle, borderColorSingle, fontSizeSingle, lineHeightSingle, fontWeightSingle, fontColorSingle, centerButtonSingle, marginTopSingle, marginBottomSingle;

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
	document.getElementById('text-input-button-url').value = buttonUrlSingle;
	document.getElementById('text-input-button-text').value = buttonTextSingle;
	document.getElementById('text-input-id-background-color').value = backgroundColorSingle;
	document.getElementById('text-input-id-border-color').value = borderColorSingle;
	document.getElementById('text-input-id-button-font-size').value = fontSizeSingle;
	document.getElementById('text-input-id-button-line-height').value = lineHeightSingle;
	document.getElementById('text-input-id-button-font-weight').value = fontWeightSingle;
	document.getElementById('text-input-id-button-font-color').value = fontColorSingle;
	document.getElementById('text-input-id-button-top-margin').value = marginTopSingle;
	document.getElementById('text-input-id-button-bottom-margin').value = marginBottomSingle;
	document.getElementById('checkbox-center-button').checked = centerButtonSingle;
	
}


function paintHtml() {

	buttonUrlSingle = document.getElementById('text-input-button-url').value;
	buttonTextSingle = document.getElementById('text-input-button-text').value;
	backgroundColorSingle = document.getElementById('text-input-id-background-color').value;
	borderColorSingle = document.getElementById('text-input-id-border-color').value;
	fontSizeSingle = document.getElementById('text-input-id-button-font-size').value;
	lineHeightSingle = document.getElementById('text-input-id-button-line-height').value;
	fontWeightSingle = document.getElementById('text-input-id-button-font-weight').value;
	fontColorSingle = document.getElementById('text-input-id-button-font-color').value;
	marginTopSingle = document.getElementById('text-input-id-button-top-margin').value;
	marginBottomSingle = document.getElementById('text-input-id-button-bottom-margin').value;
	centerButtonSingle = document.getElementById('checkbox-center-button').checked;


	var data = {
	buttonUrlSingle: buttonUrlSingle,
	buttonTextSingle: buttonTextSingle,
	backgroundColorSingle: backgroundColorSingle,
	borderColorSingle: borderColorSingle,
	fontSizeSingle: fontSizeSingle,
	fontColorSingle: fontColorSingle,
	fontWeightSingle: fontWeightSingle,
	lineHeightSingle: lineHeightSingle,
	marginTopSingle: marginTopSingle,
	marginBottomSingle: marginBottomSingle,
	centerButtonSingle: centerButtonSingle
	}

	sdk.setContent(TEMPLATE(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	buttonUrlSingle = data.buttonUrlSingle || 'https://www.fleetpride.com';
	buttonTextSingle = data.buttonTextSingle || 'Click Here';
	backgroundColorSingle = data.backgroundColorSingle || 'ee3124';
	borderColorSingle = data.borderColorSingle || 'ee3124';
	fontSizeSingle = data.fontSizeSingle || '14';
	fontColorSingle = data.fontcolorSingle || 'ffffff';
	fontWeightSingle = data.fontWeidghtSingle || '700';
	lineHeightSingle = data.lineHeightSingle || '22';
	marginTopSingle = data.marginTopSingle || '20';
	marginBottomSingle = data.marginBottomSingle || '20';
	centerButtonSingle = data.centerButtonSingle || false;

	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});