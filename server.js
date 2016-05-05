var PORT = process.env.PORT || 3000;
var express = require('express');

var apps = express();
//Tells node to start a new server 
var http = require('http').Server(apps);

var io = require('socket.io')(http);


//Configuration for html files
apps.use(express.static(__dirname + '/public'));

io.on('connection', function(){
	console.log('User connected via socket.io');
});

http.listen(PORT, function(){
	console.log('Server started!');
});


