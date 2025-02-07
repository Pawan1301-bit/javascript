const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click",()=> {      //event, handler(function)
    alert("button is clicked");
});


//writing inline function in js 
//arrow function
console.log("the sum of 2 number is : ", ((a, b) => a+b)(5, 3));
// ( (a, b) => a+b ) (5, 3)
//immediately invoked function expression (IIFE)
console.log("the sum of 2 number is : ", (function(a, b){return a+b;})(5, 3));


const run = function(){
    alert("second button is clicked");
}

const box1 = document.getElementById("box1");
box1.addEventListener("click",()=> {      //event, handler(function)
    alert("first box");
    // e.stopPropogation();
});
const box2 = document.getElementById("box2");
box2.addEventListener("click",(e)=> {      //event, handler(function)
    e.stopPropagation();
    alert("second box");
});
const box3 = document.getElementById("box3");
box3.addEventListener("click",(e)=> {      //event, handler(function)
    alert("third box");
    e.stopPropagation();
});
