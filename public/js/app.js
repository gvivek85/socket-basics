var socket = io();

socket.on('connect', function(){
	console.log('Connected to socket.io server');
});

socket.on('message', function(message){
	console.log('New Message');
	console.log(message.text);

	jQuery('.messages').append('<p>'+message.text +'</p>');
});

//handles new messages from form
var $form = jQuery('#message-form');

$form.on('submit',function(event){
	//When you dont want to submit the old fashioned way
	event.preventDefault();

	socket.emit('message', {
		text: $form.find('input[name=message]').val()
	});

	$form.find('input[name=message]').val('');
});

