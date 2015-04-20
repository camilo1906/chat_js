var app=requier('express')();

var http=requier('http').Server(app);

var io = requier('socket.io')(http);



io.on('connection',function(socket){

	console.log('listening on http://127.0.0.13000');

});


