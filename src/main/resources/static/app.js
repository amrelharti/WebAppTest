document.addEventListener("DOMContentLoaded", function() {
    var socket = new SockJS('/ws');
    var stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function(messageOutput) {
            showMessage(messageOutput.body);
        });
    });

    window.sendMessage = function() {
        var message = document.getElementById('messageInput').value;
        stompClient.send("/app/chat", {}, message);
        document.getElementById('messageInput').value = '';
    };

    function showMessage(message) {
        var messagesDiv = document.getElementById('messages');
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});
