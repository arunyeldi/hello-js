// ✅ JavaScript Control Flow

let age = 20;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}

// 👉 Ternary Operator
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access);

// 👉 Short-circuiting
let isLoggedIn = true;
isLoggedIn && console.log("Welcome");

// 👉 Switch Statement
let role = "editor";

switch (role) {
  case "admin":
    console.log("Admin access");
    break;
  case "editor":
    console.log("Editor access");
    break;
  default:
    console.log("Viewer access");
}

// ✅ Real-World Example: Battery Status Check
let isOnline = true;
let battery = 10;
let charging = false;

if (isOnline) {
  let status = charging 
    ? "Charging"
    : battery < 15
      ? "Low Battery"
      : "Okay";
  console.log("Device Status:", status);
} else {
  console.log("Device Offline");
}
// Output: "Device Status: Low Battery"
