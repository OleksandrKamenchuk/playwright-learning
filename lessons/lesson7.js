// Loops

/* console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
console.log('Hello world')
 */

/* for(statement1; statement2; statement3) {
    //code to be executed
} */ 

// for loop (for i loop)
for (var i = 0; i < 5; i++) {
    console.log('Hello world ' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for(let car of cars) {
    console.log(car)
    if(car == "Toyota") {
        break
    }
}

// ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})