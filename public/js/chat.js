const socket = io();

let chatUsername = document.querySelector("#chat-username");
let chatMessage = document.querySelector("#chat-message");

socket.on('connect', ()=>{

    let chatRoom = document.querySelector('form');

    chatRoom.addEventListener('submit', (e) =>{
            //the code below will send a message to the server which means every user that connets has the opportunity to see the message

            socket.emit('postMessage', {
                username: chatUsername.value,
                message: chatMessage.value, 
            })
            chatMessage.value = '';
            chatMessage.focus();
    })

    socket.on('updateMessages', (data) =>{
        //grabbing the container to display the message

        let chatDisplay = document.querySelector('.chat-display');
        let newMessage = document.createElement('p');
    
        newMessage.innerHTML = `<strong>${data.username}</strong>:${data.message}`;
        chatDisplay.insertBefote(newMessage, chatDisplay.firstChild);
    }) 
})
 