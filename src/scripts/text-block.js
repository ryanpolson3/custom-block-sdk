require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import TEXT_BLOCK from '../partials/js/text-block.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var description, descriptionFontSize, descriptionLineHeight, descriptionFontWeight, descriptionFontColor, nullDescription, paddingTop, paddingBottom, backgroundColor;

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
	document.getElementById('textarea-id-description').value = description;
	document.getElementById('text-input-id-description-font-size').value = descriptionFontSize;
	document.getElementById('text-input-id-description-line-height').value = descriptionLineHeight;
	document.getElementById('text-input-id-description-font-weight').value = descriptionFontWeight;
	document.getElementById('text-input-id-description-font-color').value = descriptionFontColor;
	document.getElementById('text-input-id-padding-bottom').value = paddingBottom;
	document.getElementById('text-input-id-padding-top').value = paddingTop;
	document.getElementById('text-input-id-background-color').value = backgroundColor;

}


function paintHtml() {
	description = formatTextArea(document.getElementById('textarea-id-description').value);
	nullDescription = doNullTitleBooleans(description);
	descriptionFontSize = document.getElementById('text-input-id-description-font-size').value;
	descriptionLineHeight = document.getElementById('text-input-id-description-line-height').value;
	descriptionFontWeight = document.getElementById('text-input-id-description-font-weight').value;
	descriptionFontColor = document.getElementById('text-input-id-description-font-color').value;
	paddingBottom = document.getElementById('text-input-id-padding-bottom').value;
	paddingTop = document.getElementById('text-input-id-padding-top').value;
	backgroundColor = document.getElementById('text-input-id-background-color').value;

	var data = {
		description: description,
		nullDescription: nullDescription,
		descriptionFontSize: descriptionFontSize,
		descriptionLineHeight: descriptionLineHeight, 
		descriptionFontWeight: descriptionFontWeight,
		descriptionFontColor: descriptionFontColor,
		paddingTop: paddingTop,
		paddingBottom: paddingBottom,
		backgroundColor: backgroundColor
	}

	sdk.setContent(TEXT_BLOCK(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	description = doTitle(data.description, data.nullDescription).title;
	nullDescription = doTitle(data.description, data.nullSubscription).nullTitle;
	descriptionFontSize = data.descriptionFontSize || '16';
	descriptionLineHeight = data.descriptionLineHeight || '24';
	descriptionFontWeight = data.descriptionFontWeight || '100';
	descriptionFontColor = data.descriptionFontColor || '000000';
	paddingTop = data.paddingTop || '0';
	paddingBottom = data.paddingBottom || '0';
	backgroundColor = data.backgroundColor || 'FFFFFF';
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

function nl2br (str, is_xhtml) {

	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; 
  
	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
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

