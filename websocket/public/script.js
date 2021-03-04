var socket = io();

var chatRoom = {
    messages: [],
    participants: [],
    addChatMessage(message) {
        const username = message.username;
        var body = message.message;
        var item = document.createElement('li');
        item.textContent = body;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    }
};

var user = {
    username: undefined,
    login: function(username) {
        this.username = username;
        socket.emit('login', username);
    },
    sendMessage: function(message) {
        socket.emit('chat message', { message, username: this.username });
    }
};

function hideUsernameForm() {
    const usernameForm = document.getElementById('username-form');    
    usernameForm.remove();

    
    const messages = document.getElementById('messages');
    messages.style.display = 'block';
    const chatForm = document.getElementById('chat-form');
    chatForm.style.display = 'block';
}

var usernameForm = document.getElementById('username-form');
var chatForm = document.getElementById('chat-form');
var usernameInput = document.getElementById('username');
var input = document.getElementById('input');

usernameForm.addEventListener('submit', function (e) {
    console.log('Blabla');
    e.preventDefault();
    if (usernameInput.value) {
        user.login(usernameInput.value);
        usernameInput.value = '';
        hideUsernameForm();
    }
});

chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        user.sendMessage(input.value);
        input.value = '';
    }
});

socket.on('chat message', function (msg) {
    chatRoom.addChatMessage(msg);
});