var recordBtn=document.querySelector(".record")
var output=document.querySelector(".output");


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
    console.log(e.results)
    let ourText=e.results[0][0].transcript;

    console.log(ourText);
    output.innerText=ourText

    animateLetters()
}


recordBtn.onclick=()=>{

    recognition.start()
}

let counter=0;
let refLength=0;

function animateLetters(){
    let text = output.innerHTML;
    counter = text.length;
    refLength = text.length;
    console.log(text);

    let html="";
    for(let i=0;i<text.length;i++){
        html += `<span class='animate'>${text[i]}</span>`
    }

    output.innerHTML=""
    output.innerHTML=html;

    animateSpans()
}



function animateSpans(){
    let spans = document.querySelectorAll('.animate');

   if(counter > 0){
        spans[refLength-counter].className += " red"
        counter--;
        setTimeout(()=>{
            animateSpans()
        },100);

    }
    else{
        console.log("recursion retired!")
        return;
    }

}