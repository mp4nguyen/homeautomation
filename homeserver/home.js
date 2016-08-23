var socket = require('socket.io-client')('http://localhost:8000');

socket.on('connect', function(){
  console.log('hello');
});

socket.on('welcome', function(data){
  console.log('server reply = ',data);
});

socket.on('disconnect', function(){

});
