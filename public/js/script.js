const myVideo = document.createElement("video");
myVideo.className='vid-box'
const vidGrid = document.querySelector(".video-grid");
myVideo.muted=true;
let filterOption;
var filterSelectBox = document.querySelector("#filters")
// var expressionsDOM = document.querySelector(".expressions")


var filters=[{type:"sepia",value:"100%"},
             {type:"grayScale",value:"100%"},
             {type:"contrast",value:"200%"},
             {type:"hue-rotate",value:"90deg"},
             {type:"blur",value:"3px"},
]



function createHashMap(arr){
    let hash={};
    arr.forEach(({type,value})=>{
        hash[type] = value
    })
    return hash;
}

let hashMap=createHashMap(filters)



function populateSelectBox(obj){
    let html = "";
    let counter=0;

    for(let i in obj){
        html +=`
        <option key=${i} val=${obj[i]} value=${counter}>${i}</option>`
        counter++
    }
    console.log(html)
    html += `<option key='none' val='none' value=${5}>None</option>`;

    filterSelectBox.innerHTML = html
}

populateSelectBox(hashMap)


            
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

  
}


 main()


filterSelectBox.onchange=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target)
    var options = document.querySelectorAll('option');

    console.log(options)
    if(e.target.value === "5"){
        console.log('apply none');
        myVideo.style.filter='none'
        return;
    }

    console.log(options[e.target.value])
    let key = options[e.target.value].getAttribute("key")
    let val = options[e.target.value].getAttribute("val")
    console.log(key,val)
    // console.log(`${e.target.keyval}(${e.target.value})`)
      myVideo.style.filter=`${key}(${val})`
      filterOption=`${key}(${val})`
   // myVideo.style.filter='grayScale(100%)'
}





