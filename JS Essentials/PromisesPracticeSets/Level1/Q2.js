/*

Create a JavaScript program using fetch() to request data from a non-existent domain or invalid URL. Since the URL is invalid, the Promise will reject.

Use .catch() to handle the error and print the error message to the console.

*/

// Code

let url = "https://jsonplaceholder.typicode.com/user";
fetch(url)
.then(response => {
    if(!response.ok) {
        throw new Error("Invalid URL: " + response.status);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error.message);
});