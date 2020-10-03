
// var user= prompt("Hey user, whats your name?")
var user="guest";
const socket = io.connect("http://localhost:3010");

var messagesDOM=document.querySelector(".chatarea")
var messageInput=document.querySelector("input[name='message']")
var messageBtn=document.querySelector(".messageBtn")
var userlistDOM=document.querySelector(".userlistarea")
// var messageInput=document.querySelector(".messageInputArea")



socket.emit("join-chat",({user,room:'testroom'}))


socket.on('message',message=>{
    console.log(message)
    let {user,text} = message;
    printMessage(text,user)
})


messageBtn.onclick=()=>{

socket.emit('send-message',messageInput.value);

}

socket.on('roomData',data=>{
    console.log(data);
    printUsers(data.users)
})



function printMessage(message,user){
    let messageDiv=document.createElement("div");
    messageDiv.className="messageDiv"
    if(user === user){
        console.log("add a diff class!")
        messageDiv.classList.add('flex-end')
    }
    else{
        messageDiv.classList.add('flex-start')

    }
    messageDiv.innerHTML=`<h4>${message}</h4><h5>${user}</h5>`

    messagesDOM.appendChild(messageDiv)
}


function printUsers(users){
    var html="";
    let unique=[];
    users.forEach(u=>{
        if(unique.indexOf(u.username) === -1){
            unique.push(u.username)
        }
    })

    unique.forEach(u=>{
        html += `<li class='user-item'>${u}</li>`
    })
    userlistDOM.innerHTML = html;
}