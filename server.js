var PORT = process.env.PORT || 3000;
var express = require('express');

var apps = express();
//Tells node to start a new server 
var http = require('http').Server(apps);

var io = require('socket.io')(http);


//Configuration for html files
apps.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
	console.log('User connected via socket.io');

	socket.on('message', function(message){
		console.log('Message recevied: ' + message.text);
		socket.broadcast.emit('message', message);
	});

	socket.emit('message',{
		text: 'Welcome to chat application!!'
	});
});

http.listen(PORT, function(){
	console.log('Server started!');
});


