// ✅ Real-World Access Control System

let role = "editor";
let isVerified = true;
let isSuspended = false;
let has2FA = false;

// 👉 Classic nested version
if (isSuspended) {
  console.log("Access blocked: Account suspended.");
} else if (!isVerified) {
  console.log("Access denied: Please verify your account.");
} else if (!has2FA) {
  console.log("Access denied: Two-factor authentication required.");
} else {
  switch (role) {
    case "admin":
      console.log("Welcome Admin! Full access granted.");
      break;
    case "editor":
      console.log("Welcome Editor! Edit-level access granted.");
      break;
    case "viewer":
      console.log("Welcome Viewer! Read-only access granted.");
      break;
    default:
      console.log("Welcome Guest! Limited access granted.");
  }
}

// 👉 Cleaner refactored version (early return pattern)
function getAccessStatus(role, isVerified, isSuspended, has2FA) {
  if (isSuspended) return "Access blocked: Account suspended.";
  if (!isVerified) return "Access denied: Please verify your account.";
  if (!has2FA) return "Access denied: Two-factor authentication required.";

  switch (role) {
    case "admin":
      return "Welcome Admin! Full access granted.";
    case "editor":
      return "Welcome Editor! Edit-level access granted.";
    case "viewer":
      return "Welcome Viewer! Read-only access granted.";
    default:
      return "Welcome Guest! Limited access granted.";
  }
}

console.log(getAccessStatus("editor", true, false, false));
// Output: Access denied: Two-factor authentication required
