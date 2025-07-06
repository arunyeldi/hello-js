// ✅ JavaScript Loops

// 👉 for loop
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

// 👉 while loop
let i = 0;
while (i < 3) {
  console.log("Hello ", i);
  i++;
}

// 👉 do...while loop
let j = 0;
do {
  console.log("do...while j =", j);
  j++;
} while (j < 1);

// 👉 for...of (arrays, strings)
let word = "hello";
for (let char of word) {
  console.log(char);
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// 👉 for...in (objects)
let user = { name: "Arun", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}

// 👉 continue & break
for (let k = 0; k < 5; k++) {
  if (k === 2) continue;
  if (k === 4) break;
  console.log("Loop:", k);
}

// ✅ Real-World Challenge: String Filter
let word2 = "javascript";
for (let char of word2) {
  if (char === "a") continue; // skip a
  console.log(char);
}

// ✅ Real-World Challenge: Count "yes" responses
let surveyResponses = {
  user1: "yes",
  user2: "no",
  user3: "yes",
  user4: "maybe",
  user5: "yes",
  user6: "no"
};

let yesCount = 0;
for (let user in surveyResponses) {
  if (surveyResponses[user] === "yes") {
    yesCount++;
  }
}
console.log("Yes responses:", yesCount); // Output: 3
