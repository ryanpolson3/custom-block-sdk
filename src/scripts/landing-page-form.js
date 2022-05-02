require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

import LANDING_PAGE_FORM from '../partials/js/landing-page-form.js';

var SDK = require('blocksdk');
var sdk = new SDK(null, null, true); // 3rd argument true bypassing https requirement: not prod worthy

var dataExtension, sourceCampaign, sourceLandingPage, accountNumber, phone, company, jobTitle, city, state, zipCode ;

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
	document.getElementById('text-input-id-data-extension').value = dataExtension;
	document.getElementById('text-input-id-source-campaign').value = sourceCampaign;
	document.getElementById('text-input-id-source-landing-page').value = sourceLandingPage;
	document.getElementById('checkbox-unique-id-phone').checked = phone;
	document.getElementById('checkbox-unique-id-company').checked = company;
	document.getElementById('checkbox-unique-id-job-title').checked = jobTitle;
	document.getElementById('checkbox-unique-id-city').checked = city;
	document.getElementById('checkbox-unique-id-state').checked = state;
	document.getElementById('checkbox-unique-id-zip-code').checked = zipCode;
	document.getElementById('checkbox-unique-id-account-number').checked = accountNumber;

}


function paintHtml() {
	dataExtension = document.getElementById('text-input-id-data-extension').value;
	sourceCampaign = document.getElementById('text-input-id-source-campaign').value;
	sourceLandingPage = document.getElementById('text-input-id-source-landing-page').value;
	phone = document.getElementById('checkbox-unique-id-phone').checked;
	company = document.getElementById('checkbox-unique-id-company').checked;
	jobTitle = document.getElementById('checkbox-unique-id-job-title').checked;
	city = document.getElementById('checkbox-unique-id-city').checked;
	state = document.getElementById('checkbox-unique-id-state').checked;
	zipCode = document.getElementById('checkbox-unique-id-zip-code').checked;
	accountNumber = document.getElementById('checkbox-unique-id-account-number').checked;
	

	var data = {
		dataExtension : dataExtension,
		sourceCampaign : sourceCampaign,
		sourceLandingPage : sourceLandingPage,
		phone : phone,
		company : company,
		jobTitle : jobTitle,
		city : city,
		state : state,
		zipCode : zipCode,
		accountNumber : accountNumber
	}

	sdk.setContent(LANDING_PAGE_FORM(data));
	sdk.setData(data);
}

sdk.getData(function (data) {
	dataExtension = data.dataExtension || '';
	sourceCampaign = data.sourceCampaign || ''
	sourceLandingPage = data.sourceLandingPage || '';
	phone = data.phone || 'false';
	company = data.company || 'false';
	jobTitle = data.jobTitle || 'false';
	city = data.city || 'false';
	state = data.state || 'false';
	zipCode = data.zipCode || 'false';
	accountNumber = data.accountNumber || 'false';
	
	paintSettings();
	paintHtml();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(paintHtml, 500)();
});


