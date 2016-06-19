'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var pairingsHelper = require('../pairings_helper');
chai.config.includeStack = true;

describe('Brewers Table', function() {
	var brewersTable = new pairingsHelper();
	var beer_style;

	describe('Get pairings for a beer', function() {
		context('with a valid beer style', function() {
			it('returns matching pairings', function() {
				beer_style = 'Kolsh';
				var pairings = brewersTable.getPairings(beer_style);
				expect(pairings).to.not.be.empty;
			});
		});

		context('with an unknown beer style', function() {
			it('returns not found message', function() {
				beer_style = 'unknown';
				var pairings = brewersTable.getPairings(beer_style);
				expect(pairings).to.equal("I'm sorry, I currently do not know the beer style unknown. What else can I help with?");
			});
		});

		context('with no beer style', function() {
			it('returns not found message', function() {
				var pairings = brewersTable.getPairings();
				expect(pairings).to.equal("I'm sorry, I currently do not know that beer. What else can I help with?");
			});
		});
	});
});