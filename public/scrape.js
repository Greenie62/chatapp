

var practice=[
    {name:"justin",nickname:"guerro"},
    {name:"cindy",nickname:"brat"},
    {name:"victor",nickname:"viiiic"},
    {name:"jaime",nickname:"dajew"},
    {name:"cat",nickname:"cat"},
    {name:"julie",nickname:"gremlin"},
    {name:"ruby",nickname:"rooster"},
    {name:"donald",nickname:"drumpf"},
]
// I WANNA FIND CINDY, RUBY, N JULIE!!...but I gotta go through every one, everytime to check
practice.forEach(person=>{
    if(person.name === "cindy" || person.name === "julie" || person.name === "ruby"){
        console.log("hello there " + person.nickname + " !!")
    }
    else{
        console.log("Computer is doing shit for nothing")
    }
})
 // OR WE CHANGE IT TO A HASH MAP and allow for easy references
let hashMap={};

practice.forEach(({name,nickname})=>{
    hashMap[name]=nickname;
})
console.log("Hello there " + hashMap.cindy)
console.log("Hello there " + hashMap.ruby)
console.log("Hello there " + hashMap.julie)





