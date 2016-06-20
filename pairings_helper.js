'use strict';
var _ = require('lodash');
var data = require('./pairings_data')();

function PairingsHelper() {
    var getPairings = function(beerStyle) {
        beerStyle = !_.isEmpty(beerStyle) ? beerStyle.toLowerCase() : null;
        if (_.has(data.beerGroups, beerStyle)) {
            return data.beerGroups[beerStyle];
        }
        return null;
    };

    var formatPairingsResponse = function(beer, pairingsData, template) {
        var template = template || 'Suggested food pairings for ${beer_style} beer are:<break strength="strong"/> food: <break strength="medium"/>${food},<break strength="strong"/> cheese: <break strength="medium"/>${cheese},<break strength="strong"/> dessert: <break strength="medium"/>${dessert}.';
        template = _.template(template);

        return template({
            beer_style: beer,
            food: pairingsData.food,
            cheese: pairingsData.cheese,
            dessert: pairingsData.dessert
        });
    };

    return {
        getPairings: getPairings,
        formatPairingsResponse: formatPairingsResponse
    };
}

module.exports = PairingsHelper;