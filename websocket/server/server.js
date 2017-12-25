var webSocketsServerPort = 1111;

var webSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
});

server.listen(webSocketsServerPort, function() {
    console.log((new Date()).toTimeString() + " Server is listening on port " +
        webSocketsServerPort);
});

var wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request',function(request) {
 var connection = request.accept(null, request.origin);
   var timerId = setInterval(function() {
     connection.sendUTF('Hello');
   }, 1500);
   setTimeout(function() {
     clearInterval(timerId);
   }, 10000);

 connection.on('message', function(message) {

})
});
