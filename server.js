var PORT = process.env.PORT || 3000;
var express = require('express');

var apps = express();
//Tells node to start a new server 
var http = require('http').Server(apps);

//Configuration for html files
apps.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
	console.log('Server started!');
});


