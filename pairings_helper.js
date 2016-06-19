'use strict';
var _ = require('lodash');

function PairingsHelper() {
    var masterPairingGroups = {
        1: {
            'food': 'chicken, salads, salmon, bratwurst, monterey jack cheese',
            'cheese': 'monterey jack, nutty cheese',
            'dessert': 'light apricot or mandarin cake, lemon custard tart'
        },
        2: {
            'food': 'roast chicken or pork, fish and chips, mild cheese',
            'cheese': 'lancashire or leicester',
            'dessert': 'oatmeal raisin walnut cookies'
        },
        3: {
            'food': 'meat pie, english cheese, burgers',
            'cheese': 'cheddar or derby with sage',
            'dessert': 'pumpkin flan, maple bread pudding, bananas foster'
        },
        4: {
            'food': 'strong, spicy food like curries, bold and sweet desserts like carrot cake',
            'cheese': 'gorgonzola or cambozola',
            'dessert': 'caramel apple tart, ginger spice cake, persimmon rice pudding'
        },
        5: {
            'food': 'smoked beef brisket, grilled lamb, southern chicken fried steak',
            'cheese': 'american or blue cheese',
            'dessert': 'carrot cake, caramel cheesecake, creme brulee'
        }
    };

    var masterData = {
        'kolsh': masterPairingGroups[1],
        'cream ale': masterPairingGroups[1],
        'blonde ale': masterPairingGroups[1],
        'brittish-style bitter': masterPairingGroups[2],
        'bsb': masterPairingGroups[2],
        'pale ale': masterPairingGroups[3]
    };

    var getPairings = function(beerStyle) {
        beerStyle = !_.isEmpty(beerStyle) ? beerStyle.toLowerCase() : null;
        if (_.has(masterData, beerStyle)) {
            return masterData[beerStyle];
        }
        return null;
    };

    var formatPairingsResponse = function(beer, pairingsData, template) {
        var template = template || 'Suggested food pairings for ${beer_style} beer are:<break strength="string"/> food: ${food},<break strength="medium"/> cheese: ${cheese},<break strength="medium"/> dessert: ${dessert}.';
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