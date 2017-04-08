var request = require('request');

var options = {
  url: 'https://graph.ir.ee/organizations/ee-12295101/debts',
  headers: {
    'Authorization': 'Basic c2t5cGUyMDE3XzI6anhacTVDS2Q='
  }
};

function callback(error, response, body) {
	console.log('statusCode', response && response.statusCode);
	console.log(body);
}

request(options, callback); 