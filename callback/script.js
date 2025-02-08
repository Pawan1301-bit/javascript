/*A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming to handle tasks that take time to complete, such as:
Reading a file
Making a network request
Waiting for a timer to complete */

function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Execute the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

//callback loop from hell
// Callback hell occurs when you nest multiple callback functions inside each other, making the code difficult to read and maintain. This often happens when dealing with multiple asynchronous operations that depend on each other.
getData((data1) => {
    processData(data1, (data2) => {
        saveData(data2, (data3) => {
            console.log("Final result:", data3);
        });
    });
});
//which make our code difficult to read, maintain and handle

/*1. Why Callbacks Are Needed
Even though Web APIs handle the actual work (e.g., waiting for a timer, making a network request), your JavaScript code needs a way to:
Know when the task is complete.
Handle the result of the task (e.g., the data from a network request or the completion of a timer).
Continue execution after the task is done. */