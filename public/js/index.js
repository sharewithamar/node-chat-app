var socket = io();
socket.on('connect', function () {
    console.log("connected to server");

    socket.emit('createEmail',{
        name:'Amar from client',
        sub: 'Learning Node'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New Email',email);
});