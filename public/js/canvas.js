let expressionsDOM=document.querySelector(".expressions")
let commentsBtn=document.querySelector(".commentsBtn")
let pictureBtn=document.querySelector(".pictureBtn")
let savePicBtn=document.querySelector(".savepicbtn")
let galleryDOM=document.querySelector(".gallery")
let canvas=document.querySelector("#canvas")
let commentsOn=false;
let commentsInterval;

var expressions=[
    "Nice","Thats siiiick!!","Ohhhh","Wowwww","hey thats awesome","crushing!!","heeyy!!"
];






function pickExpressions(){
    let random=Math.random() * expressions.length | 0;
    console.log("Expression: " + expressions[random])
        animateExpression(expressions[random])

}


function animateExpression(expression){
    let pTag=document.createElement("p");
    pTag.innerText=expression;
    pTag.className='float'

    expressionsDOM.appendChild(pTag)

    setTimeout(()=>{

        expressionsDOM.removeChild(pTag)
    },1200)
}


commentsBtn.onclick=toggleComments;


function toggleComments(){

    if(!commentsOn){
        commentsBtn.innerText="View Comments 😜"
        commentsOn= true
        commentsInterval=setInterval(pickExpressions,((Math.random()* 1000 | 0) + 300))

    }
    else{
        commentsBtn.innerText="Hide 🙈"
        commentsOn = false;
        clearInterval(commentsInterval)
    }
}


console.log(pictureBtn)

// let width = 500,
//     height = 500,
//     filter = 'none',
//     streaming = false;


pictureBtn.onclick=takePic;


function takePic(){
    console.log("takepic fx fired!")

    let context = canvas.getContext('2d');

    // if(width && height){
        canvas.width=500;
        canvas.height=500;

        context.drawImage(myVideo,0,0,500,500)
        console.log("this is firing")

    // }
}


savePicBtn.onclick=savePic;

function savePic(){

    let imgUrl = canvas.toDataURL("/image/png");

    let img = document.createElement("img");

    img.setAttribute("src",imgUrl);
    img.className='imagecard'

    if(filterOption){
        img.style.filter=filterOption
    }

    console.log(img);

    galleryDOM.appendChild(img)
}