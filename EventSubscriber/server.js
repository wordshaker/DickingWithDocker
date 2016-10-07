var amqp = require('amqplib/callback_api');
var request = require('request');
var amqpConn = null;

function connect(){
  amqp.connect('amqp://rabbitmq', function(err, conn) {
      if(err){
        console.error("[AMQP]", err.message);
        return setTimeout(connect, 1000);
      }

      conn.on("error", function(err){
          if(err.message != "Connection closing"){
            console.error("[AMQP] conn error", err.message);
          }
      });

      conn.on("close", function(){
        console.error("[AMQP] reconnecting...")
        return setTimeout(connect, 1000);
      });

      console.log("[AMQP] connected...")
      
      amqpConn = conn;

      whenConnected();
  });
}

function whenConnected(){
  amqpConn.createChannel(function(err, ch) {
    var ex = 'write';

    ch.assertExchange(ex, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      ch.bindQueue(q.queue, ex, '');

	// "Team America" style throw up on the floor....
	// How the frig do I subscribe to a queue using this infernal library?....
	setInterval(function(){
		ch.consume(q.queue, function(msg) {
      var bodyAsString = msg.content.toString();

			console.log("[x] %s", bodyAsString);

      // post to the Api endpoint...
      request.post('http://api/write', 
        {json: JSON.parse(bodyAsString)},
        function(error, response, body){
          if(!error && response.statusCode == 200){
            console.log(body);
          }
          else{
            console.error('Error posting to the Api... | ' + 'response.statusCode | ' + body)
          }
        }
      );
		}, {noAck: true});
	}, 1000);
    });
  });
}

connect();