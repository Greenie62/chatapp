const express = require('express');


const app = express();
const PORT = process.env.PORT || 3010;
const routes = require("./routes");
const server = require("http").Server(app)
const io = require('socket.io')(server);




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.use(routes)

let users =[];


io.on('connection',socket=>{
    console.log(socket.id)

    socket.on('join-chat',({user,room})=>{
        console.log(user,room)
        users.push({id:socket.id,username:user,room});

        socket.join(room)

        socket.emit("message",{user:"admin",text:`${user} welcome to the chat!`})
        socket.broadcast.to(room).emit("message",{user:"admin",text:`${user} welcome to the chat!`})
        io.to(room).emit("roomData",{room:room,users})
    })

    socket.on('send-message',message=>{
        console.log(message)
        let idx = users.findIndex(u=>u.id === socket.id);

        console.log("User: ", users[idx]);
        io.to(users[idx].room).emit("message",{user:users[idx].username,text:message})
    })


    socket.on("disconnect",()=>{
        console.log("client disconnected")
    })
})


app.use(urlError)
app.use(errorHandler)


function urlError(req,res,next){
    res.status(404);
    let error = new Error(`Error-- ${req.originalUrl}`);
    next(error)
}

function errorHandler(err,req,res,next){
    res.status(500)
    res.json({
        message:err.message,
        stack:err.stack,
        custom:"ooops, looks like you goofed!"
    })
}




server.listen(PORT,console.log(`Logged onto port ${PORT}, ${process.env.USER}`))