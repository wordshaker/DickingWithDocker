var amqp = require('amqplib/callback_api');
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

function PostScore(score, level){
  amqpConn.createChannel(function(err, ch) {
    var ex = 'write';
    var msg = '{"message":"'+score+' ' + level +'","colour":"#0000FF", "icon":""}';

    ch.assertExchange(ex, 'fanout', {durable: false});

    setInterval(function(){
      ch.publish(ex, '', new Buffer(msg));
      console.log(" [x] Sent %s", msg);  
	  }, 1000);
  });
}

connect();