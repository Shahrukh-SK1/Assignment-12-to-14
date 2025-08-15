


// Answer No .2

var num1 = +prompt("Enter the first integar");
var num2 = +prompt("Enter the second integar");

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}



// Answer No .3

var num = +prompt("Enter the number");

if (num > 0) {
    alert("Number is Positve");
} else if (num < 0) {
    alert("Number is Negative");
} else {
    alert("Number is Zero");
}


// Answer No 4

var char = prompt("Enter a single character");

char = char.toLowerCase();

var vowel = (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");
alert(vowel);


// Answer No 5

var passw = "shahrukh";

var userPass = prompt("Enter his password");

if (userPass === "") {
    alert("Please enter your password");
} else if (userPass === passw) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// Answer No 6

var greeting;

var hour = 13;

var userHour = +prompt("Enter the hour");

if (userHour < 18) {
    alert(greeting = "Good day");
} else {
    alert(greeting = "Good evening");
}


// Answer No 7


var time = +prompt("Enter the time in 24 hours clock format")

if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time <= 1700 ) {
    alert ("Good afternoon");
} else if (time >= 1700 && time <= 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night");
} else {
    alert("Invalid time enter")
}

