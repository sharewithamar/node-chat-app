var socket = io();
socket.on('connect', function () {
    console.log("connected to server");

 /*   socket.emit('createMessage',{
        from:'Amar',
        text: 'Learning socket io'
    })*/
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message',message);
});