// Simulating asynchronous functions with callbacks
function fetchUserData(callback) {
    setTimeout(() => {
        const userData = { id: 1, name: "John Doe" };
        callback(null, userData);
    }, 1000);
}

function processUserData(userData, callback) {
    setTimeout(() => {
        if (userData) {
            userData.age = 30; // Add age to user data
            callback(null, userData);
        } else {
            callback("User data not found", null);
        }
    }, 1000);
}

function saveUserData(userData, callback) {
    setTimeout(() => {
        if (userData) {
            console.log("User data saved:", userData);
            callback(null, "Data saved successfully!");
        } else {
            callback("Failed to save user data", null);
        }
    }, 1000);
}

// Callback hell (nested callbacks)
fetchUserData((error, userData) => {
    if (error) {
        console.error("Error fetching user data:", error);
    } else {
        processUserData(userData, (error, processedData) => {
            if (error) {
                console.error("Error processing user data:", error);
            } else {
                saveUserData(processedData, (error, result) => {
                    if (error) {
                        console.error("Error saving user data:", error);
                    } else {
                        console.log(result);
                    }
                });
            }
        });
    }
});





//Using promises
// Simulating asynchronous functions with promises
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { id: 1, name: "John Doe" };
            resolve(userData);
        }, 1000);
    });
}

function processUserData(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData) {
                userData.age = 30; // Add age to user data
                resolve(userData);
            } else {
                reject("User data not found");
            }
        }, 1000);
    });
}

function saveUserData(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData) {
                console.log("User data saved:", userData);
                resolve("Data saved successfully!");
            } else {
                reject("Failed to save user data");
            }
        }, 1000);
    });
}

// Using promises (clean and readable)
fetchUserData()
    .then(processUserData)
    .then(saveUserData)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    