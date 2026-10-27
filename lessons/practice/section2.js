// ============================================================
// Task 1. Variables and interpolation
// Create const testName = "Login test" and let status = "passed".
// Using backticks, print:
//   Test "Login test" finished with status: passed
// ============================================================

/* const testName = "Login test";
let testStatus = "passed";

console.log(`Test "${testName}" finished with status: ${testStatus}`); */

// ============================================================
// Task 2. Object
// Create object `user` with fields: email, password, isAdmin.
// Print the email. Then flip isAdmin to the opposite value
// and print the whole object.
// ============================================================

/* const user = {
  email: "test0@dog1.example.com",
  password: "Password123",
  isAdmin: false,
};
console.log(user.email);
user.isAdmin = !user.isAdmin;
console.log(user); */

// ============================================================
// Task 3. Array
// const browsers = ["chromium", "firefox"]
// Add "webkit", print the number of browsers and the second element.
// ============================================================

/* const browsers = ["chromium", "firefox"];
browsers.push("webkit");
console.log(browsers.length);
console.log(browsers[1]); */

// ============================================================
// Task 4. Conditions
// Function getStatusMessage(code) returns:
//   200 -> "OK", 404 -> "Not Found", 500 -> "Server Error",
//   anything else -> "Unknown".
// Check it with 4 different values.
// ============================================================

/* function getStatusMessage(code) {
  if (code === 200) {
    return "OK";`
  } else if (code === 404) {
    return "Not Found";
  } else if (code === 500) {
    return "Server Error";
  } else {
    return "Unknown";
  }
}
console.log(
  getStatusMessage(200),
  getStatusMessage(404),
  getStatusMessage(500),
  getStatusMessage(529),
); */

// ============================================================
// Task 5. Logical operators
// Function canLogin(email, password) returns true only if
// both are not empty AND password has at least 8 characters
// (hint: password.length).
// ============================================================

/* function canLogin(email, password) {
  return !!email && !!password && password.length >= 8;
}

console.log(canLogin("test@example.com", "Password123"));
console.log(canLogin("", "Password123"));
console.log(canLogin("test@example.com", ""));
console.log(canLogin("test@example.com", "short")); */

// ============================================================
// Task 6. Loop
// const results = ["passed", "failed", "passed", "skipped", "failed"]
// Using `for`, count each status and print:
//   Passed: 2, Failed: 2, Skipped: 1
// ============================================================

/* const results = ["passed", "failed", "passed", "skipped", "failed"];
let passed = 0;
let failed = 0;
let skipped = 0;
for (let status of results) {
  if (status === "passed") {
    passed++;
  } else if (status === "failed") {
    failed++;
  } else if (status === "skipped") {
    skipped++;
  }
}

console.log(`Passed: ${passed}, Failed: ${failed}, Skipped: ${skipped}`);
 */
// ============================================================
// Task 7. Function + array of objects
// const tests = [
//   { name: "Login", duration: 3200, status: "passed" },
//   { name: "Checkout", duration: 8100, status: "failed" },
//   { name: "Search", duration: 1500, status: "passed" },
// ];
// Write a function that returns names of tests longer than 3 seconds.
// ============================================================

/* const tests = [
  { name: "Login", duration: 3200, status: "passed" },
  { name: "Checkout", duration: 8100, status: "failed" },
  { name: "Search", duration: 1500, status: "passed" },
];

function getLongTests(tests) {
  let testNames = [];
  for (let testSample of tests) {
    if (testSample.duration > 3000) {
      testNames.push(testSample.name);
    }
  }
  return testNames;
}

console.log(getLongTests(tests)); */

// ============================================================
// Task 8. Class
// Class TestRun with fields `name` and `results` (empty array).
// Methods:
//   addResult(status) - adds a status to results
//   summary() - returns e.g. "Smoke run: 3 tests, 1 failed"
// Create two different runs.
// ============================================================

class TestRun {
  constructor(name) {
    this.name = name;
    this.results = [];
  }
  addResult(status) {
    this.results.push(status);
  }
  summary() {
    let testCount = 0;
    for (const status of this.results) {
      if (status === "failed") testCount++;
    }
    return `${this.name}: ${this.results.length} tests, ${testCount} failed`;
  }
}
const smoke = new TestRun("Smoke run");
smoke.addResult("passed");
smoke.addResult("failed");
smoke.addResult("passed");
console.log(smoke.summary());

const regression = new TestRun("Regression run");
regression.addResult("failed");
regression.addResult("failed");
regression.addResult("passed");
console.log(regression.summary());

// ============================================================
// Task 7a. Same pattern, different filter
// Using the same `tests` array, write getFailedTests(tests)
// that returns names of tests with status "failed".
// Expected: [ 'Checkout' ]
// ============================================================

// ============================================================
// Task 7b. Return numbers instead of names
// Write getDurations(tests) that returns an array of all durations
// in seconds (divide by 1000).
// Expected: [ 3.2, 8.1, 1.5 ]
// ============================================================

// ============================================================
// Task 7c. Count instead of collect
// Write countPassed(tests) that returns the NUMBER of passed tests.
// Expected: 2
// Hint: combine the counter from Task 6 with objects from Task 7.
// ============================================================
