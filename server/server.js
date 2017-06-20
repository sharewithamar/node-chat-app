const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
//console.log(__dirname + '/../public');
//console.log(publicPath);

const app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
    console.log("new user connected");

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });

});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is up at${port}`);
})