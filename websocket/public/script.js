var socket = io();

var chatRoom = {
    messages: [],
    participants: [],
    addChatMessage(message) {
        const item = document.createElement('li');

        const username = document.createElement('span');
        username.textContent = message.username;
        username.className = "message__username";

        const body = document.createElement('span');
        body.textContent = message.message;
        body.className = "message__body";

        messages.appendChild(item);
        item.appendChild(username);
        item.appendChild(body);
        window.scrollTo(0, document.body.scrollHeight);
    },
    initializeParticipants(participants) {
        this.participants = participants;
        this.updateNumberOfParticipants();
    },
    addParticipant(username) {
        this.participants.push(username);
        this.updateNumberOfParticipants();  
    },
    updateNumberOfParticipants() {
        const numberOfParticipants = document.getElementById('counter');
        numberOfParticipants.textContent = this.participants.length;    
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
    chatForm.style.display = 'flex';
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

socket.on('joined chatroom', function (username) {
    chatRoom.addParticipant(username);
})

socket.on('participants in room', function (participants) {
    chatRoom.participants = participants;
})