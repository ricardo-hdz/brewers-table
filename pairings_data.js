'use strict';

function PairingsData() {
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
        },
       6: {
            'food': 'chicken, seafood, burgers, spicy cuisine',
            'cheese': 'port-salut, tangy cheese',
            'dessert': 'poached pears with dulce de leche, banana pound cake, pecan lace cookies'
        },
        7: {
            'food': 'roasted or grilled beef, lamb, game, smoked salmon',
            'cheese': 'mizithra, idizibal',
            'dessert': 'toffee pudding, chocolate chip shortbread'
        },
        8: {
            'food': 'roast pork, smoked sausage, grilled salmon',
            'cheese': 'gouda, cheshire',
            'dessert': 'almond or maple-walnut cake, pear fritters, cashew brittle'
        },
        9: {
            'food': 'barbecue, meat stews,steak, smoked rib roast',
            'cheese': 'washed-rind abbey, french morbier',
            'dessert': 'heavenly with milk chocolate, butter truffles, chocolate bread pudding'
        },
        10: {
            'food': 'cajun food, crab cakes, pheasant, roast turkey',
            'cheese': 'st. andre, explorateur',
            'dessert': 'apricot-amaretto tart, baklava, linzer torte'
        },
        11: {
            'food': 'roast beef, grilled lamb, roasted lamb, grilled game, roasted game',
            'cheese': 'double gloucester',
            'dessert': 'spiced plum-walnut tart, classic canolli, toffee apple crisp'
        },
        12: {
            'food': 'strong cheese or dessert',
            'cheese': 'stilton, walnuts',
            'dessert': 'chocolate hazelnut torte, toffee caramel cheesecake'
        },
        13: {
            'food': 'roasted barbecues, smoked barbecue, roasted sausages, smoked sausages, roasted meat, blackened fish',
            'cheese': 'tilsit, gruyère',
            'dessert': 'chocolate peanut butter cookies, toasted coconut cookie bars'
        },
        14: {
            'food': 'steak, meat pie, raw oysters',
            'cheese': 'dubliner cheddar',
            'dessert': 'chocolate soufflé, tiramisu, mocha mascarpone mousse'
        },
        15: {
            'food': 'barbecue beef, oaxacan mole, szechuan dishes',
            'cheese': 'aged cheddar',
            'dessert': 'chocolate espresso cake, cream puffs, profiteroles'
        },
        16: {
            'food': 'foie gras, smoked goose',
            'cheese': 'gouda, parmesan, cheddar',
            'dessert': 'dark chocolate truffles, chocolate raspberry mousse cake'
        },
        17: {
            'food': 'salads, seafood, sushi, weisswurst',
            'cheese': 'chèvre goat cheese, boursin',
            'dessert': 'strawberry shortcake, fruit trifle, key lime pie'
        },
        18: {
            'food': 'salads, sushi, vegetable dishes',
            'cheese': 'buffalo mozzarella, wisconsin brick',
            'dessert': 'fresh berries, fruit soup'
        },
        19: {
            'food': 'seafood dishes, steamed mussels',
            'cheese': 'mascarpone, herb cheese spread on crackers',
            'dessert': 'banana orange crèpes, blood orange sorbet, panna cotta with lemon'
        },
        20: {
            'food': 'salads, roast chicken, roast pork, hearty sausage',
            'cheese': 'soft-ripened goat, smoked gouda',
            'dessert': 'sweet potato tart, pecan strudel, banana cream pie'
        },
        21: {
            'food': 'roast pork, beef, smoked ham, game dishes',
            'cheese': 'aged provolone, spanish manchego',
            'dessert': 'tarte train, pine nut torta with dried fruit, banana souflée'
        },
        22: {
            'food': 'chicken, salads, salmon bratwurst',
            'cheese': 'vermont cheddar',
            'dessert': 'lemon shortbread, fresh berries with sabayon'
        },
        23: {
            'food': 'salads, seafood, pork, spicy asian, spicy latin, spicy cajun',
            'cheese': 'wisconsin butterkase',
            'dessert': 'blueberry trifle, cranberry-apple cobbler'
        },
        24: {
            'food': 'mexican, chicken, sausage, pork',
            'cheese': 'spicy jalapeño jack',
            'dessert': 'mango or coconut flan, almond biscotti, spice cake with pine nuts'
        },
        25: {
            'food': 'barbecue, sausages, roasted meat',
            'cheese': 'white cheddar, jack, brick',
            'dessert': 'passionfruit bread pudding, pears poached in doppelbock'
        },
        26: {
            'food': 'barbecue, sausages, roasted meat',
            'cheese': 'washed-rind münster',
            'dessert': 'pomegranate tart with walnuts, candied ginger pear cake'
        },
        27: {
            'food': 'thai barbecue, korean barbecue, fried chicken',
            'cheese': 'emmenthal swiss cheese',
            'dessert': 'apple almond strudel, white chocolate cheesecake, honey-walnut souflée'
        },
        28: {
            'food': 'duck, roasted pork shanks, cured meats',
            'cheese': 'limburger',
            'dessert': 'german chocolate cake, black forest cake, dried fruit, rum tart'
        }
    };

    var beerGroups = {
        'kolsh': masterPairingGroups[1],
        'cream ale': masterPairingGroups[1],
        'blonde ale': masterPairingGroups[1],
        'brittish-style bitter': masterPairingGroups[2],
        'bsb': masterPairingGroups[2],
        'pale ale': masterPairingGroups[3],
        'india pale ale': masterPairingGroups[4],
        'ipa': masterPairingGroups[4],
        'double india pale ale': masterPairingGroups[5],
        'imperial india pale ale': masterPairingGroups[5],
        'double ipa': masterPairingGroups[5],
        'imperial ipa': masterPairingGroups[5],
        'amber ale': masterPairingGroups[6],
        'red ale': masterPairingGroups[6],
        'scotch ale': masterPairingGroups[7],
        'wee heavy': masterPairingGroups[7],
        'brown ale': masterPairingGroups[8],
        'altbier': masterPairingGroups[8],
        'abbey dubbel': masterPairingGroups[9],
        'dubbel': masterPairingGroups[9],
        'abbey tripel': masterPairingGroups[10],
        'tripel': masterPairingGroups[10],
        'strong golden ale': masterPairingGroups[10],
        'strong ale': masterPairingGroups[11],
        'old ale': masterPairingGroups[11],
        'barleywine': masterPairingGroups[12],
        'porter': masterPairingGroups[13],
        'stout': masterPairingGroups[14],
        'dry stout': masterPairingGroups[14],
        'sweet stout': masterPairingGroups[15],
        'oatmeal stout': masterPairingGroups[15],
        'milk stout': masterPairingGroups[15],
        'imperial stout': masterPairingGroups[16],
        'hefeweizen': masterPairingGroups[17],
        'american wheat ale': masterPairingGroups[18],
        'wheat ale': masterPairingGroups[18],
        'witbier': masterPairingGroups[19],
        'dunkelweizen': masterPairingGroups[20],
        'weizenbock': masterPairingGroups[21],
        'pilsener': masterPairingGroups[22],
        'pils': masterPairingGroups[22],
        'helles': masterPairingGroups[23],
        'dortmunder': masterPairingGroups[23],
        'oktoberfest': masterPairingGroups[24],
        'marzen': masterPairingGroups[24],
        'vienna': masterPairingGroups[24],
        'amber lager': masterPairingGroups[25],
        'amber': masterPairingGroups[25],
        'dark lager': masterPairingGroups[26],
        'dunkel': masterPairingGroups[26],
        'schwarzbier': masterPairingGroups[26],
        'maibock': masterPairingGroups[27],
        'pale bock': masterPairingGroups[27],
        'doppelbock': masterPairingGroups[28]
    };

    return {
        beerGroups: beerGroups
    };
}

module.exports = PairingsData;
