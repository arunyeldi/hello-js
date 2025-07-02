// ✅ JavaScript Data Types

// 👉 Primitive Types
let name = "Arun";           // string
let age = 22;                // number
let isStudent = true;        // boolean
let value;                   // undefined
let nothing = null;          // null (intentional empty)
let id = Symbol("id");       // unique symbol
let bigNum = 1234567890123456789012345n; // BigInt

// 👉 typeof operator
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof value);      // "undefined"
console.log(typeof nothing);    // "object" (weird quirk)
console.log(typeof bigNum);     // "bigint"
