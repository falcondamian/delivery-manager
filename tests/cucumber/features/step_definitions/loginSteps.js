var assert = require('assert');

(function () {

  'use strict';

  module.exports = function () {
  	
    this.Given(/^I am on the home page$/, function (next) {

      	this.browser.url(process.env.HOST).call(next);
    });

    this.When(/^I click on sign in link$/, function (callback) {

	    this.browser.
	      waitForExist('.navbar-toggle', 7000).
	      waitForVisible('.navbar-toggle').
	      click('.navbar-toggle').
	      waitForExist('.dropdown-toggle', 7000).
	      waitForVisible('.dropdown-toggle').
	      click('.dropdown-toggle').
	      call(callback);
	});

	this.When(/^I enter incorrect authentication information$/, function (callback) {
	    this.browser.
	      setValue('input#login-username-or-email', 'bad').
	      setValue('input#login-password', 'bad').
	      click('#login-buttons-password').
	      call(callback);
	});

	this.When(/^I enter my authentication information$/, function (callback) {
	    this.browser.
	      setValue('input#login-username-or-email', 'fake').
	      setValue('input#login-password', 'fake').
	      click('#login-buttons-password').
	      call(callback);
	});

	this.Then(/^I should see a user not found error$/, function (callback) {
	    this.browser.
	      waitForExist('.dropdown-menu', 7000).
	      waitForVisible('.dropdown-menu').
	      getText('.alert', function (err, username) {
	        assert.equal(username, 'El usuario no existe');
	      }).
	      call(callback);
  	});

	this.Then(/^I should be logged in$/, function (callback) {
	    this.browser.
	      waitForExist('.dropdown-toggle', 7000).
	      waitForVisible('.dropdown-toggle').
	      getText('.dropdown-toggle', function (err, username) {
	        assert.equal(username, 'fake');
	      }).
	      call(callback);
  	});

  };

})();
