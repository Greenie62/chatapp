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


io.on('connection',socket=>{
    console.log(socket.id)


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