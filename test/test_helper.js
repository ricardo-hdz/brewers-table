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
	var expectObject = {
		'food': 'chicken, salads, salmon, bratwurst, monterey jack cheese',
		'cheese': 'monterey jack, nutty cheese',
		'dessert': 'light apricot or mandarin cake, lemon custard tart'
	};
	var template = 'Suggested food pairings for ${beer_style} are: food: ${food}, cheese: ${cheese}, dessert: ${dessert}';

	describe('Get pairings for a beer', function() {
		context('with a valid beer style', function() {
			it('returns matching pairings', function() {
				beer_style = 'Kolsh';
				var pairings = brewersTable.getPairings(beer_style);


				expect(pairings).to.not.be.empty;
				expect(pairings).to.deep.equal(expectObject);
			});

			it('returns formatted parings response', function(){
				beer_style = 'Kolsh';
				var expected = 'Suggested food pairings for Kolsh are: food: ' +
					expectObject.food + ', cheese: ' + expectObject.cheese +', dessert: ' + expectObject.dessert;
				var pairings = brewersTable.getPairings(beer_style);
				var formattedResponse = brewersTable.formatPairingsResponse(beer_style, pairings, template);

				expect(formattedResponse).to.deep.equal(expected);
			});;
		});

		context('with an unknown beer style', function() {
			it('returns not found message', function() {
				beer_style = 'unknown';
				var pairings = brewersTable.getPairings(beer_style);
				expect(pairings).to.equal(null);
			});
		});

		context('with no beer style', function() {
			it('returns not found message', function() {
				var pairings = brewersTable.getPairings();
				expect(pairings).to.equal(null);
			});
		});
	});
});