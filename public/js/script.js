const myVideo = document.createElement("video");
myVideo.className='vid-box'
const vidGrid = document.querySelector(".video-grid");
myVideo.muted=true;
var recordBtn=document.querySelector(".record")
var output=document.querySelector(".output")


const main = async()=>{

    let stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true})
    projectVideo(myVideo,stream)
}


function projectVideo(vid,stream){

    vid.srcObject = stream;

    vid.addEventListener("loadedmetadata",()=>{
        console.log("loaded");
        vid.play()
    })

    vidGrid.appendChild(vid)

    // setTimeout(()=>{
    //     console.log("vid removed!")
    //     vid.remove()
    //     vidGrid.innerHTML=""
    // },3000)
}


main()


let SS = window.SpeechRecognition || window.webkitSpeechRecognition;

console.log(SS)

let recognition = new SS();


recognition.onstart=()=>{
    console.log("its started!")
}


recognition.onend=()=>{
    console.log("its ended!")
}


recognition.onresult=(e)=>{
    output.innerHTML=""
    console.log(e)
    let ourText=e.results[0][0].transcript;

    console.log(ourText);
    output.innerText=ourText
}


recordBtn.onclick=()=>{

    recognition.start()
}


