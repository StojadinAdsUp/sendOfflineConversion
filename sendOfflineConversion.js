/**
 *  The function get the client id and the details of the transaction.
 *  Then it parse all the data to generate the URL that need to be pinged in order to sent information to Analytics.
 * @param {string} clientId
 * @param {object} data
 */
function sendOfflineConversion (clientId, data) {

    let products = data.products;

    let transactionId = data.actionField.id;
    let transactionValue = data.actionField.revenue;

    let config = [
        ['v', '1'],
        ['_v', 'j91d'],
        ['t', 'event'],
        ['cu', 'EUR'],
        ['je', '0'],
        ['tid', 'UA-202531242-1'],
        ['cid', encodeURI(clientId)],
        ['ec', 'Ecommerce'],
        ['ea', 'purchase'],
        ['el', encodeURI(transactionId)],
        ['ev', encodeURI(transactionValue)],
        ['ti', encodeURI(transactionId)],
        ['tr', encodeURI(transactionValue)],
        ['pa', 'purchase']
    ];

    for (let i  = 0; i < products.length; i++) {

        j = i+1;
        config.push([
            'pr' + j + 'id',
            encodeURI(products[i].id)
        ],[
            'pr' + j + 'nm',
            encodeURI(products[i].name)
        ],[
            'pr' + j + 'qt',
            encodeURI(products[i].quantity)
        ],[
            'pr' + j + 'pr',
            encodeURI(products[i].price)
        ],[
            'pr' + j + 'ca',
            encodeURI(products[i].category)
        ]);

    }

    let url = "https://www.google-analytics.com/collect?";

    for(let i = 0; i < config.length; i++) {
        url += i < config.length - 1 ? config[i][0] + "=" + config[i][1] + "&" : config[i][0] + "=" + config[i][1] + "";
    }

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
}
