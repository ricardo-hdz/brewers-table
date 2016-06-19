'use strict';
var _ = require('lodash');

function PairingsHelper() {
    var masterData = {
        'Kolsh': {
            'food': {},
            'cheese': {},
            'dessert': {}
        }
    };

    var getPairings = function(beerStyle) {
        if (!_.isEmpty(beerStyle)) {
            if (_.has(masterData, beerStyle)) {
                return masterData[beerStyle];
            } else {
                return "I'm sorry, I currently do not know the beer style " + beerStyle + ". What else can I help with?";
            }
        } else {
            return "I'm sorry, I currently do not know that beer. What else can I help with?";
        }
    };

    var getPairingsData = function() {

    };

    return {
        getPairings: getPairings
    };
}

module.exports = PairingsHelper;