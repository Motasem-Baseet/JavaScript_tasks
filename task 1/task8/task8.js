let user = 65;
let yearOfBirth = 1955;
let currentYear = 2024;
if (user >= 30  && user < 60){
    console.log("You are not eligible. you may join another brograms");
}else if (user >=18 && user < 30){
    console.log("You are eligible")
}else if (user < 18){
    console.log("You mat join the kids program");
    
}else {
    console.log("You may join the seniors program");
    console.log("your age is:",currentYear-yearOfBirth);
    
}


function switchCase(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    
    return result;
}


let input = "OrAnGe";
console.log(switchCase(input));  


function toCamelCase(str) {
    return str
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

let input1 = "Coding Academy by Orange";
console.log(toCamelCase(input1)); 


function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}


let inputArray = ["Coding", "Academy", "By", "Orange"];
let elementToRemove = "By";
console.log(removeElement(inputArray, elementToRemove));  

function oddEven(no){
    if (no % 2 === 0){
        return "Even";
        
    }else{
        return "Odd";
        
    }
}
console.log(oddEven(5));
console.log(oddEven(4));



function notNum(num){
    if (num != ''){
        return num;
}else{
    return "Wrong entery";
}
}
console.log(notNum(155));
console.log(notNum("Hello"));


function bigNum(num1 , num2){
    return num1 > num2 ? num1 : num2;
    }

console.log(bigNum(5 , 10));
console.log(bigNum(20 , 10));


function triangle(a , b, c){
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
console.log(triangle(3,3,3));
console.log(triangle(3,4,3));
console.log(triangle(3,4,5));



function isInRange(num, start, end) {
    return num >= start && num <= end;
}

console.log(isInRange(5, 1, 10)); 
console.log(isInRange(15, 1, 10));




function isInRange(num, start, end) {
    return num >= start && num <= end;
}


console.log(isInRange(5, 1, 10));  
console.log(isInRange(15, 1, 10));