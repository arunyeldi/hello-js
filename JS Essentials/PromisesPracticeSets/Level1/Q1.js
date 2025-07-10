/* Question

Create a Promise that resolves after 2 seconds with the message "Hello, Arun!". 
Use .then() to print the message.

*/

// Code

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Hello, Arun!');
        }, 2000);
    });
}

promise1().then(function(fromResolve) {
    console.log(fromResolve);
});

// Using async/await

const promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello, Arun!"), 2000);
    });
};

const response = async () => {
    const responseMessage = await promise2();
    console.log(responseMessage);
};

response();
