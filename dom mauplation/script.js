let cont = document.body.childNodes[1]; //the first node of the body -- container
console.log(cont.childNodes);   //all the nodes inside the container -- like boxes etc 
// console.log(cont.firstElementChild); -- print the first child -- box 
// let col = cont.firstElementChild.styl 
console.log(document.body.children[0].children);    //all elements inside the container


//to print all the child we use childnodes -- this will also include the text for ignoring the text we use children
cont.children[0].style.backgroundColor = "red";
cont.children[1].style.backgroundColor = "yellow";
cont.children[2].style.backgroundColor = "green";
cont.children[3].style.backgroundColor = "blue";


let boxes =  document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "pink"

document.getElementById("red");

//this will return the array of elements so we have to use every element
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "hotpink";
})

document.querySelector(".box").style.backgroundColor = "royalblue";

//matches, closest and contain methods

// matches -- check weather a element matches a particular css selector
console.log(cont.children[0].matches("#red"));
//closest -- return the closest ancistor of the current element in the tree
console.log(cont.children[0].closest(".container"));
//contain -- check if the methord is the decendent of the another element
console.log(document.querySelector('.container').contains(cont.children[0]));   //check if the box is a decendent of container