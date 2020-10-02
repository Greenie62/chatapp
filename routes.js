const router = require('express').Router();
const path = require('path')


router.get('/',(req,res)=>{
    res.redirect('/chat')
})



router.get("/chat",(req,res)=>{
    res.sendFile(path.join(__dirname, "public/chat.html"))
})



module.exports = router;