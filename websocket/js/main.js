var connection = new WebSocket('ws://localhost:1111');

connection.onopen = function(){
  console.log("Connected via WebSocket");
}

connection.onmessage = function(message){
  console.log(message.data);
};
