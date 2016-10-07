var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 3006 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {
      client.send(message);
    });
  });
  ws.send(JSON.stringify({message:'Connected...'}));
});
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname , 'index.html'));
});
app.get('/a.css', function(req, res){
  res.sendFile(path.join(__dirname , 'animate.css'));
});
http.listen(3005, function(){
  console.log('listening on *:3005');
});