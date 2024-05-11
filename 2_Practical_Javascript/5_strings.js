
let singleQuote = 'I am a single quote string';
let doubleQuote = "I am double quote string";
let templateString = `I am template string`;

// console.log("single", singleQuote);
// console.log("double", doubleQuote);
// console.log("template", templateString);

// string interpolation
// let age = 28;
// let name = "Jasbir";
// let templateText = `I am ${name} and 
// ${age} year's old`;
// let doubleText = "I am " + name + " and " + age + " year's old";
// console.log(templateText);
// console.log(doubleText);

let message = 'How are you';
let character = message.charAt(2);
let ascii = message.charCodeAt(2);
console.log(character, " ", ascii);
// trim

message = message.trim();

// split 
let splitArr = message.split(" ");
console.log(splitArr);
// join 
const joinedString = splitArr.join("+");
console.log(joinedString);

// console.log("26", message);
// substring, startWith, endsWith, contains

console.log(message.startsWith("Hello"))
console.log(message.includes("are"));















