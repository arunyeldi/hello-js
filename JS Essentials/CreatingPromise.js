/*

Creating a promise
Consuming a promise
Promise rejection
Error Handling
Promise Chaining
Advanced Promise Chaining
Advanced Error Handling

Need to avoid the Pyramid of Doom - chaining takes place

*/

// Lets create a Promise

// const promise = () => new Promise((resolve, reject) => {
    
//     let response = await fetch(url);
//     return response;
// });

const promiseAccessing = async () => {
    try {
        let url = "https://jsonplaceholder.typicode.com/user";
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
    } catch {
        console.log("No users found");
    }
};

promiseAccessing();