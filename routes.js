const router = require('express').Router();
const path = require('path');
const {v4} = require('uuid');
 

router.get('/',(req,res)=>{
    res.redirect('/zoom')
})



router.get("/zoom",(req,res)=>{
    res.sendFile(path.join(__dirname, "public/zoom.html"))
})


router.get("/chat",(req,res)=>{
    let room = v4();
    res.redirect(`/chat/${room}`)
})


router.get('/chat/:room',(req,res)=>{
    res.sendFile(path.join(__dirname, "public/chat.html"))
})



module.exports = router;