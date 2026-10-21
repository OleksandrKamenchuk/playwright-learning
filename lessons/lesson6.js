//Conditional statements

// if(condition) {
//     //execute some dode here
// } else {
//     //execute some code here
// }

// If hour between 6 and 12, print "Good morning"
// If hour between 12 and 18 print "Good afternoon"
// Ohterwise: Good evening

var hour = 6;

/* if (hour >= 6 && hour < 12) {
    console.log('Good morning')
} else if ( hour >=12 && hour < 18) {
    console.log('Good afternoon')
} else {
    console.log('Good evening')
} */

var ageIsMoreThanEighteen = false;
var isUSCitizen = true;

if (ageIsMoreThanEighteen || isUSCitizen) {
  console.log("Customer is eligible for driver's license");
} else {
  console.log("Customer is not eligible for driver's license");
}
