// require the dependencies we installed...
var app = require('express')();
var client = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');
var WebSocket = require('ws');

// set up clients and connections...
var socket = new WebSocket('ws://display:3006');

var url = 'mongodb://mongo:27017/test';
client.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

// wire up middleware...
app.use(bodyParser.json());

// wire up port...
app.set('port', (process.env.PORT || 80));

// write POST handler...
app.post('/write/', function(req, res) {
	
	// TODO: validate the model...

	client.connect(url, function(err, db){
		assert.equal(null, err);
		insertDocument(req.body, db, function(){
			db.close();
		});
	});

	socket.send(JSON.stringify(req.body));

	// TODO: send a more appropriate response...
	res.send(req.body);
});

// verify the application is running...
app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});

// additional functions...
var insertDocument = function(document, db, callback){

	// TODO: have the insert produce a nicer looking structure instead of "_id" and "document"...

	db.collection('requests').insertOne({document},
	function(err, result){
		assert.equal(err, null);
		console.log("Inserted a document into the requests collection.");
		callback();
	});
}