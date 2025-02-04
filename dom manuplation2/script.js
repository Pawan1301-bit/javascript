//inserting and  deleting elements using dom 
let a = document.querySelector(".box").innerHTML;
console.log(a);
// a = "now this is updated";

let cont = document.querySelector(".box");
cont.setAttribute("style", "color: red");


//adding a newelement
let element = document.createElement("div");    //created a div element
element.innerHTML = "i am  newly inserted"
element.setAttribute("class" , "box");  
document.querySelector(".container").append(element);
//append -- to add at the end 
//preprend -- to add at the begning


let element2 = document.createElement("div");    
element2.innerHTML = "just for trial"
element2.setAttribute("class" , "box");  
document.querySelector(".container").append(element2);


//removing the last element 
let container = document.querySelector(".container");
let lastbox = container.lastElementChild;
if(lastbox){
    lastbox.remove();
}