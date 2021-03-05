const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const participants = [];

io.on('connection', (socket) => {
    console.log('a user connected');
    io.emit('participants in room', participants);
    socket.on('login', (username) => {
        participants.push(username);
        io.emit('joined chatroom', username);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});