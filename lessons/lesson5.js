// Logical "AND"

console.log(true && false) //all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(false || false) //any value should be TRUE for expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = false
// var elegibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
var elegibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + elegibilityForDriversLicense)

//Logical "NOT" 
console.log(!true)
console.log(6 !== 10)