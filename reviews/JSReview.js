
let x;

console.log(typeof x);

console.log(x * 3);


x = 100;

console.log(typeof x);

x = "Test";

console.log(typeof x);

x = true;

console.log(typeof x);


console.log("===========================");

let actualElementText = "Contact Button";

let expectedElementText = "Contact Button";

console.log(actualElementText === expectedElementText);
console.log(actualElementText == expectedElementText);


let actualNumber = "300.5";
let expectedNumber = 300.5;

console.log(actualNumber === expectedNumber); // false
console.log(actualNumber == expectedNumber); // true


console.log("===========================");

let actualTitle = "Home Page";
let expectedTitle = "home page";

console.log(actualTitle === expectedTitle); // false
console.log(actualTitle.toLowerCase() === expectedTitle.toLowerCase()); // true

console.log("===========================");

// let vs const vs var

let num = 100;
// let num = 200;

const pi = 3.14;

console.log(pi);

//pi = 3.15;

console.log(pi);

const baseUrl = "https://www.example.com/api/";

console.log("===========================");

let environment = "dev";

if(environment === "test") {
    console.log("Tests are running in test environment");
}else if(environment === "stage") {
    console.log("Tests are running in stage environment");
}else if(environment === "dev") {
    console.log("Tests are running in dev environment");
}else if(environment === "uat") {
    console.log("Tests are running in uat environment");
}else {
    throw new Error("Unknown environment: " + environment);
}

console.log("============================");

switch (environment) {
    case "test":
        console.log("Tests are running in test environment");
        break;
    case "stage":
        console.log("Tests are running in stage environment");
        break;
    case "dev":
        console.log("Tests are running in dev environment");
        break;
    case "uat":
        console.log("Tests are running in uat environment");
        break;
    default:
        throw new Error("Unknown environment: " + environment);
}


console.log("============================");


let times = 10;

for(let i = 1; i <= times; i++) {
   console.log("Click the button " + i);
}

console.log("============================");

// create a for loop that has 10 iterations.
for(let i = 0; i < 10; i++) {
    console.log("Iteration: " + i);
}

console.log("============================");


let dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"];

for(let eachOption of dropdownOptions) {
    console.log("Verifying Dropdown option: " + eachOption);
}

console.log("=======================================");

let checkBoxOptions = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4", "Checkbox 5", "Checkbox 5", "Checkbox 5"];

console.log(checkBoxOptions);

let checkBoxOptions2 = new Set(checkBoxOptions);

console.log(checkBoxOptions2);

let maps = {
    "name": "John", 
    "age": 30, 
    "city": "New York"
};

console.log(maps);


// use for of loop to iterate through the array.
for(let eachOption of checkBoxOptions) {
    console.log("Verifying Checkbox option: " + eachOption);
}

console.log("====================="); 

// use for in loop to iterate through the map.
for(let key in maps) {
    console.log("Key: " + key + ", Value: " + maps[key]);
}

console.log("====================="); 

// use for in loop to iterate through the set.
for(let option of checkBoxOptions2) {
    console.log("Verifying Checkbox option: " + option);
}

console.log("=======================");

console.log(checkBoxOptions[1]);