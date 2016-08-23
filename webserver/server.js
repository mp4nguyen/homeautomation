var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,{noInfo: true,publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/controlRelay',function(req,res){
  var replay = req.body;
  console.log('replay controll = ',replay);
  io.emit('pinoutput',{pinNumber:replay.relayNumber,value:replay.value});
  res.send('OK');
});


var io = require('socket.io')(http);
io.on('connection', function(socket){
  var address = socket.handshake.address;
  console.log(socket.handshake.address,socket.conn.remoteAddress,socket.request.client._peername.address);
  console.log('Home server connected to client, id = ',socket.id,' from ' +  address );

  socket.emit('welcome','welcome home !');

  socket.emit('pinoutput',{pinNumber:11,value:0});

  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});



app.use('/css',  express.static(__dirname + '/css'));
app.use('/img',  express.static(__dirname + '/img'));
app.use(express.static('./dist'));
app.use('/',function(req,res){
  console.log('request index file');
  res.sendFile(path.resolve('client/index.html'));
});


http.listen(8000,()=>{
  console.log('Server is running on port 8000');
});
