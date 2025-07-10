let bnt=document.querySelector("button");
let ipt=document.querySelector("input");

let ul=document.querySelector("ul");

bnt.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText=ipt.value;

    let delbtn =document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");


    item.appendChild(delbtn);
    ul.appendChild(item);
    ipt.value="";
});

ul.addEventListener("click",function(event){
   // console.log(event.target.nodeName);//yeh targate ek property hai jo bta deti hai ki konse element ne wo property active ki hai
    //or nodeName batati hai uss elemet ka naam ki kiski wajah se active hui h(kya wo para tha ya kya wo div tha ya wo button tha)
    if(event.target.nodeName =="BUTTON");
    let listItem =event.target.parentElement;
    listItem.remove();
    console.log("clicked");
})


