// async and await are syntactic sugar built on top of promises. They make asynchronous code look and behave more like synchronous code

//async function return a promise
async function fetchData() {
    try {   // we use try catch to handle errors 
      let response = await fetch('https://api.example.com/data');   //this await function make sure that the next line does not excecture until the promise is resolved -- it is always used inside a async function 
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();