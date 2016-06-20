'use strict';

var _ = require('lodash');
var alexa = require('alexa-app');
var app = new alexa.app('brewers-table');
var PairingsHelper = require('./pairings_helper');

var SLOT_NAME = 'Style';

app.launch(function(req, res) {
	var prompt = 'For pairing suggestions, tell me a beer style.';
	res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('beerpairings',
	{
		'slots': {
			'Style': 'KNOWN_BEER_STYLES'
		},
		'utterances': [
			'{|pairings} {|for} {-|Style}',
			'{|what goes} with {-|Style}',
			'suggestions {|with|for} {-|Style}',
			'suggest me {|pairings|food} {|for|with} {-|Style}',
			'pair {|my} {-|Style}'
		]
	},
	function(req, res) {
		var beerStyle = req.slot(SLOT_NAME);
		var reprompt = 'Tell me a beer style to provide you pairing suggestions.';

		if (_.isEmpty(beerStyle)) {
			var prompt = 'I\'m sorry, I currently do not know that beer style. What else can I help with?';
			res.say(prompt).reprompt(reprompt).shouldEndSession(false);
			return true;
		} else {
			var helper = new PairingsHelper();
			var pairings = helper.getPairings(beerStyle);
			if (!_.isEmpty(pairings)) {
				console.log(beerStyle);
				console.log(pairings);
				var formattedResponse = helper.formatPairingsResponse(beerStyle, pairings);
				console.log(formattedResponse);
				res.say(formattedResponse).send();
			} else {
				var prompt = 'I\'m sorry, I currently do not know that new beer style called ' +
					beerStyle + '. What else can I help with?';

				res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
			}
			return false;
		}
	}
);

module.exports = app;