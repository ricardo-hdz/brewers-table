/*global require */
'use strict';

var _ = require('lodash');
var alexa = require('alexa-app');
var app = new alexa.app('brewers-table');
var PairingsHelper = require('./pairings_helper');

var SLOT_NAME = 'Style';

var defaultIntentHandler = function(req, res) {
	var prompt = 'For pairing suggestions, please tell me a beer style.';
	res.say(prompt).reprompt(prompt).shouldEndSession(false);
};

var defaultExitHandler = function(req, res) {
	res.say('Good bye! Enjoy your beer!').shouldEndSession(true);
};

app.launch(defaultIntentHandler);

app.intent('AMAZON.StartOverIntent', defaultIntentHandler);
app.intent('AMAZON.RepeatIntent', defaultIntentHandler);

app.intent('AMAZON.HelpIntent', function(req, res) {
	var prompt = 'I can help you to find a great pairing for your beer.<break strength="strong"/>' +
		'For example, you can ask me:<break strength="medium"/> pairings for Red Ale.' +
		'<break strength="strong"/>What style of beer do you want to pair?';
	var reprompt = 'Please tell me a beer style so I can help you with food, cheese and dessert pairings.';
	res.say(prompt).reprompt(reprompt).shouldEndSession(false);
});

app.intent('AMAZON.StopIntent', defaultExitHandler);
app.intent('AMAZON.CancelIntent', defaultExitHandler);

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