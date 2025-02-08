// Promises
// Is  a promise of code excecution (either excecute or fail)
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more readable and structured way.

// creating a Promise
let prom = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("error");
    }else{
        resolve(a);
    }
});

// Promises can be chained using .then() and .catch() to handle sequential asynchronous operations.
prom
.then((a)=>{
    console.log(a);
})
.catch((error)=>{
    console.log(error);
})


/* some other types of promises
promise.all -- wait for all promises to resolve and return the array of their result if any one of them fail it become error and all fails
promise.allSettle -- wait for all promises to settle(fail or pass) and return there result in an array
*/