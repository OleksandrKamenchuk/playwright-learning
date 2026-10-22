// ============================================================
// Task 1. Variables and interpolation
// Create const testName = "Login test" and let status = "passed".
// Using backticks, print:
//   Test "Login test" finished with status: passed
// ============================================================

const testName = "Login test"
let testStatus = "passed"

 console.log(`Test "${testName}" finished with status: ${testStatus}`)

 // ============================================================
// Task 2. Object
// Create object `user` with fields: email, password, isAdmin.
// Print the email. Then flip isAdmin to the opposite value
// and print the whole object.
// ============================================================

const user = {
    email: "test0@dog1.example.com",
    password: "Password123",
    isAdmin: false
}
console.log(user.email)
user.isAdmin =!user.isAdmin
console.log(user)

// ============================================================
// Task 3. Array
// const browsers = ["chromium", "firefox"]
// Add "webkit", print the number of browsers and the second element.
// ============================================================

const browsers = ["chromium", "firefox"]
browsers.push("webkit")
console.log(browsers.length)
console.log(browsers[1])

// ============================================================
// Task 4. Conditions
// Function getStatusMessage(code) returns:
//   200 -> "OK", 404 -> "Not Found", 500 -> "Server Error",
//   anything else -> "Unknown".
// Check it with 4 different values.
// ============================================================


function getStatusMessage(code) {
    if (code === 200) {
        return "OK"
    } else if (code === 404) {
        return "Not Found"
    } else if (code === 500) {
        return "Server Error"
    } else {
        return "Unknown"
    }
}
console.log(getStatusMessage(200), getStatusMessage(404), getStatusMessage(500), getStatusMessage(529));

// ============================================================
// Task 5. Logical operators
// Function canLogin(email, password) returns true only if
// both are not empty AND password has at least 8 characters
// (hint: password.length).
// ============================================================



// ============================================================
// Task 6. Loop
// const results = ["passed", "failed", "passed", "skipped", "failed"]
// Using `for`, count each status and print:
//   Passed: 2, Failed: 2, Skipped: 1
// ============================================================



// ============================================================
// Task 7. Function + array of objects
// const tests = [
//   { name: "Login", duration: 3200, status: "passed" },
//   { name: "Checkout", duration: 8100, status: "failed" },
//   { name: "Search", duration: 1500, status: "passed" },
// ];
// Write a function that returns names of tests longer than 3 seconds.
// ============================================================



// ============================================================
// Task 8. Class
// Class TestRun with fields `name` and `results` (empty array).
// Methods:
//   addResult(status) - adds a status to results
//   summary() - returns e.g. "Smoke run: 3 tests, 1 failed"
// Create two different runs.
// ============================================================